/* ==========================================================================
   Antonov Outdoor – Interaktive Tools (ohne externe Bibliotheken)
   1) Windlastzonen-Rechner nach Postleitzahl (DIN EN 1991-1-4/NA)
   2) Baugenehmigungs-Check nach Bundesland (Terrassenüberdachung / Carport)

   WICHTIG / HAFTUNG:
   Beide Tools sind kostenlose ORIENTIERUNGSHILFEN. Sie ersetzen weder die
   verbindliche amtliche Windzonenkarte / eine statische Bemessung noch die
   Auskunft der zuständigen Baubehörde. Werte können sich ändern und hängen
   vom Einzelfall ab (Grenzabstand, Höhe, Innen-/Außenbereich, Bebauungsplan …).
   Rechtsstände in den Texten bei Bedarf aktualisieren.
   ========================================================================== */
(function () {
  "use strict";

  /* =======================================================================
     1) WINDLASTZONEN-RECHNER
     Näherung über die ersten PLZ-Ziffern. Für Süddeutschland (7x/8x/9x)
     überwiegend Zone 1, Küste = Zone 3/4.
     ======================================================================= */
  var ZONEN_INFO = {
    1: { v: "22,5 m/s", q: "0,32 kN/m²", text: "geringe Windlast – typisch für das Binnenland Süddeutschlands." },
    2: { v: "25,0 m/s", q: "0,39 kN/m²", text: "mittlere Windlast – weite Teile der Mitte Deutschlands." },
    3: { v: "27,5 m/s", q: "0,47 kN/m²", text: "erhöhte Windlast – norddeutsches Tiefland / küstennah." },
    4: { v: "30,0 m/s", q: "0,56 kN/m²", text: "hohe Windlast – Küste sowie Nord- und Ostseeinseln." }
  };

  // Basiszone je 1. PLZ-Ziffer
  var BASIS = { "0": 2, "1": 2, "2": 3, "3": 2, "4": 2, "5": 2, "6": 1, "7": 1, "8": 1, "9": 1 };
  // Feinkorrektur je 2-stelligem PLZ-Präfix (Küste & Ausnahmen)
  var PRAEFIX = {
    // Zone 4 – unmittelbare Küste / Inseln
    "25": 4, "26": 4, "27": 4, "18": 4, "17": 4,
    // Zone 3 – küstennahes Tiefland
    "19": 3, "20": 3, "21": 3, "22": 3, "23": 3, "24": 3, "28": 3, "29": 3, "16": 3, "39": 3,
    // Zone 2 – südlicher Rand der 2er-Region
    "37": 2, "38": 2
  };

  function ermittleZone(plz) {
    var p2 = plz.substring(0, 2);
    if (PRAEFIX.hasOwnProperty(p2)) return PRAEFIX[p2];
    return BASIS[plz.charAt(0)] || 2;
  }

  var windForm = document.getElementById("windform");
  if (windForm) {
    windForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var eingabe = document.getElementById("wind-plz").value.trim();
      var box = document.getElementById("wind-ergebnis");
      if (!/^\d{5}$/.test(eingabe)) {
        box.className = "tool__ergebnis warn aktiv";
        box.innerHTML = "<h4>Bitte gültige PLZ eingeben</h4><p>Die Postleitzahl muss aus genau 5 Ziffern bestehen.</p>";
        return;
      }
      var z = ermittleZone(eingabe);
      var info = ZONEN_INFO[z];
      box.className = "tool__ergebnis zone-" + z + " aktiv";
      box.innerHTML =
        '<span class="tool__badge">Windzone ' + z + '</span>' +
        '<h4>PLZ ' + eingabe + ' → Windzone ' + z + '</h4>' +
        '<p>' + info.text + '</p>' +
        '<p><strong>Basiswindgeschwindigkeit v<sub>b,0</sub>:</strong> ' + info.v +
        ' &nbsp;·&nbsp; <strong>Basisgeschwindigkeitsdruck:</strong> ' + info.q + '</p>' +
        '<p>Für Ihre Überdachung bemessen wir Pfosten, Sparren und Verglasung passend zu dieser Zone – ' +
        'inklusive Schneelastzone Ihres Standorts. <a href="kontakt.html">Kostenlose Fachberatung anfragen →</a></p>' +
        '<p class="tool__disclaimer">Orientierungswert nach der Windzonenkarte (DIN EN 1991-1-4/NA). ' +
        'Die verbindliche Einstufung erfolgt anhand der amtlichen Karte bzw. durch unsere statische Auslegung.</p>';
    });
  }

  /* =======================================================================
     2) BAUGENEHMIGUNGS-CHECK nach Bundesland
     Vereinfachte, häufig genannte Richtwerte für VERFAHRENSFREIE Vorhaben
     (an ein Gebäude angebaute Terrassenüberdachung bzw. Carport).
     Immer mit dem örtlichen Bauamt / der Landesbauordnung abgleichen!
     ======================================================================= */
  var LAENDER = {
    "bw": { name: "Baden-Württemberg", terrasse: "bis 30 m² Grundfläche und max. 3 m Tiefe", carport: "bis 30 m² Grundfläche", hinweis: "Verfahrensfrei nur an bestehende Gebäude angebaut und im Innenbereich. Grenzabstände (i. d. R. 2,5 m) beachten." },
    "by": { name: "Bayern", terrasse: "bis 30 m² überdachte Fläche und max. 3 m Tiefe", carport: "bis 50 m² Fläche und 3 m Wandhöhe", hinweis: "Nach Art. 57 BayBO verfahrensfrei. In reinen/allgemeinen Wohngebieten sind Grenzgaragen/Carports oft privilegiert." },
    "be": { name: "Berlin", terrasse: "bis 30 m² Grundfläche", carport: "bis 30 m² und 3 m Höhe", hinweis: "Verfahrensfrei nach BauO Bln, sofern an ein Gebäude angebaut. Bebauungsplan prüfen." },
    "bb": { name: "Brandenburg", terrasse: "bis 30 m² Grundfläche", carport: "bis 30 m² Grundfläche", hinweis: "Verfahrensfrei nach BbgBO bei Anbau an ein Gebäude; Abstandsflächen beachten." },
    "hb": { name: "Bremen", terrasse: "bis 30 m² Grundfläche", carport: "bis 30 m²", hinweis: "Verfahrensfrei nach BremLBO; Grenzabstände und Gestaltungssatzungen prüfen." },
    "hh": { name: "Hamburg", terrasse: "bis 30 m² Grundfläche und max. 3 m Tiefe", carport: "bis 30 m²", hinweis: "Verfahrensfrei nach HBauO; im Ausland-/Vorgarten­bereich können Sonderregeln gelten." },
    "he": { name: "Hessen", terrasse: "bis 30 m² Grundfläche", carport: "bis 50 m² und 3 m Höhe", hinweis: "Nach HBO genehmigungsfrei; Abstand zur Grenze und Bebauungsplan beachten." },
    "mv": { name: "Mecklenburg-Vorpommern", terrasse: "bis 30 m² Grundfläche", carport: "bis 30 m²", hinweis: "Verfahrensfrei nach LBauO M-V bei Anbau an ein Gebäude." },
    "ni": { name: "Niedersachsen", terrasse: "bis 30 m² Grundfläche und max. 3 m Tiefe", carport: "bis 30 m² und 3 m Höhe", hinweis: "Verfahrensfrei nach NBauO; überdachte Terrasse muss an ein Gebäude angebaut sein." },
    "nw": { name: "Nordrhein-Westfalen", terrasse: "bis 30 m² Grundfläche und max. 4,5 m Tiefe", carport: "bis 30 m² Nutzfläche", hinweis: "Nach § 62 BauO NRW verfahrensfrei bei Anbau an ein Wohngebäude." },
    "rp": { name: "Rheinland-Pfalz", terrasse: "bis 50 m² Grundfläche", carport: "bis 50 m² und 3,20 m Höhe", hinweis: "Nach LBauO RLP großzügig geregelt; Grenzabstände beachten." },
    "sl": { name: "Saarland", terrasse: "bis 36 m² Grundfläche", carport: "bis 36 m²", hinweis: "Verfahrensfrei nach LBO Saarland; örtliche Satzungen prüfen." },
    "sn": { name: "Sachsen", terrasse: "bis 30 m² Grundfläche", carport: "bis 50 m² und 3 m Höhe", hinweis: "Verfahrensfrei nach SächsBO bei Anbau an ein Gebäude." },
    "st": { name: "Sachsen-Anhalt", terrasse: "bis 30 m² Grundfläche", carport: "bis 50 m² und 3 m Höhe", hinweis: "Verfahrensfrei nach BauO LSA; Abstandsflächen beachten." },
    "sh": { name: "Schleswig-Holstein", terrasse: "bis 30 m² Grundfläche", carport: "bis 20 m² (größer ggf. genehmigungspflichtig)", hinweis: "Verfahrensfrei nach LBO SH; an der Küste zusätzlich erhöhte Windlast beachten." },
    "th": { name: "Thüringen", terrasse: "bis 40 m² Grundfläche", carport: "bis 40 m²", hinweis: "Verfahrensfrei nach ThürBO – vergleichsweise großzügiger Rahmen." }
  };

  var bauForm = document.getElementById("bauform");
  if (bauForm) {
    // Dropdown mit Bundesländern füllen
    var sel = document.getElementById("bau-land");
    if (sel && sel.options.length <= 1) {
      Object.keys(LAENDER).forEach(function (key) {
        var o = document.createElement("option");
        o.value = key; o.textContent = LAENDER[key].name;
        sel.appendChild(o);
      });
    }

    bauForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var landKey = document.getElementById("bau-land").value;
      var art = document.getElementById("bau-art").value; // "terrasse" | "carport"
      var box = document.getElementById("bau-ergebnis");
      if (!landKey) {
        box.className = "tool__ergebnis warn aktiv";
        box.innerHTML = "<h4>Bitte Bundesland wählen</h4><p>Wählen Sie Ihr Bundesland aus der Liste.</p>";
        return;
      }
      var L = LAENDER[landKey];
      var grenze = art === "carport" ? L.carport : L.terrasse;
      var artName = art === "carport" ? "Carport" : "Terrassenüberdachung";
      box.className = "tool__ergebnis info aktiv";
      box.innerHTML =
        '<span class="tool__badge">' + L.name + '</span>' +
        '<h4>' + artName + ' in ' + L.name + '</h4>' +
        '<p>In vielen Fällen <strong>genehmigungsfrei</strong>: ' + grenze + '.</p>' +
        '<p><strong>Größer oder Sonderfall?</strong> Dann ist meist ein Bauantrag bzw. eine ' +
        'Kenntnisgabe nötig – wir unterstützen Sie dabei.</p>' +
        '<p><strong>Hinweis:</strong> ' + L.hinweis + '</p>' +
        '<p><a href="kontakt.html">Unverbindlich prüfen lassen →</a></p>' +
        '<p class="tool__disclaimer">Vereinfachte Orientierung – keine Rechtsberatung. ' +
        'Verbindlich ist die jeweilige Landesbauordnung und die Auskunft Ihres örtlichen Bauamts.</p>';
    });
  }
})();
