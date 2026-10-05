/* Antonov Outdoor – Bausatz-Shop: PRODUKTKATALOG
   Jedes Produkt beschreibt Maße, Auswahlfelder, Zubehör und seine Preisberechnung (Listenpreise netto aus js/preise.js).
   Maße im Konfigurator in cm, Preisraster in mm. Berechnet wird immer die nächstgrößere Rasterstufe. */
(function () {
  var S = window.AO_SHOP, R = window.AO_RASTER, LP = window.AO_PREISE, SP = window.AO_SPARREN, C = S.config;
  var rast = S.raster;

  // ---------- Kategorien ----------
  var KATEGORIEN = [
    { id: "terrasse", name: "Terrassendächer", kurz: "Terrassendach", text: "Glas- und Polycarbonat-Dächer als Wandanbau oder freistehend.", bild: "bilder/terrassenueberdachung-1-m.jpg" },
    { id: "lamelle", name: "Lamellendächer", kurz: "Lamellendach", text: "Drehbare Lamellen für Sonne, Schatten und Regenschutz – elektrisch.", bild: "bilder/pergola-3.jpg" },
    { id: "carport", name: "Carports", kurz: "Carport", text: "Freistehende Alu-Carports mit Trapezblech.", bild: "bilder/flatline-1-m.jpg" },
    { id: "glas", name: "Glaswände & Schiebeanlagen", kurz: "Glaswände", text: "Seitenwände für Ihre Überdachung – vom Glas-Schiebeelement bis zum Keilfenster.", bild: "bilder/kaltwintergarten-1.jpg" },
    { id: "markise", name: "Markisen", kurz: "Markisen", text: "Unterdach-, Aufdach-, Senkrecht-, Kassetten- und Pergola-Markisen mit Somfy-Funkmotor.", bild: "bilder/markise-aufdach-1.jpg" },
    { id: "schatten", name: "Sicht- & Sonnenschutz", kurz: "Sichtschutz", text: "Lamellenwände und Sonnensegel für mehr Privatsphäre und Schatten.", bild: "bilder/pergola-6.jpg" },
    { id: "vordach", name: "Vordächer", kurz: "Vordach", text: "Moderne Aluminium-Vordächer für Ihren Hauseingang – auf Wunsch mit Seitenteil und Briefkasten.", bild: "bilder/vordach-frontline-8.jpg" },
    { id: "gelaender", name: "Glasgeländer", kurz: "Glasgeländer", text: "Ganzglasgeländer für Balkon und Terrasse – mit Aluminium-Bodenprofil und Handlauf.", bild: "bilder/gelaender-1.jpg" }
  ];

  // ---------- Bausteine ----------
  var svgWand = '<svg viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="6" y="6" width="14" height="58" fill="#d9d4c7" stroke="none"/><path d="M20 18 L108 26"/><path d="M104 26 V62"/><path d="M8 64 H114" stroke-width="2" opacity=".5"/></svg>';
  var svgFrei = '<svg viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M10 20 L110 26"/><path d="M16 21 V62"/><path d="M104 26 V62"/><path d="M8 64 H114" stroke-width="2" opacity=".5"/></svg>';
  var svgFlachWand = '<svg viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="6" y="6" width="14" height="58" fill="#d9d4c7" stroke="none"/><path d="M20 20 H108"/><path d="M104 20 V62"/><path d="M8 64 H114" stroke-width="2" opacity=".5"/></svg>';
  var svgFlachFrei = '<svg viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M10 20 H110"/><path d="M16 20 V62"/><path d="M104 20 V62"/><path d="M8 64 H114" stroke-width="2" opacity=".5"/></svg>';
  function montage(svgW, svgF, infoF) {
    return { key: "art", label: "Montageart", typ: "karten", spalten: 2, werte: [
      { wert: "wand", name: "Wandmontage", info: "An der Hauswand befestigt", svg: svgW },
      { wert: "frei", name: "Freistehend", info: infoF || "Mit zusätzlichen Pfosten", svg: svgF }] };
  }
  function farben(keys, hinweis) { return { key: "farbe", label: "Farbe", typ: "farben", klein: "Standardfarben ohne Aufpreis", hinweis: hinweis || "Wunschfarbe nach RAL? Gegen Aufpreis möglich – sprechen Sie uns an.", werte: keys.map(function (k) { return { wert: k }; }) }; }
  var EX = {
    statik: { key: "statik", typ: "check", label: "Statische Berechnung", info: "Typenstatik für Ihren Standort (Schnee- und Windlast)", netto: 132 },
    ledSpots: { key: "led", typ: "auswahl", label: "LED-Spots in den Sparren", werte: [
      { wert: "", name: "Ohne Beleuchtung", netto: 0 }, { wert: "8", name: "8er-Set, neutralweiß 4000 K", netto: 84 },
      { wert: "w6", name: "6er-Set mit WLAN-Steuerung", netto: 82 }, { wert: "d6", name: "6er-Set WLAN, Lichtfarbe 2700–6000 K", netto: 99 },
      { wert: "d8", name: "8er-Set WLAN, Lichtfarbe 2700–6000 K", netto: 105 }, { wert: "d12", name: "12er-Set WLAN, Lichtfarbe 2700–6000 K", netto: 118 }] },
    sound: { key: "sound", typ: "auswahl", label: "Bluetooth-Lautsprecher", werte: [
      { wert: "", name: "Ohne Lautsprecher", netto: 0 }, { wert: "2", name: "2er-Set", netto: 439 }, { wert: "4", name: "4er-Set", netto: 638 }, { wert: "6", name: "6er-Set", netto: 836 }, { wert: "8", name: "8er-Set", netto: 1034 }] }
  };
  var SOMFY = [
    { key: "wind", typ: "auswahl", label: "Windsensor (Funk, batteriebetrieben)", werte: [{ wert: "", name: "Ohne", netto: 0 }, { wert: "3d", name: "Eolis 3D WireFree io – am Ausfallprofil", netto: 420 }, { wert: "wf", name: "Eolis WireFree io – Windrad", netto: 504 }] },
    { key: "sonne", typ: "check", label: "Sonnensensor Sunis WireFree II io", info: "Fährt die Markise bei Sonne automatisch aus", netto: 356 },
    { key: "regen", typ: "check", label: "Regensensor Ondeis", info: "Fährt die Markise bei Regen automatisch ein", netto: 708 },
    { key: "wandsender", typ: "check", label: "Funk-Wandsender Smoove 1 io", netto: 208 },
    { key: "handsender2", typ: "check", label: "Zusätzlicher Funkhandsender Situo 1 io", netto: 180 },
    { key: "tahoma", typ: "check", label: "Smartphone-Steuerung TaHoma Switch", netto: 524 }
  ];
  function zaehle(z, keys) { return keys.filter(function (k) { return z[k]; }).length; }
  var NICHT_STANDARD = ["Beton für die Fundamente", "Montage", "Elektroanschluss durch eine Elektrofachkraft"];

  // ---------- Terrassendächer ----------
  var EIND_DACH = { key: "eind", label: "Eindeckung", typ: "karten", spalten: 3, werte: [
    { wert: "klar", name: "VSG-Glas 8 mm klar", info: "Maximales Licht", bild: "bilder/glas-vsg-klar.jpg" },
    { wert: "matt", name: "VSG-Glas 8 mm opal", info: "Blendfrei & sichtgeschützt", bild: "bilder/glas-vsg-opal.jpg" },
    { wert: "poly", name: "Polycarbonat 16 mm", info: "Leicht & preiswert", bild: "bilder/glas-poly-klar.jpg" }] };
  var POLYFARBE = { key: "polyfarbe", label: "Farbe der Polycarbonat-Platten", typ: "chips", wenn: function (z) { return z.eind === "poly"; }, werte: [{ wert: "klar", name: "Klar" }, { wert: "opal", name: "Opal" }, { wert: "graphit", name: "Graphit" }, { wert: "bronce", name: "Bronze" }] };
  function dach(key) {
    return function (z) {
      var b = z.b, t = z.t, g = LP[key][z.eind];
      if (b > 1400 || t > 405) return { fehler: "Ab " + (b > 1400 ? "14 m Breite" : "4,05 m Tiefe") + " ist eine statische Verstärkung nötig – wir kalkulieren Ihren Bausatz gern persönlich." };
      var bi = g.b.findIndex(function (x) { return x >= b * 10; }), ti = g.t.findIndex(function (x) { return x >= t * 10; });
      var sp = SP[key][z.eind === "poly" ? "poly" : "glas"][g.b[bi]] || [0, 0];
      var netto = g.p[ti][bi] * (z.art === "frei" ? C.freistehend : 1);
      var pf = z.art === "frei" ? sp[1] * 2 : sp[1];
      var name = (key === "tds" ? "Terrassendach TDS" : "Flachdach SkyView");
      return { posten: [{ name: name + " · " + b + " × " + t + " cm", netto: netto }], info: { sparren: sp[0], pfosten: pf },
        umfang: [z.art === "wand" ? "Wandanschlussprofil" : "Zweiter Träger für die Wandseite", key === "skyview" ? "Frontträger mit verdeckter Entwässerung" : "Rinnenträger mit integrierter Regenrinne",
          sp[0] + " Sparren inkl. Abdeckprofile", pf + " Pfosten (" + (key === "tds" ? "2,50" : "3,00") + " m, kürzbar)", (z.eind === "poly" ? "Polycarbonat 16 mm, " + ({ klar: "klar", opal: "opal", graphit: "graphit", bronce: "bronze" })[z.polyfarbe || "klar"] : (z.eind === "klar" ? "VSG-Glas 8 mm klar" : "VSG-Glas 8 mm opal")) + " – passend zugeschnitten",
          "Dichtungen, Abdeckkappen & Schraubenpaket", "Montageanleitung"],
        nicht: NICHT_STANDARD.slice(0, 2) };
    };
  }
  var DACH_MASSE = [{ key: "b", label: "Breite", hint: "entlang der Hauswand", min: 200, max: 1400, start: 500 }, { key: "t", label: "Tiefe", hint: "von der Wand nach vorne", min: 150, max: 405, start: 300 }];

  var P = {};
  P.tds = { kat: "terrasse", name: "Terrassendach TDS", kurz: "Der Klassiker mit Gefälle", badge: "Bestseller",
    text: "Unser meistgewähltes Terrassendach: schlanke Aluminium-Profile, integrierte Regenrinne und leichtes Gefälle – als Wandanbau oder freistehend.",
    bilder: ["bilder/td-1.jpg", "bilder/terrassenueberdachung-1.jpg", "bilder/td-2.jpg", "bilder/td-technik.jpg"], karte: "bilder/terrassenueberdachung-1-m.jpg",
    merkmale: ["Breite 2 – 14 m, Tiefe 1,5 – 4 m", "Glas oder Polycarbonat", "Inkl. Pfosten, Rinne & Fallrohr"],
    technik: [["Material", "Aluminium, pulverbeschichtet"], ["Dachform", "Pultdach mit Gefälle"], ["Rinne", "Integriert, Fallrohr im Pfosten"], ["Eindeckung", "VSG 8 mm oder Polycarbonat 16 mm"], ["Pfosten", "110 × 110 mm, 2,50 m (kürzbar)"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: DACH_MASSE, felder: [montage(svgWand, svgFrei), EIND_DACH, POLYFARBE, farben(["7016", "9006", "9007", "9010"])],
    extras: [EX.ledSpots, EX.sound, EX.statik], skizze: { typ: "drauf" }, rechne: dach("tds") };
  P.skyview = { kat: "terrasse", name: "Flachdach SkyView", kurz: "Moderne, gerade Linie", badge: "Modern",
    text: "Das moderne Flachdach für zeitgemäße Architektur: kubische Optik, verdeckte Entwässerung und eine durchgehend gerade Dachkante.",
    bilder: ["bilder/skyview-1-foto.jpg", "bilder/referenz-2.jpg", "bilder/skyview-technik.jpg", "bilder/skyview-3.jpg"], karte: "bilder/referenz-2-m.jpg",
    merkmale: ["Kubische Flachdach-Optik", "Verdeckte Entwässerung", "Inkl. Pfosten & Blenden"],
    technik: [["Material", "Aluminium, pulverbeschichtet"], ["Dachform", "Flachdach-Optik, innenliegendes Gefälle"], ["Entwässerung", "Verdeckt, über Pfosten"], ["Eindeckung", "VSG 8 mm oder Polycarbonat 16 mm"], ["Pfosten", "3,00 m (kürzbar)"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: DACH_MASSE, felder: [montage(svgFlachWand, svgFlachFrei), EIND_DACH, POLYFARBE, farben(["7016", "9006", "9007"])],
    extras: [EX.ledSpots, EX.sound, EX.statik], skizze: { typ: "drauf" }, rechne: dach("skyview") };

  // ---------- Lamellendächer ----------
  P.sunproone = { kat: "lamelle", name: "Lamellendach SunPro One", kurz: "Bioklimatisch – Einstieg", badge: "Elektrisch",
    text: "Lamellendach mit drehbaren Aluminium-Lamellen: per Fernbedienung von Sonne über Schatten bis zum geschlossenen, regendichten Dach. Optional mit integrierten ZIP-Senkrechtmarkisen.",
    bilder: ["bilder/pergola-3.jpg", "bilder/pergola-1.jpg", "bilder/pergola-technik.jpg"], karte: "bilder/pergola-3.jpg",
    merkmale: ["Breite 2 – 4 m, Tiefe 1 – 5,4 m", "Inkl. Motor, Steuerung & Fernbedienung", "Optional ZIP-Markisen & LED"],
    technik: [["Material", "Aluminium, pulverbeschichtet"], ["Lamellen", "Drehbar, motorisch"], ["Steuerung", "Teleco inkl. Mehrkanal-Fernbedienung"], ["Entwässerung", "Integriert, über die Pfosten"], ["Garantie", "10 J. Beschichtung · 5 J. Elektrobauteile"]],
    masse: [{ key: "b", label: "Breite", hint: "Lamellenlänge", min: 200, max: 400, start: 400 }, { key: "t", label: "Tiefe", hint: "", min: 100, max: 540, start: 300 }],
    felder: [montage(svgFlachWand, svgFlachFrei, "Mit 4 Pfosten"), farben(["7016s", "db703", "9007", "9016"])],
    extras: [
      { key: "zipVorne", typ: "check", label: "ZIP-Senkrechtmarkise vorne", info: "Integriert, Breite = Dachbreite", netto: function (z) { return zip(z, z.b); } },
      { key: "zipLinks", typ: "check", label: "ZIP-Senkrechtmarkise links", info: "Breite = Dachtiefe", netto: function (z) { return zip(z, z.t); } },
      { key: "zipRechts", typ: "check", label: "ZIP-Senkrechtmarkise rechts", info: "Breite = Dachtiefe", netto: function (z) { return zip(z, z.t); } },
      { key: "zipHinten", typ: "check", label: "ZIP-Senkrechtmarkise hinten", info: "Nur freistehend", wenn: function (z) { return z.art === "frei"; }, netto: function (z) { return zip(z, z.b); } },
      { key: "zipH", typ: "zahl", label: "Höhe der ZIP-Markisen", einheit: "cm", min: 100, max: 270, start: 240, wenn: function (z) { return zaehle(z, ["zipVorne", "zipLinks", "zipRechts", "zipHinten"]) > 0; } },
      { key: "zipVormontage", typ: "check", label: "Vormontage der ZIP-Markisen ab Werk", info: "76 € netto je Markise", wenn: function (z) { return zaehle(z, ["zipVorne", "zipLinks", "zipRechts", "zipHinten"]) > 0; }, netto: function (z) { return 76 * zaehle(z, ["zipVorne", "zipLinks", "zipRechts", "zipHinten"]); } },
      { key: "ledUm", typ: "check", label: "Umlaufende LED-Beleuchtung", info: "LED-Line weiß, passend zum Umfang", netto: function (z) { var u = 2 * (z.b + z.t) / 100; return u <= 5 ? 900 : u <= 10 ? 1348 : u <= 15 ? 1799 : u <= 22 ? 2246 : u <= 25 ? 2698 : null; } },
      { key: "sensor", typ: "auswahl", label: "Wetter-Sensoren", werte: [{ wert: "", name: "Ohne", netto: 0 }, { wert: "wind", name: "Windsensor", netto: 86 }, { wert: "regen", name: "Regensensor", netto: 185 }, { wert: "regentemp", name: "Regen- und Temperatursensor", netto: 228 }] },
      { key: "fb", typ: "check", label: "Zusätzliche Fernbedienung (9 Kanäle)", netto: 156 }, EX.statik],
    skizze: { typ: "drauf", lamellen: true },
    rechne: function (z) {
      var v = rast(R.sunproOne[z.art], z.b * 10, z.t * 10);
      if (v == null) return { fehler: "Diese Größe ist nicht im Standardprogramm – wir kalkulieren sie gern persönlich." };
      var nz = zaehle(z, ["zipVorne", "zipLinks", "zipRechts", "zipHinten"]), posten = [{ name: "Lamellendach SunPro One · " + z.b + " × " + z.t + " cm", netto: v }];
      if (nz) posten.push({ name: "Stromversorgungs-Set für " + nz + " ZIP-Markise" + (nz > 1 ? "n" : ""), netto: nz === 1 ? 203 : nz === 2 ? 315 : 368 });
      var pf = R.sunproOne.stuetzen[z.art];
      return { posten: posten, info: { pfosten: pf },
        umfang: ["Rahmen aus Aluminium-Trägern", "Drehbare Aluminium-Lamellen", pf + " Pfosten mit Entwässerung", "Motor, Teleco-Steuerung & Mehrkanal-Fernbedienung", "Schraubenpaket", "Montageanleitung"],
        nicht: NICHT_STANDARD };
    } };
  function zip(z, laengeCm) { var v = rast(R.sunproOne.shadeZip, (z.zipH || 240) * 10, laengeCm * 10); return v == null ? null : v; }

  var PLUS_LED = { 1: 763, 2: 834, 3: 905, 4: 976, 5: 1047 };
  P.sunproplus = { kat: "lamelle", name: "Lamellendach SunPro Plus", kurz: "Premium mit Somfy-Technik", badge: "Premium",
    text: "Das Premium-Lamellendach: geschlossen dicht wie ein festes Dach, geöffnet luftig wie eine Pergola. Mit Somfy-Funksteuerung und optionalen LED-Bändern in den Lamellen.",
    bilder: ["bilder/pergola-1.jpg", "bilder/pergola-4.jpg", "bilder/pergola-3.jpg", "bilder/pergola-technik.jpg"], karte: "bilder/pergola-1.jpg",
    merkmale: ["Breite 2 – 4 m, Tiefe 1,4 – 7 m", "Somfy-Steuerung & 5-Kanal-Funksender", "LED-Bänder in den Lamellen"],
    technik: [["Material", "Aluminium, pulverbeschichtet"], ["Lamellen", "Kammerlamellen, drehbar"], ["Steuerung", "Somfy io inkl. 5-Kanal-Fernbedienung"], ["Pfosten", "Standardhöhe 2,50 m"], ["Garantie", "10 J. Beschichtung · 5 J. Elektrobauteile"]],
    masse: [{ key: "b", label: "Breite", hint: "Lamellenlänge", min: 200, max: 400, start: 400 }, { key: "t", label: "Tiefe", hint: "", min: 143, max: 701, start: 400 }],
    felder: [montage(svgFlachWand, svgFlachFrei, "Mit 4–6 Pfosten"), farben(["7016", "9006", "9007", "9010"])],
    extras: [
      { key: "led", typ: "check", label: "LED-Bänder in den Lamellen", info: "Anzahl passend zur Dachtiefe", netto: function (z) { var g = R.sunproPlus[z.art], i = S.rasterIndex(g, z.t * 10); return i < 0 ? null : PLUS_LED[g.led[i]] || null; } },
      { key: "ledSeite", typ: "check", label: "Seitliche Beleuchtung", netto: 1262 },
      { key: "regen", typ: "check", label: "Regensensor", info: "Schließt die Lamellen bei Regen automatisch", netto: 652 },
      { key: "tahoma", typ: "check", label: "Smartphone-Steuerung TaHoma Switch Pro", netto: 435 },
      { key: "fb", typ: "check", label: "Zusätzliche Fernbedienung Situo 5 Variation io", netto: 198 }, EX.statik],
    skizze: { typ: "drauf", lamellen: true },
    rechne: function (z) {
      var g = R.sunproPlus[z.art], v = rast(g, z.b * 10, z.t * 10);
      if (v == null) return { fehler: "Diese Größe ist nicht im Standardprogramm – wir kalkulieren sie gern persönlich." };
      var i = S.rasterIndex(g, z.t * 10), pf = g.stuetzen[i] || (z.art === "frei" ? 4 : 2);
      return { posten: [{ name: "Lamellendach SunPro Plus · " + z.b + " × " + z.t + " cm", netto: v }], info: { pfosten: pf, led: g.led[i] },
        umfang: ["Rahmen aus Aluminium-Trägern", "Drehbare Kammerlamellen", pf + " Pfosten mit Entwässerung", "Motor, Somfy-Steuerung & 5-Kanal-Funkhandsender", "Schraubenpaket", "Montageanleitung"], nicht: NICHT_STANDARD };
    } };

  // ---------- Carport ----------
  P.carport = { kat: "carport", name: "Carport Flat Line", kurz: "Freistehend mit Trapezblech", badge: "Neu",
    text: "Der moderne Alu-Carport mit flacher Linie: freistehend, wartungsarm und mit robustem Trapezblech – auf Wunsch mit Antikondensvlies.",
    bilder: ["bilder/flatline-1.jpg", "bilder/referenz-3-m.jpg", "bilder/flatline-6-m.jpg", "bilder/flatline-5-m.jpg"], karte: "bilder/flatline-1-m.jpg",
    merkmale: ["Freistehend, 1 bis 4 Stellplätze", "Trapezblech, optional mit Vlies", "Inkl. Pfosten & Entwässerung"],
    technik: [["Material", "Aluminium, pulverbeschichtet"], ["Bauart", "Freistehend"], ["Eindeckung", "Trapezblech, optional mit Antikondensvlies"], ["Pfosten", "3,00 m (kürzbar)"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "Einfahrtsseite", min: 300, max: 1400, start: 300 }, { key: "t", label: "Länge", hint: "Länge des Stellplatzes", min: 200, max: 600, start: 500 }],
    felder: [{ key: "eind", label: "Eindeckung", typ: "karten", spalten: 2, werte: [
      { wert: "standard", name: "Trapezblech", info: "Robust & blickdicht", bild: "bilder/blech-trapez.jpg" },
      { wert: "vlies", name: "Trapezblech mit Antikondensvlies", info: "Kein Tropfwasser", bild: "bilder/blech-trapez-vlies.jpg" }] }, farben(["7016", "9006", "9007"])],
    extras: [EX.statik], skizze: { typ: "drauf", frei: true },
    rechne: function (z) {
      var g = LP.carport[z.eind], bi = g.b.findIndex(function (x) { return x >= z.b * 10; }), ti = g.t.findIndex(function (x) { return x >= z.t * 10; });
      if (bi < 0 || ti < 0) return { fehler: "Diese Größe kalkulieren wir gern persönlich." };
      var pf = Math.max(4, 2 * (Math.ceil(z.b / 450) + 1));
      return { posten: [{ name: "Carport Flat Line · " + z.b + " × " + z.t + " cm", netto: g.p[ti][bi] }], info: { pfosten: pf },
        umfang: ["Träger, Sparren & Blenden aus Aluminium", "Pfosten 3,00 m inkl. Fußplatten", z.eind === "vlies" ? "Trapezblech mit Antikondensvlies" : "Trapezblech", "Integrierte Entwässerung", "Schraubenpaket", "Montageanleitung"], nicht: NICHT_STANDARD.slice(0, 2) };
    } };

  // ---------- Vordach ----------
  P.fly = { kat: "vordach", name: "Glas-Vordach Fly", kurz: "Schwebende Glasoptik", badge: "",
    text: "Elegantes Vordach aus 17 mm Verbundsicherheitsglas mit schlankem Wandprofil – schützt Ihren Eingang, ohne ihn zu verdecken.",
    bilder: ["bilder/vordach-fly-2.jpg", "bilder/vordach-fly-1.jpg", "bilder/vordach-fly-technik.jpg"], karte: "bilder/vordach-fly-2.jpg",
    merkmale: ["Breite 1 – 3 m, Tiefe bis 1 m", "17 mm VSG aus TVG, klar oder matt", "Wandprofil in Anthrazit"],
    technik: [["Glas", "VSG aus TVG 17 mm, klar oder matt"], ["Wandprofil", "Aluminium, RAL 7016"], ["Montage", "Wandmontage"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 100, max: 300, start: 150 }, { key: "t", label: "Tiefe", hint: "Auskragung", min: 50, max: 100, start: 90 }],
    felder: [{ key: "glas", label: "Glas", typ: "karten", spalten: 2, werte: [{ wert: "klar", name: "VSG 17 mm klar", info: "Maximale Transparenz", bild: "bilder/glas-vsg-klar.jpg" }, { wert: "matt", name: "VSG 17 mm matt", info: "Satiniert, blickdicht", bild: "bilder/glas-vsg-opal.jpg" }] }, farben(["7016"], "Das Wandprofil ist serienmäßig in Anthrazit RAL 7016.")],
    extras: [], skizze: { typ: "ansicht", teile: function () { return 1; }, muster: "glas", hoeheKey: "t", hoeheLabel: "Tiefe" },
    rechne: function (z) {
      var v = rast(R.fly, z.b * 10, z.t * 10);
      if (v == null) return { fehler: "Diese Größe kalkulieren wir gern persönlich." };
      return { posten: [{ name: "Glas-Vordach Fly · " + z.b + " × " + z.t + " cm", netto: v }], umfang: ["Wandprofil & Klemmprofil", "Blenden oben und unten", "VSG-Glas 17 mm " + (z.glas === "matt" ? "matt" : "klar"), "Seitendeckel & Schraubenpaket", "Montageanleitung"], nicht: ["Montage", "Befestigungsmittel für besondere Wandaufbauten (z. B. WDVS)"] };
    } };

  // ---------- Markisen ----------
  var STOFF_HINWEIS = "Markisenstoff nach Wahl aus unserer Kollektion (Bemusterung nach Bestellung)";
  function markise(def) {
    return Object.assign({ kat: "markise", extras: SOMFY,
      rechne: function (z) {
        var g = typeof def.raster === "function" ? def.raster(z) : def.raster;
        var v = rast(g, z[def.xKey] * 10, z[def.yKey] * 10);
        if (v === undefined) return { fehler: "Diese Größe liegt außerhalb des Standardprogramms – wir kalkulieren sie gern persönlich." };
        if (v === null) return { fehler: "Diese Kombination aus Breite und " + def.xLabel + " ist technisch nicht möglich. Bitte Maße anpassen." };
        var name = typeof def.modell === "function" ? def.modell(z) : def.name;
        var posten = [{ name: name + " · " + z.b + " × " + z[def.xKey] + " cm", netto: v },
          { name: "Somfy-Funkmotor io inkl. 3 m Kabel", netto: 304 }, { name: "Funkhandsender Situo 5 io Pure", netto: 114 }];
        if (def.winkel) posten.push({ name: "Befestigungswinkel", netto: 180 });
        if (def.led && z.ledStreifen) { var i = S.rasterIndex(g, z.b * 10); posten.push({ name: "LED-Streifen im Ausfallprofil", netto: g.led[i] }); }
        return { posten: posten, umfang: def.umfang.concat([STOFF_HINWEIS, "Somfy-Funkmotor & 5-Kanal-Handsender", "Montageanleitung"]), nicht: ["Montage", "Elektroanschluss durch eine Elektrofachkraft"] };
      } }, def);
  }
  var MARK_FARBEN = farben(["db703", "7016", "9006", "9007", "9010", "9016"]);
  var MARK_FARBEN_K = farben(["7016s", "db703", "9007", "9016"]);
  P.unterdach = markise({ name: "Unterdach-Markise mit ZIP", kurz: "Schatten unter dem Glasdach", badge: "",
    text: "Die Markise wird unter Ihrem Terrassendach montiert und hält die Hitze ab. Die ZIP-Führung spannt den Stoff faltenfrei und sturmsicher.",
    bilder: ["bilder/markise-unterdach-1.jpg", "bilder/markise-unterdach-technik.jpg"], karte: "bilder/markise-unterdach-1.jpg",
    merkmale: ["Breite 2 – 6,5 m, Ausfall 1,5 – 6 m", "ZIP-Führung, faltenfreier Stoff", "Inkl. Somfy-Funkmotor"],
    technik: [["Modell", "Linea UZ (Ausfall bis 4,5 m) / Solara UZ"], ["Führung", "ZIP-System"], ["Antrieb", "Somfy io Funkmotor"], ["Garantie", "2 J. Markise · 5 J. Elektrobauteile · 10 J. Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 200, max: 650, start: 400 }, { key: "a", label: "Ausfall", hint: "Länge des Stoffs", min: 150, max: 600, start: 300 }],
    felder: [MARK_FARBEN], raster: R.markise.unterdachZip, xKey: "a", yKey: "b", xLabel: "Ausfall", winkel: true,
    modell: function (z) { return z.a <= 450 ? "Unterdach-Markise Linea UZ" : "Unterdach-Markise Solara UZ"; },
    umfang: ["Markise mit ZIP-Führungsschienen"], skizze: { typ: "ansicht", muster: "stoff", hoeheKey: "a", hoeheLabel: "Ausfall" } });
  P.aufdach = markise({ name: "Aufdach-Markise mit ZIP", kurz: "Hitzeschutz auf dem Glasdach", badge: "",
    text: "Auf dem Glasdach montiert, stoppt die Aufdach-Markise die Sonne, bevor sie das Glas erwärmt – die wirksamste Lösung gegen Hitze unter dem Dach.",
    bilder: ["bilder/markise-aufdach-1.jpg", "bilder/markise-aufdach-2.jpg", "bilder/markise-aufdach-technik.jpg"], karte: "bilder/markise-aufdach-1.jpg",
    merkmale: ["Breite 2 – 6,5 m, Ausfall 1,5 – 6 m", "ZIP-Führung, sturmsicher", "Inkl. Somfy-Funkmotor"],
    technik: [["Modell", "Linea AZ (Ausfall bis 4,5 m) / Solara AZ"], ["Führung", "ZIP-System"], ["Antrieb", "Somfy io Funkmotor"], ["Garantie", "2 J. Markise · 5 J. Elektrobauteile · 10 J. Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 200, max: 650, start: 400 }, { key: "a", label: "Ausfall", hint: "Länge des Stoffs", min: 150, max: 600, start: 300 }],
    felder: [MARK_FARBEN], raster: R.markise.aufdachZip, xKey: "a", yKey: "b", xLabel: "Ausfall", winkel: true,
    modell: function (z) { return z.a <= 450 ? "Aufdach-Markise Linea AZ" : "Aufdach-Markise Solara AZ"; },
    umfang: ["Markise mit ZIP-Führungsschienen"], skizze: { typ: "ansicht", muster: "stoff", hoeheKey: "a", hoeheLabel: "Ausfall" } });
  P.senkrecht = markise({ name: "Senkrechtmarkise eZip", kurz: "Sicht- & Windschutz von der Seite", badge: "",
    text: "Die Senkrechtmarkise mit ZIP-Führung schließt die Seiten Ihrer Überdachung: Sonnen-, Sicht- und Insektenschutz auf Knopfdruck.",
    bilder: ["bilder/markise-senkrecht-1.jpg", "bilder/markise-senkrecht-2.jpg", "bilder/markise-senkrecht-technik.jpg"], karte: "bilder/markise-senkrecht-1.jpg",
    merkmale: ["Breite 0,65 – 6 m, Höhe bis 3 m", "Kasten 105 oder 125 mm", "Inkl. Somfy-Funkmotor"],
    technik: [["Kasten", "eckig, 105 oder 125 mm"], ["Führung", "ZIP-Führungsschienen"], ["Antrieb", "Somfy io Funkmotor"], ["Garantie", "2 J. Markise · 5 J. Elektrobauteile · 10 J. Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 65, max: 600, start: 300 }, { key: "h", label: "Höhe", hint: "", min: 100, max: 300, start: 240 }],
    felder: [{ key: "kasten", label: "Kastengröße", typ: "chips", werte: [{ wert: "105", name: "Kasten 105 mm", info: "bis 6 m Breite" }, { wert: "125", name: "Kasten 125 mm", info: "für große Höhen" }] }, MARK_FARBEN],
    raster: function (z) { return z.kasten === "125" ? R.markise.ezip125 : R.markise.ezip105; }, xKey: "h", yKey: "b", xLabel: "Höhe",
    modell: function (z) { return "Senkrechtmarkise eZip " + (z.kasten || "105"); },
    umfang: ["Kasten mit ZIP-Führungsschienen & Fallstab"], skizze: { typ: "ansicht", muster: "stoff", hoeheKey: "h", hoeheLabel: "Höhe" } });
  P.luna = markise({ name: "Kassettenmarkise Luna", kurz: "Kompakt, geschlossene Kassette", badge: "",
    text: "Die klassische Gelenkarm-Markise in einer geschlossenen Kassette: Stoff und Mechanik sind eingefahren perfekt geschützt.",
    bilder: ["bilder/markise-kassette-1.jpg", "bilder/markise-kassette-luna-technik.jpg"], karte: "bilder/markise-kassette-1.jpg",
    merkmale: ["Breite 2 – 5,5 m, Ausfall bis 3 m", "Vollkassette", "Optional LED im Ausfallprofil"],
    technik: [["Bauart", "Vollkassette mit Gelenkarmen"], ["Antrieb", "Somfy io Funkmotor"], ["Garantie", "2 J. Markise · 5 J. Elektrobauteile · 10 J. Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 200, max: 550, start: 400 }, { key: "a", label: "Ausfall", hint: "", min: 150, max: 300, start: 250 }],
    felder: [MARK_FARBEN_K], raster: R.markise.luna, xKey: "a", yKey: "b", xLabel: "Ausfall", winkel: true, led: true,
    extras: [{ key: "ledStreifen", typ: "check", label: "LED-Streifen im Ausfallprofil", info: "Preis abhängig von der Breite", netto: 0 }].concat(SOMFY),
    umfang: ["Kassette mit Gelenkarmen"], skizze: { typ: "ansicht", muster: "stoff", hoeheKey: "a", hoeheLabel: "Ausfall" } });
  P.luxora = markise({ name: "Kassettenmarkise Luxora", kurz: "Premium-Kassette bis 3,25 m Ausfall", badge: "",
    text: "Die Premium-Kassettenmarkise mit großem Ausfall und eleganter Linie – inklusive Befestigungswinkel.",
    bilder: ["bilder/markise-kassette-2.jpg", "bilder/markise-kassette-luxora-technik.jpg"], karte: "bilder/markise-kassette-2.jpg",
    merkmale: ["Breite 2 – 5,5 m, Ausfall bis 3,25 m", "Befestigungswinkel inklusive", "Optional LED im Ausfallprofil"],
    technik: [["Bauart", "Vollkassette mit Gelenkarmen"], ["Antrieb", "Somfy io Funkmotor"], ["Garantie", "2 J. Markise · 5 J. Elektrobauteile · 10 J. Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 200, max: 550, start: 400 }, { key: "a", label: "Ausfall", hint: "", min: 150, max: 325, start: 300 }],
    felder: [MARK_FARBEN_K], raster: R.markise.luxora, xKey: "a", yKey: "b", xLabel: "Ausfall", winkel: false, led: true,
    extras: [{ key: "ledStreifen", typ: "check", label: "LED-Streifen im Ausfallprofil", info: "Preis abhängig von der Breite", netto: 0 }].concat(SOMFY),
    umfang: ["Kassette mit Gelenkarmen", "Befestigungswinkel"], skizze: { typ: "ansicht", muster: "stoff", hoeheKey: "a", hoeheLabel: "Ausfall" } });
  P.pergolamarkise = markise({ name: "Pergola-Markise", kurz: "Freistehender Schatten mit Pfosten", badge: "",
    text: "Die Pergola-Markise steht auf eigenen Pfosten und spendet großflächig Schatten – ideal für große Terrassen ohne festes Dach.",
    bilder: ["bilder/markise-pergola-1.jpg", "bilder/markise-pergola-technik.jpg"], karte: "bilder/markise-pergola-1.jpg",
    merkmale: ["Breite 2 – 6,5 m, Tiefe 2 – 5 m", "Mit oder ohne Volant", "Pfosten 3,00 m"],
    technik: [["Bauart", "Pergola-Markise mit Pfosten"], ["Antrieb", "Somfy io Funkmotor"], ["Garantie", "2 J. Markise · 5 J. Elektrobauteile · 10 J. Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 200, max: 650, start: 400 }, { key: "a", label: "Tiefe", hint: "", min: 200, max: 500, start: 350 }],
    felder: [{ key: "volant", label: "Ausführung", typ: "chips", werte: [{ wert: "ohne", name: "Ohne Volant" }, { wert: "mit", name: "Mit Volant", info: "Senkrechter Stoff vorne" }] }, MARK_FARBEN_K],
    raster: function (z) { return z.volant === "mit" ? R.markise.pergolaMit : R.markise.pergolaOhne; }, xKey: "a", yKey: "b", xLabel: "Tiefe",
    modell: function (z) { return "Pergola-Markise " + (z.volant === "mit" ? "mit" : "ohne") + " Volant"; },
    umfang: ["Markise mit Pfosten & Führungsprofilen"], skizze: { typ: "ansicht", muster: "stoff", hoeheKey: "a", hoeheLabel: "Tiefe" } });

  // ---------- Glaswände ----------
  var GLASFARBEN = farben(["7016", "9006", "9007", "9010"]);
  var SG = { "3-2": { name: "2 Flügel", b: [100, 3000] }, "3-3": { name: "3 Flügel", b: [200, 4000] }, "3-4": { name: "4 Flügel (3 Schienen)", b: [250, 5000] }, "4-4": { name: "4 Flügel (4 Schienen)", b: [250, 5000] }, "5-5": { name: "5 Flügel", b: [350, 6000] }, "3-6": { name: "6 Flügel", b: [350, 6500] } };
  var SC = { "2-2": { name: "2 Flügel", b: [100, 3000] }, "3-3": { name: "3 Flügel", b: [200, 4000] }, "2-4": { name: "4 Flügel", b: [250, 5000] }, "3-6": { name: "6 Flügel", b: [350, 6500] } };
  function fluegelFeld(map) { return { key: "var", label: "Anzahl Flügel", typ: "chips", werte: Object.keys(map).map(function (k) { var v = map[k]; return { wert: k, name: v.name, info: "bis " + S.cm(v.b[1] / 10), aktiv: function (z) { return z.b * 10 <= v.b[1] && z.b * 10 > v.b[0] * 10; } }; }) }; }
  function schiebe(raster, map, titel, glasAufpreis) {
    return function (z) {
      var g = raster[z.var], v = g ? rast(g, z.b * 10, z.h * 10) : undefined;
      if (v == null) return { fehler: "Für diese Breite bitte eine andere Flügelanzahl wählen." };
      var qm = z.b * z.h / 10000, posten = [{ name: titel + ", " + map[z.var].name + " · " + z.b + " × " + z.h + " cm", netto: v }];
      var a = glasAufpreis[z.glas]; if (a) posten.push({ name: a.name + " (" + qm.toLocaleString("de-DE", { maximumFractionDigits: 2 }) + " m²)", netto: a.qm * qm });
      return { posten: posten, info: { teile: parseInt(z.var.split("-")[1], 10) } };
    };
  }
  P.sg23 = { kat: "glas", name: "Glas-Schiebewand SG23", kurz: "Rahmenlose Glas-Schiebeelemente", badge: "Beliebt",
    text: "Rahmenlose Schiebeelemente aus 10 mm Einscheiben-Sicherheitsglas: maximale Aussicht, leichtgängig zur Seite geschoben. Ideal, um Ihre Terrassenüberdachung zum Kaltwintergarten zu machen.",
    bilder: ["bilder/kaltwintergarten-1.jpg", "bilder/kaltwintergarten-4.jpg", "bilder/kaltwintergarten-2.jpg", "bilder/kwg-schiebeprofile.jpg"], karte: "bilder/kaltwintergarten-1.jpg",
    merkmale: ["Breite bis 6,5 m, Höhe bis 2,45 m", "10 mm ESG, rahmenlos", "2 bis 6 Flügel"],
    technik: [["Glas", "10 mm ESG klar (Aufpreis: satiniert, grau)"], ["Laufschienen", "3-, 4- oder 5-gleisig"], ["Max. Höhe außen", "2,45 m (Windlast)"], ["Inklusive", "2 Griffe"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "Gesamtbreite der Öffnung", min: 100, max: 650, start: 400 }, { key: "h", label: "Höhe", hint: "max. 245 cm im Außenbereich", min: 100, max: 245, start: 220 }],
    felder: [fluegelFeld(SG), { key: "glas", label: "Glas", typ: "karten", spalten: 3, werte: [{ wert: "klar", name: "ESG 10 mm klar", info: "Inklusive", bild: "bilder/glas-vsg-klar.jpg" }, { wert: "satiniert", name: "ESG 10 mm satiniert", info: "+ 28 € netto/m²", bild: "bilder/glas-vsg-opal.jpg" }, { wert: "grau", name: "ESG 10 mm grau", info: "+ 33 € netto/m²", bild: "bilder/glas-poly-klar.jpg" }] }, GLASFARBEN],
    extras: [], skizze: { typ: "ansicht", muster: "glas", hoeheKey: "h", hoeheLabel: "Höhe" },
    rechne: function (z) { var r = schiebe(R.sg23, SG, "Glas-Schiebewand SG23", { satiniert: { name: "Aufpreis ESG satiniert", qm: 28 }, grau: { name: "Aufpreis ESG grau", qm: 33 } })(z); if (!r.fehler) { r.umfang = ["Obere und untere Laufschiene", r.info.teile + " Glasflügel ESG 10 mm", "2 Griffe, Dichtungen & Bürsten", "Schraubenpaket", "Montageanleitung"]; r.nicht = ["Montage"]; } return r; } };
  P.sc23 = { kat: "glas", name: "Rahmen-Schiebeanlage SC23", kurz: "Schiebeelemente mit Alu-Rahmen", badge: "",
    text: "Schiebeanlage mit schlanken Aluminium-Rahmen und 6 mm VSG – auf Wunsch mit Isolierglas, abschließbar. Der robuste Weg zum Kaltwintergarten.",
    bilder: ["bilder/kaltwintergarten-3.jpg", "bilder/kaltwintergarten-1.jpg", "bilder/kwg-schiebeprofile.jpg"], karte: "bilder/kaltwintergarten-3.jpg",
    merkmale: ["Breite bis 6,5 m, Höhe bis 2,45 m", "Alu-Rahmen, VSG 6 mm", "Optional Isolierglas 21 mm"],
    technik: [["Glas", "VSG 6 mm klar (Aufpreis: matt, Isolierglas)"], ["Laufschienen", "2- oder 3-gleisig"], ["Ab 4 Flügeln", "Griff mit Schloss"], ["Max. Höhe außen", "2,45 m (Windlast)"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "Gesamtbreite der Öffnung", min: 100, max: 650, start: 400 }, { key: "h", label: "Höhe", hint: "max. 245 cm im Außenbereich", min: 100, max: 245, start: 220 }],
    felder: [fluegelFeld(SC), { key: "glas", label: "Glas", typ: "karten", spalten: 2, werte: [{ wert: "klar", name: "VSG 6 mm klar", info: "Inklusive", bild: "bilder/glas-vsg-klar.jpg" }, { wert: "matt", name: "VSG 6 mm matt", info: "+ 12 € netto/m²", bild: "bilder/glas-vsg-opal.jpg" }, { wert: "iso", name: "Isolierglas 21 mm klar", info: "+ 52,50 € netto/m²", bild: "bilder/glas-vsg-klar.jpg" }, { wert: "isomatt", name: "Isolierglas 21 mm matt", info: "+ 62,50 € netto/m²", bild: "bilder/glas-vsg-opal.jpg" }] }, GLASFARBEN],
    extras: [], skizze: { typ: "ansicht", muster: "rahmen", hoeheKey: "h", hoeheLabel: "Höhe" },
    rechne: function (z) { var r = schiebe(R.sc23, SC, "Rahmen-Schiebeanlage SC23", { matt: { name: "Aufpreis VSG matt", qm: 12 }, iso: { name: "Aufpreis Isolierglas 21 mm klar", qm: 52.5 }, isomatt: { name: "Aufpreis Isolierglas 21 mm matt", qm: 62.5 } })(z); if (!r.fehler) { r.umfang = ["Rahmen-Schiebeflügel mit Verglasung", "Laufschienen oben & unten", "Griffe" + (r.info.teile >= 4 ? " (inkl. Schloss)" : "") + " & Verriegelungen", "Schraubenpaket", "Montageanleitung"]; r.nicht = ["Montage"]; } return r; } };

  var FR_GLAS = { key: "glas", label: "Verglasung", typ: "karten", spalten: 3, werte: [{ wert: "klar", name: "VSG 8 mm klar", info: "73 € netto/m²", bild: "bilder/glas-vsg-klar.jpg" }, { wert: "matt", name: "VSG 8 mm matt", info: "82 € netto/m²", bild: "bilder/glas-vsg-opal.jpg" }, { wert: "ohne", name: "Ohne Glas", info: "Eigene Verglasung", svg: '<svg viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="3"><rect x="20" y="8" width="80" height="54"/><path d="M20 8 L100 62" opacity=".35"/></svg>' }] };
  var GLAS_QM = { klar: 73, matt: 82 };
  function festelement(schraeg) {
    // [Raster, Anzahl senkrechter Sprossen] – es wird das erste Raster genommen, in dem das Maß lieferbar ist
    var normal = schraeg ? [["s-os", 0], ["s-1vs", 1], ["s-2vs", 2], ["s-3vs", 3]] : [["os", 0], ["1vs", 1], ["2vs", 2], ["3vs", 3]];
    var quer = schraeg ? [["s-1hs", 0], ["s-1vs1hs", 1], ["s-2vs1hs", 2], ["s-3vs1hs", 3]] : [["1vs1hs", 1], ["2vs1hs", 2], ["3vs1hs", 3]];
    return function (z) {
      var liste = z.quer ? quer : normal, wahl = null;
      for (var i = 0; i < liste.length; i++) { var v = rast(R.fr23[liste[i][0]], z.b * 10, z.h * 10); if (v != null) { wahl = { key: liste[i][0], netto: v, vs: liste[i][1] }; break; } }
      if (!wahl) return { fehler: "Diese Größe ist nicht im Standardprogramm – wir kalkulieren sie gern persönlich." };
      var name = (schraeg ? "Keilelement FR23" : "Festelement FR23") + " · " + z.b + " × " + z.h + " cm";
      var posten = [{ name: name, netto: wahl.netto }];
      var qm = (schraeg ? z.b * (z.h + (z.h2 || 15)) / 2 : z.b * z.h) / 10000;
      if (GLAS_QM[z.glas]) posten.push({ name: "VSG-Glas 8 mm " + z.glas + " (" + qm.toLocaleString("de-DE", { maximumFractionDigits: 2 }) + " m²)", netto: GLAS_QM[z.glas] * qm });
      if (!schraeg && z.fenster) { var f = rast(R.fr23.frfDrehkipp, (z.fB || 80) * 10, (z.fH || 100) * 10); if (f == null) return { fehler: "Das Fenster ist zu groß (max. 120 × 140 cm)." }; posten.push({ name: "Drehkipp-Fenster integriert · " + z.fB + " × " + z.fH + " cm", netto: f }); }
      if (!schraeg && z.tuer) { if (z.h < (z.tH || 200)) return { fehler: "Für eine Tür muss das Element mindestens so hoch sein wie die Tür." }; var t = rast(R.fr23.frtTuerIntegriert, (z.tB || 90) * 10, (z.tH || 200) * 10); if (t == null) return { fehler: "Die Tür ist zu groß (max. 120 × 250 cm)." }; posten.push({ name: "Drehtür integriert · " + z.tB + " × " + z.tH + " cm", netto: t }); }
      return { posten: posten, info: { teile: wahl.vs + 1, quer: !!z.quer, schraeg: schraeg },
        umfang: ["Aluminium-Rahmen" + (wahl.vs ? " mit " + wahl.vs + " senkrechten Sprosse" + (wahl.vs > 1 ? "n" : "") : "") + (z.quer ? " und Quersprosse" : ""), z.glas === "ohne" ? "Vorgerichtet für 8 mm Verglasung (Glas nicht enthalten)" : "VSG-Glas 8 mm " + z.glas + ", passend zugeschnitten", "Dichtungen & Glasleisten", "Schraubenpaket", "Montageanleitung"], nicht: ["Montage"].concat(z.glas === "ohne" ? ["Verglasung"] : []) };
    };
  }
  P.fr23 = { kat: "glas", name: "Festelement FR23", kurz: "Feste Glaswand mit Alu-Rahmen", badge: "",
    text: "Feststehende Glaswand mit Aluminium-Rahmen – für Seiten, die geschlossen bleiben. Die Sprossen werden je nach Breite automatisch gewählt; auf Wunsch mit integriertem Drehkipp-Fenster oder Drehtür.",
    bilder: ["bilder/kaltwintergarten-2.jpg", "bilder/kaltwintergarten-3.jpg", "bilder/kaltwintergarten-1.jpg"], karte: "bilder/kaltwintergarten-2.jpg",
    merkmale: ["Breite bis 6,25 m, Höhe bis 2,5 m", "Für VSG 8 mm", "Optional Fenster oder Tür"],
    technik: [["Rahmen", "Aluminium, Kaltelement"], ["Glas", "VSG 8 mm (klar/matt) oder eigene Verglasung"], ["Sprossen", "Automatisch nach Breite"], ["Raster", "Berechnung in 25-cm-Schritten"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "", min: 50, max: 625, start: 300 }, { key: "h", label: "Höhe", hint: "", min: 50, max: 250, start: 220 }],
    felder: [FR_GLAS, GLASFARBEN],
    extras: [{ key: "quer", typ: "check", label: "Mit Quersprosse (horizontal)", info: "Teilt die Glasfelder waagerecht", netto: 0, ab: 125 },
      { key: "fenster", typ: "check", label: "Drehkipp-Fenster integrieren", netto: 0 },
      { key: "fB", typ: "zahl", label: "Fensterbreite", einheit: "cm", min: 60, max: 120, start: 80, wenn: function (z) { return z.fenster; } },
      { key: "fH", typ: "zahl", label: "Fensterhöhe", einheit: "cm", min: 60, max: 140, start: 100, wenn: function (z) { return z.fenster; } },
      { key: "tuer", typ: "check", label: "Drehtür integrieren", netto: 0 },
      { key: "tB", typ: "zahl", label: "Türbreite", einheit: "cm", min: 75, max: 120, start: 90, wenn: function (z) { return z.tuer; } },
      { key: "tH", typ: "zahl", label: "Türhöhe", einheit: "cm", min: 180, max: 250, start: 200, wenn: function (z) { return z.tuer; } }],
    skizze: { typ: "ansicht", muster: "sprossen", hoeheKey: "h", hoeheLabel: "Höhe" }, rechne: festelement(false) };
  P.keil = { kat: "glas", name: "Keilelement FR23 (schräg)", kurz: "Dreiecks-/Keilfenster unter dem Dach", badge: "",
    text: "Das schräge Festelement schließt die keilförmige Seite unter Ihrem Terrassendach – passend zur Dachneigung, mit Alu-Rahmen und Sprossen.",
    bilder: ["bilder/kaltwintergarten-4.jpg", "bilder/kaltwintergarten-2.jpg"], karte: "bilder/kaltwintergarten-4.jpg",
    merkmale: ["Breite bis 5,75 m", "Hohe Seite bis 2,5 m", "Für VSG 8 mm"],
    technik: [["Rahmen", "Aluminium, Kaltelement"], ["Form", "Schräg, passend zur Dachneigung"], ["Berechnung", "nach breitester und höchster Seite"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite", hint: "Dachtiefe", min: 50, max: 575, start: 300 }, { key: "h", label: "Höhe hohe Seite", hint: "an der Wand", min: 50, max: 250, start: 250 }, { key: "h2", label: "Höhe niedrige Seite", hint: "vorne, min. 15 cm", min: 15, max: 250, start: 220 }],
    felder: [FR_GLAS, GLASFARBEN],
    extras: [{ key: "quer", typ: "check", label: "Mit Quersprosse (horizontal)", info: "Nur bei hoher Seite ab ca. 1,5 m sinnvoll", netto: 0 }],
    skizze: { typ: "ansicht", muster: "sprossen", schraeg: true, hoeheKey: "h", hoeheLabel: "Höhe" }, rechne: festelement(true) };

  // ---------- Sicht- & Sonnenschutz ----------
  P.velaris = { kat: "schatten", name: "Lamellenwand Velaris", kurz: "Schiebbare Lamellen-Elemente", badge: "Neu",
    text: "Elemente mit verstellbaren Aluminium-Lamellen – in Anthrazit oder warmer Holzoptik. Feststehend als Sichtschutz oder auf Schienen schiebbar für maximale Flexibilität.",
    bilder: ["bilder/pergola-6.jpg", "bilder/pergola-shutters.jpg"], karte: "bilder/pergola-6.jpg",
    merkmale: ["Elementbreite 0,5 – 1,5 m, Höhe bis 3 m", "Lamellen Anthrazit oder Golden Oak", "Schiebbar oder feststehend"],
    technik: [["Rahmen", "Aluminium, Standardfarben"], ["Lamellen", "RAL 7016 oder Holzoptik Golden Oak"], ["Raster", "Berechnung in 25-cm-Schritten"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Breite je Element", hint: "", min: 50, max: 150, start: 100 }, { key: "h", label: "Höhe", hint: "", min: 100, max: 300, start: 240 }, { key: "n", label: "Anzahl Elemente", hint: "", min: 1, max: 10, start: 3, einheit: "Stk", ohneRegler: false }],
    felder: [{ key: "typ", label: "Ausführung", typ: "chips", werte: [{ wert: "schiebbar", name: "Schiebbar", info: "inkl. Laufschienen" }, { wert: "fest", name: "Feststehend" }] },
      { key: "lamelle", label: "Lamellenfarbe", typ: "farben", werte: [{ wert: "7016" }, { wert: "oak" }] }, Object.assign(farben(["7016", "9006", "9007", "9010"]), { label: "Rahmenfarbe" })],
    extras: [], skizze: { typ: "ansicht", muster: "lamellen", hoeheKey: "h", hoeheLabel: "Höhe", gesamt: true },
    rechne: function (z) {
      var v = rast(R.velaris[z.typ === "fest" ? "fest" : "schiebbar"], z.b * 10, z.h * 10);
      if (v == null) return { fehler: "Diese Größe kalkulieren wir gern persönlich." };
      var n = Math.max(1, Math.round(z.n || 1)), posten = [{ name: n + " × Velaris-Element " + (z.typ === "fest" ? "feststehend" : "schiebbar") + " · " + z.b + " × " + z.h + " cm", netto: v * n }];
      if (z.typ !== "fest") {
        var ges = n * z.b * 10, sc = R.velaris.schienen, i = sc.x.findIndex(function (x) { return x >= ges; });
        if (i < 0) return { fehler: "Gesamtbreite über 7 m – bitte in zwei Anlagen aufteilen oder persönlich anfragen." };
        posten.push({ name: "Laufschienen oben & unten bis " + S.cm(sc.x[i] / 10), netto: sc.p[i] });
      }
      return { posten: posten, info: { teile: n }, umfang: [n + " Lamellen-Elemente", z.typ === "fest" ? "Befestigungsprofile" : "Obere und untere Laufschiene", "Schraubenpaket", "Montageanleitung"], nicht: ["Montage"] };
    } };
  P.queen = { kat: "schatten", name: "Sonnensegel Queen Line", kurz: "Faltbarer Schatten unter dem Dach", badge: "",
    text: "Stoffbahnen, die unter dem Glasdach in Führungsschienen laufen und sich per Bedienstab zusammenfalten lassen – angenehmer Schatten, ohne Motor.",
    bilder: ["bilder/sonnenschutz-1.jpg"], karte: "bilder/sonnenschutz-1.jpg",
    merkmale: ["Tiefe 2 – 6 m", "Bahnbreite bis 1 m", "5 Stofffarben"],
    technik: [["Bedienung", "manuell per Bedienstab"], ["Stoffe", "Gold, Platin, Perlmutt, Grau, Taupe"], ["Bahnbreite", "50–94 cm (bis 4 m Tiefe) bzw. 50–100 cm"]],
    masse: [{ key: "t", label: "Tiefe", hint: "Länge der Bahnen", min: 200, max: 600, start: 400 }, { key: "w", label: "Breite je Bahn", hint: "", min: 50, max: 100, start: 90 }, { key: "n", label: "Anzahl Bahnen", hint: "", min: 1, max: 12, start: 4, einheit: "Stk" }],
    felder: [{ key: "stoff", label: "Stofffarbe", typ: "chips", werte: [{ wert: "gold", name: "Gold" }, { wert: "platin", name: "Platin" }, { wert: "perlmutt", name: "Perlmutt" }, { wert: "grau", name: "Grau" }, { wert: "taupe", name: "Taupe" }] },
      { key: "verst", label: "Lamellenverstärkung", typ: "chips", werte: [{ wert: "ohne", name: "Ohne" }, { wert: "mit", name: "Mit Verstärkung", info: "stabiler bei großen Tiefen" }] }],
    extras: [{ key: "stab", typ: "check", label: "Bedienstab", info: "Zum Öffnen und Schließen der Bahnen", netto: 88 }],
    skizze: { typ: "ansicht", muster: "bahnen", hoeheKey: "t", hoeheLabel: "Tiefe", gesamt: true },
    rechne: function (z) {
      if (z.t <= 400 && z.w > 94) return { fehler: "Bis 4 m Tiefe ist eine Bahn maximal 94 cm breit." };
      var v = rast(R.queen[z.verst === "mit" ? "mit" : "ohne"], z.t * 10, 500);
      if (v == null) return { fehler: "Diese Größe kalkulieren wir gern persönlich." };
      var n = Math.max(1, Math.round(z.n || 1));
      return { posten: [{ name: n + " × Bahn Queen Line · " + z.w + " × " + z.t + " cm" + (z.verst === "mit" ? ", verstärkt" : ""), netto: v * n }], info: { teile: n },
        umfang: [n + " Stoffbahnen mit Lamellen", "Führungsprofile", "Schraubenpaket", "Montageanleitung"], nicht: ["Montage"] };
    } };

  // ---------- Vordach Front Line (Fertigprodukt in Standardgrößen – Widerrufsrecht besteht) ----------
  // Preise netto laut Preisliste Front Line ab 01.08.2026
  var FL = {
    "160": { name: "Front Line 160", mass: "160 × 90 cm", nur: 1515, seite: 3100, bk: 4213, holz: 1738 },
    "200": { name: "Front Line 200", mass: "200 × 90 cm", nur: 1650, seite: 3225, bk: 4377, holz: 2113 },
    "250": { name: "Front Line 250", mass: "250 × 90 cm", nur: 2100, seite: 3875, bk: 4875, holz: 2588 },
    "xl": { name: "Front Line Plus 250", mass: "250 × 125 cm", pfosten: 2568, xlbk: 5750 }
  };
  var istXL = function (z) { return z.modell === "xl"; };
  P.frontline = { kat: "vordach", name: "Vordach Front Line", kurz: "Rechteckvordach aus Aluminium", badge: "Standardgröße", massanfertigung: false,
    text: "Das moderne Rechteckvordach mit klarer Kante schützt Ihren Eingang zuverlässig vor Regen und Schnee: integrierte Entwässerung, auf Wunsch mit Seitenteil und Briefkasten. In drei Breiten, als extra tiefes Front Line Plus und als Front Line Wood in Holzoptik.",
    bilder: ["bilder/vordach-frontline-8.jpg", "bilder/vordach-frontline-1.jpg", "bilder/vordach-frontline-3.jpg", "bilder/vordach-frontline-6.jpg", "bilder/vordach-frontline-2.jpg", "bilder/vordach-frontline-modelle.jpg"], karte: "bilder/vordach-frontline-8.jpg",
    merkmale: ["Breiten 160, 200 und 250 cm, Plus mit 125 cm Tiefe", "Optional Seitenteil mit Briefkasten", "Anthrazit oder Holzoptik"],
    technik: [["Material", "Aluminium, pulverbeschichtet"], ["Farbe", "Anthrazit (Sonderfarben auf Anfrage)"], ["Tiefe", "90 cm, Front Line Plus 125 cm"], ["Seitenteil", "220 cm hoch"], ["Pfosten (Plus)", "80 × 80 mm, 2,00–2,50 m"], ["Garantie", "10 J. Beschichtung · 5 J. Elektrobauteile"]],
    masse: [],
    felder: [
      { key: "modell", label: "Größe", typ: "chips", werte: [{ wert: "160", name: "160 × 90 cm", info: "Breite 1,60 m" }, { wert: "200", name: "200 × 90 cm", info: "Breite 2,00 m" }, { wert: "250", name: "250 × 90 cm", info: "Breite 2,50 m" }, { wert: "xl", name: "Plus 250 × 125 cm", info: "Extra tief, mit Pfosten" }] },
      { key: "design", label: "Design", typ: "chips", werte: [{ wert: "anthrazit", name: "Anthrazit" }, { wert: "holz", name: "Wood (Holzoptik)", info: "Front Line Wood", aktiv: function (z) { return !istXL(z); } }] },
      { key: "ausf", label: "Ausführung", typ: "karten", spalten: 3, werte: [
        { wert: "nur", name: "Nur Vordach", info: "Entwässerung über Wasserablauf", bild: "bilder/vordach-frontline-1.jpg", aktiv: function (z) { return !istXL(z); } },
        { wert: "seite", name: "Mit Seitenteil", info: "Seitenteil 220 cm hoch", bild: "bilder/vordach-frontline-3.jpg", aktiv: function (z) { return !istXL(z); } },
        { wert: "bk", name: "Seitenteil mit Briefkasten", info: "Briefkasten integriert", bild: "bilder/vordach-frontline-5.jpg", aktiv: function (z) { return !istXL(z) && z.design !== "holz"; } },
        { wert: "pfosten", name: "Mit 2 Pfosten", info: "Nur Front Line Plus", bild: "bilder/vordach-frontline-2.jpg", aktiv: istXL },
        { wert: "xlbk", name: "Seitenteil, Pfosten & Briefkasten", info: "Nur Front Line Plus", bild: "bilder/vordach-frontline-6.jpg", aktiv: istXL }] },
      { key: "seite", label: "Seite", typ: "chips", klein: "von außen auf die Haustür gesehen", werte: [{ wert: "rechts", name: "Rechts", info: "Seitenteil bzw. Wasserablauf rechts" }, { wert: "links", name: "Links", info: "Seitenteil bzw. Wasserablauf links" }] },
      farben(["7016"], "Front Line wird serienmäßig in Anthrazit geliefert. Sonderfarben auf Anfrage (dann Maßanfertigung, ca. 4–5 Wochen).")],
    extras: [{ key: "melder", typ: "check", label: "Bewegungsmelder", info: "Optionales Zubehör zum Vordach", netto: 125 }],
    rechne: function (z) {
      var m = FL[z.modell], netto, titel;
      if (istXL(z)) { netto = m[z.ausf]; titel = m.name + (z.ausf === "pfosten" ? " mit 2 Pfosten" : " mit Seitenteil, Pfosten & Briefkasten"); }
      else if (z.design === "holz") { netto = m.holz + (z.ausf === "seite" ? 2413 : 0); titel = m.name.replace("Front Line", "Front Line Wood") + (z.ausf === "seite" ? " mit Seitenteil (Echtholz Tanne)" : ""); }
      else { netto = m[z.ausf]; titel = m.name + ({ nur: "", seite: " mit Seitenteil", bk: " mit Seitenteil & Briefkasten" })[z.ausf]; }
      if (!netto) return { fehler: "Diese Kombination gibt es nicht – bitte Ausführung anpassen." };
      var umfang = ["Vordach " + m.mass + " aus Aluminium, Anthrazit", "Integrierte Entwässerung (" + z.seite + ")", "Wandbefestigung & Schraubenpaket", "Montageanleitung"];
      if (/seite|bk|xlbk/.test(z.ausf)) umfang.splice(1, 0, "Seitenteil 220 cm" + (z.design === "holz" ? " in Echtholz Tanne" : "") + " (" + z.seite + ")");
      if (/bk/.test(z.ausf)) umfang.splice(2, 0, "Integrierter Briefkasten");
      if (/pfosten|xlbk/.test(z.ausf)) umfang.splice(2, 0, (z.ausf === "pfosten" ? "2 Pfosten" : "1 Pfosten") + " 80 × 80 mm");
      return { posten: [{ name: titel + " · " + z.seite, netto: netto }], umfang: umfang, nicht: ["Montage", "Elektroanschluss durch eine Elektrofachkraft"] };
    } };

  // ---------- Glasgeländer Easy Rail (Maßanfertigung) ----------
  // System (Glashalter-Bodenprofil, Handlauf, Abdeckleiste) 378 €/m netto; Glas TG-PROTECT 88.4 (≈17,5 mm) klar 270 / opal 302 / getönt 365 €/m²;
  // Kantenpolitur 9 €/m; Endkappen je Abschnitt: 2 × Handlauf (8 €) + 2 × Glashalter (25 €). Scheiben max. 150 cm breit.
  var ER_GLAS = { klar: { name: "klar", qm: 270 }, opal: { name: "opal (satiniert)", qm: 302 }, getoent: { name: "getönt (dunkelgrau)", qm: 365 } };
  P.easyrail = { kat: "gelaender", name: "Glasgeländer Easy Rail", kurz: "Ganzglasgeländer mit Alu-Profil", badge: "Neu", massanfertigung: true,
    text: "Ganzglasgeländer ohne störende Pfosten: Die Scheiben aus 17,5 mm Verbundsicherheitsglas stehen in einem robusten Aluminium-Bodenprofil, oben schließt ein schlanker Handlauf ab. Für Balkon, Terrasse und Treppe.",
    bilder: ["bilder/gelaender-1.jpg", "bilder/gelaender-technik.jpg", "bilder/gelaender-komponenten.jpg"], karte: "bilder/gelaender-1.jpg",
    merkmale: ["Länge nach Maß, Höhe 90–110 cm", "VSG-Glas 17,5 mm klar, opal oder getönt", "Anthrazit oder eloxiert"],
    technik: [["System", "Aluminium-Bodenprofil (Aufsatzmontage) mit Handlauf"], ["Glas", "VSG aus ESG 8+8 mm (TG-PROTECT 88.4), Kanten poliert"], ["Scheibenbreite", "max. 150 cm, gleichmäßig aufgeteilt"], ["Befestigung", "M12 (A4), Abstand 15–40 cm"], ["Garantie", "10 Jahre auf die Beschichtung"]],
    masse: [{ key: "b", label: "Gesamtlänge", hint: "alle Abschnitte zusammen", min: 100, max: 3000, start: 600 }, { key: "n", label: "Gerade Abschnitte", hint: "z. B. 3 bei U-Form", min: 1, max: 6, start: 1, einheit: "Stk" }],
    felder: [
      { key: "h", label: "Geländerhöhe", typ: "chips", klein: "Oberkante Handlauf", hinweis: "Die erforderliche Höhe richtet sich nach Ihrer Landesbauordnung (meist 90 cm, ab 12 m Absturzhöhe 110 cm).", werte: [{ wert: "90", name: "90 cm" }, { wert: "100", name: "100 cm" }, { wert: "110", name: "110 cm" }] },
      { key: "glas", label: "Verglasung", typ: "karten", spalten: 3, werte: [
        { wert: "klar", name: "Klarglas", info: "Maximale Lichtdurchlässigkeit", bild: "bilder/gelaender-glas-klar.jpg" },
        { wert: "opal", name: "Opalglas", info: "Weiches, diffuses Licht", bild: "bilder/gelaender-glas-opal.jpg" },
        { wert: "getoent", name: "Getöntes Glas", info: "Sichtschutz & Akzent", bild: "bilder/gelaender-glas-getoent.jpg" }] },
      { key: "farbe", label: "Profilfarbe", typ: "farben", klein: "ohne Aufpreis", hinweis: "Wunschfarbe nach RAL gegen Aufpreis auf Anfrage.", werte: [{ wert: "7016" }, { wert: "elox" }] }],
    extras: [],
    skizze: { typ: "ansicht", muster: "glas", hoeheKey: "h", hoeheLabel: "Höhe", gelaender: true, teileName: "Glasscheiben" },
    rechne: function (z) {
      var L = z.b, n = Math.max(1, Math.round(z.n || 1)), H = parseFloat(z.h) || 100;
      if (L / n < 50) return { fehler: "Ein Abschnitt muss mindestens 50 cm lang sein." };
      var meter = Math.ceil(L / 10) / 10, gh = H - 5, ls = L / n, proAbschnitt = Math.ceil(ls / 150), scheiben = proAbschnitt * n, sb = ls / proAbschnitt;
      var qm = L * gh / 10000, kanten = scheiben * 2 * (sb + gh) / 100, g = ER_GLAS[z.glas];
      return { posten: [
          { name: "Easy Rail System (Bodenprofil, Handlauf, Abdeckung) · " + meter.toLocaleString("de-DE") + " m", netto: 378 * meter },
          { name: scheiben + " Glasscheiben VSG 17,5 mm " + g.name + " · " + qm.toLocaleString("de-DE", { maximumFractionDigits: 2 }) + " m²", netto: g.qm * qm },
          { name: "Kantenpolitur · " + kanten.toLocaleString("de-DE", { maximumFractionDigits: 1 }) + " m", netto: 9 * kanten },
          { name: "Endkappen für " + n + " Abschnitt" + (n > 1 ? "e" : ""), netto: n * 2 * (8 + 25) }],
        info: { teile: scheiben },
        umfang: ["Glashalter-Bodenprofil, " + meter.toLocaleString("de-DE") + " m", "Handlauf & Klick-Abdeckung", scheiben + " Glasscheiben, je ca. " + Math.round(sb) + " × " + gh + " cm, Kanten poliert", "Gummierungen, Kunststoffunterlagen & Endkappen", "Montageanleitung"],
        nicht: ["Montage", "Befestigungsanker passend zu Ihrem Untergrund (M12, A4)"] };
    } };

  // ---------- Sortiment ----------
  // Aktuell im Shop angeboten (Reihenfolge = Anzeige). Weitere fertig definierte Produkte oben bei Bedarf hier ergänzen:
  // frontline (Standardprodukt → 14 Tage Widerrufsrecht!), sunproone, sunproplus, fly, unterdach, aufdach, senkrecht, luna, luxora, pergolamarkise, sg23, sc23, fr23, keil, velaris, queen
  var SORTIMENT = ["tds", "skyview", "carport", "easyrail"];
  var AKTIV = {};
  SORTIMENT.forEach(function (k) { P[k].id = k; if (P[k].massanfertigung === undefined) P[k].massanfertigung = true; AKTIV[k] = P[k]; });
  S.kategorien = KATEGORIEN.filter(function (kat) { return SORTIMENT.some(function (k) { return P[k].kat === kat.id; }); });
  S.produkte = AKTIV;

})();

/* „ab“-Preise: kleinste Maße mit Standardauswahl (inkl. Pflichtzubehör), brutto */
(function () {
  var S = window.AO_SHOP;
  function preisMit(p, wahl) {
    var z = {};
    p.felder.forEach(function (f) { z[f.key] = f.werte[0].wert; });
    (p.extras || []).forEach(function (e) { z[e.key] = e.typ === "check" ? false : e.typ === "auswahl" ? e.werte[0].wert : e.typ === "zahl" ? e.start : 0; });
    p.masse.forEach(function (m) { z[m.key] = wahl === "min" ? (m.einheit === "Stk" ? 1 : m.min) : m.start; });
    p.felder.forEach(function (f) { var w = f.werte.find(function (x) { return !x.aktiv || x.aktiv(z); }); if (w) z[f.key] = w.wert; });
    var r = p.rechne(z); if (!r || r.fehler) return null;
    return r.posten.reduce(function (a, x) { return a + S.brutto(x.netto); }, 0);
  }
  S.abPreis = function (id) { var p = S.produkte[id]; var a = preisMit(p, "min"); return a == null ? preisMit(p, "start") || 0 : a; };
  S.abKategorie = function (kat) { return Math.min.apply(null, Object.values(S.produkte).filter(function (p) { return p.kat === kat; }).map(function (p) { return S.abPreis(p.id); })); };
})();
