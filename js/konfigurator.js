/* ==========================================================================
   Antonov Outdoor – Produkt-Konfigurator (datengetrieben, ohne Bibliotheken)
   Nachbildung des Konfigurators von bv-aussensysteme.de:
   Produktwahl → produktspezifische Schritte → Kontaktdaten → Zusammenfassung.
   Texte eigenständig formuliert; Produkt-/Materialbezeichnungen sachlich übernommen.
   HINWEIS: Der Versand zeigt nur eine Bestätigung (Demo). Für echten Mailversand
   siehe ANLEITUNG.md (z. B. Formspree oder eigenes Backend).
   ========================================================================== */
(function () {
  "use strict";
  var mount = document.getElementById("konfigurator");
  if (!mount) return;

  /* Web3Forms Access-Key – hier bei Bedarf ändern. Anfragen gehen an die im
     Web3Forms-Konto hinterlegte E-Mail (ivan@antonov-outdoor.com). */
  var WEB3FORMS_KEY = "b26a6983-d43b-4a05-908c-f5ba56350c48";

  /* ---- Wiederverwendbare Optionslisten ---------------------------------- */
  var EINDECKUNG = [
    { v: "VSG-Glas klar", desc: "Durchsichtig, edel" },
    { v: "VSG-Glas Opal (milchig)", desc: "Blickdicht, sanftes Licht" },
    { v: "Polycarbonat klar", desc: "Leicht & günstiger" },
    { v: "Polycarbonat Opal (milchig)", desc: "Wärmeschutz, diffuses Licht" },
    { v: "Noch unsicher – bitte beraten", desc: "" }
  ];
  var GLAS = function (s) { return /Glas/.test(s.eindeckung || ""); };
  var FARBE_STD = [
    { v: "Anthrazit (RAL 7016)" }, { v: "Weißaluminium (RAL 9006)" },
    { v: "Graualuminium (RAL 9007)" }, { v: "Reinweiß (RAL 9010)" },
    { v: "Andere / Beratung" }
  ];
  var FARBE_PERGOLA = [
    { v: "Anthrazit (RAL 7016)" }, { v: "Graualuminium (RAL 9007)" },
    { v: "Creme-Weiß (RAL 9010)" }, { v: "Andere / Beratung" }
  ];
  var MONTAGE = [
    { v: "Ja, mit Fachmontage", desc: "Fachgerechter Aufbau durch unser Team", badge: "EMPFOHLEN" },
    { v: "Nein, Selbstmontage", desc: "Lieferung ohne Aufbau" }
  ];
  var SEITE = [
    { v: "Keine Angabe" }, { v: "Rahmenwand" }, { v: "Schiebetür" },
    { v: "Plankenwand" }, { v: "Senkrechtmarkise" }, { v: "Velaris" }
  ];

  /* ---- Schritt-Bausteine ------------------------------------------------- */
  function stepHauswand() {
    return {
      title: "Wie ist Ihre Hauswand?", sub: "Wichtig für die passende Befestigung",
      groups: [
        { key: "hauswand", type: "choice", required: true, cols: 3, options: [
          { v: "Rauputz" }, { v: "Verklinkert" }, { v: "Sonstiges / weiß nicht" } ] },
        { key: "fassadeText", type: "textarea", label: "Ergänzung zur Fassade (optional)",
          placeholder: "z. B. Fassadenart, Dämmung (z. B. WDVS), Dämmstärke in cm …" }
      ]
    };
  }
  function stepMasse() {
    return {
      title: "Gewünschte Maße", sub: "Grobe Angaben genügen – wir messen später vor Ort exakt nach",
      hint: "Alle Maße in Zentimeter (cm). Grobe Angaben genügen.",
      groups: [ { key: "masse", type: "measures", required: true, fields: [
        { key: "breite", label: "Breite", required: true, ph: "z. B. 400" },
        { key: "tiefe", label: "Tiefe", required: true, ph: "z. B. 300" },
        { key: "hoehe", label: "Höhe (optional)", ph: "z. B. 250" },
        { key: "vorsprung", label: "Dachvorsprung (optional)", ph: "z. B. 20" } ] } ]
    };
  }
  function stepEindeckung() {
    return {
      title: "Welche Eindeckung wünschen Sie?",
      groups: [
        { key: "eindeckung", type: "choice", required: true, cols: 2, options: EINDECKUNG },
        { key: "glasstaerke", type: "choice", required: true, cols: 2, label: "Glasstärke",
          showIf: GLAS, options: [ { v: "8 mm" }, { v: "10 mm" } ] }
      ]
    };
  }
  function stepLichtSound() {
    return {
      title: "Licht & Sound?", sub: "Dezent ins Dachprofil integriert – für stimmungsvolle Abende.",
      groups: [
        { key: "led", type: "choice", required: true, cols: 2, label: "LED-Spots", options: [
          { v: "Ja, mit LED-Spots", desc: "Warmes Licht, unsichtbar integriert", badge: "BELIEBT" },
          { v: "Nein, ohne Beleuchtung" } ] },
        { key: "ledSet", type: "choice", required: true, cols: 3, label: "Welche LED-Spots?",
          showIf: function (s) { return s.led === "Ja, mit LED-Spots"; },
          options: [ { v: "6er-Set" }, { v: "8er-Set" }, { v: "12er-Set" } ] },
        { key: "lautsprecher", type: "choice", required: true, cols: 2, label: "Lautsprecher", options: [
          { v: "Ja, mit Lautsprechern", desc: "Musik direkt aus dem Dachprofil" },
          { v: "Nein, ohne Lautsprecher" } ] },
        { key: "lautsprecherSet", type: "choice", required: true, cols: 2, label: "Welche Lautsprecher?",
          showIf: function (s) { return s.lautsprecher === "Ja, mit Lautsprechern"; },
          options: [ { v: "2er-Set" }, { v: "4er-Set" } ] }
      ]
    };
  }
  function stepFarbe(liste) {
    return { title: "Wunschfarbe (optional)", sub: "Die Standardfarben – jede weitere RAL-Farbe auf Anfrage.",
      groups: [ { key: "farbe", type: "choice", cols: 2, options: liste || FARBE_STD } ] };
  }
  function stepMontage() {
    return { title: "Montage durch unser Fachteam?",
      sub: "Fachgerechter Aufbau – damit Ihre volle Herstellergarantie erhalten bleibt.",
      hint: "Die volle Herstellergarantie (10 J. auf Aluminium, 5 J. auf Markisen, Antriebe & Elektro) setzt eine fachgerechte Montage voraus. Bei Selbstmontage können Ansprüche eingeschränkt sein.",
      groups: [ { key: "montage", type: "choice", required: true, cols: 2, options: MONTAGE } ] };
  }
  function stepSeiten() {
    return {
      title: "Machen Sie mehr aus Ihrer Terrasse",
      sub: "Schon eine geschlossene Seite bringt Wind-, Sicht- und Wetterschutz – aus der Terrasse wird ein Freiluftzimmer.",
      groups: [
        { key: "seiteLinks", type: "choice", cols: 3, label: "Erweiterung links", options: SEITE },
        { key: "seiteRechts", type: "choice", cols: 3, label: "Erweiterung rechts", options: SEITE },
        { key: "seiteVorne", type: "choice", cols: 3, label: "Erweiterung vorne (Stirnseite)", options: SEITE }
      ]
    };
  }
  function stepSonnenschutz() {
    return {
      title: "Mehr Schatten & Komfort?",
      sub: "Eine Markise hält Ihre Terrasse an heißen Tagen spürbar kühler – perfekt für lange Sommerabende.",
      groups: [ { key: "sonnenschutz", type: "choice", cols: 2, options: [
        { v: "Aufdachmarkise", desc: "Hitzeschutz von oben – hält das Glasdach kühl", badge: "BELIEBT" },
        { v: "Unterdachmarkise", desc: "Sanftes, blendfreies Licht – elegant integriert", badge: "EMPFOHLEN" },
        { v: "Plissees", desc: "Faltbar, moderne Optik" },
        { v: "Sonnensegel", desc: "Leichter, textiler Schattenspender" },
        { v: "Noch unsicher – bitte beraten" } ] } ]
    };
  }

  /* ---- Produkt-Definitionen (Reihenfolge = Referenz) --------------------- */
  var PRODUKTE = [
    { v: "Terrassendach TDS", desc: "Klassiker – Glas oder Polycarbonat", icon: "🏠", img: "bilder/terrassenueberdachung-1", steps: [
      { title: "Art des Aufbaus", groups: [ { key: "aufbau", type: "choice", required: true, cols: 2, options: [
        { v: "Wandmontage", desc: "Am Haus befestigt" }, { v: "Freistehend", desc: "Auf eigenen Stützen" } ] } ] },
      stepHauswand(), stepMasse(), stepEindeckung(), stepSonnenschutz(), stepSeiten(), stepLichtSound(),
      stepFarbe(), stepMontage() ] },

    { v: "Flachdach SkyView", desc: "Modernes Flachdach-Design", icon: "💎", img: "bilder/skyview-1", steps: [
      { title: "Art des Aufbaus", groups: [ { key: "aufbau", type: "choice", required: true, cols: 2, options: [
        { v: "Wandmontage", desc: "Am Haus befestigt" }, { v: "Freistehend", desc: "Auf eigenen Stützen" } ] } ] },
      stepHauswand(), stepMasse(), stepEindeckung(), stepSonnenschutz(), stepSeiten(), stepLichtSound(),
      stepFarbe(), stepMontage() ] },

    { v: "Carport", desc: "TDS · Flat Line · Flat Box", icon: "🚗", img: "bilder/carport-1", steps: [
      { title: "Welchen Carport möchten Sie?", groups: [ { key: "carportTyp", type: "choice", required: true, cols: 2, options: [
        { v: "Carport TDS", desc: "Satteldach-Optik, klassisch" }, { v: "Flachdach Flat Line", desc: "Puristisch & modern" },
        { v: "Flachdach Flat Box", desc: "Kubisch, mit Verkleidung" }, { v: "Noch unsicher – bitte beraten" } ] } ] },
      { title: "Ausführung", groups: [ { key: "ausfuehrung", type: "choice", required: true, cols: 3, options: [
        { v: "Carport mit Wandmontage" }, { v: "Freistehender Carport" }, { v: "Carport mit Überstand" } ] } ] },
      stepHauswand(), stepMasse(), stepEindeckung(),
      { title: "Beleuchtung?", groups: [
        { key: "led", type: "choice", required: true, cols: 2, options: [
          { v: "Ja, mit LED-Spots", desc: "Warmes Licht, integriert", badge: "BELIEBT" }, { v: "Nein, ohne Beleuchtung" } ] },
        { key: "ledSet", type: "choice", required: true, cols: 3, label: "Welche LED-Spots?",
          showIf: function (s) { return s.led === "Ja, mit LED-Spots"; },
          options: [ { v: "6er-Set" }, { v: "8er-Set" }, { v: "12er-Set" } ] } ] },
      stepFarbe(), stepMontage() ] },

    { v: "Pergola / Lamellendach", desc: "Lamellendach · Faltdach · Velaris", icon: "📐", img: "bilder/pergola-1", steps: [
      { title: "Welches Dach möchten Sie?", groups: [ { key: "dachTyp", type: "choice", required: true, cols: 2, options: [
        { v: "Lamellendach", desc: "Regulierbare Lamellen" }, { v: "Faltdach", desc: "Textil, zusammenfaltbar" },
        { v: "Velaris", desc: "Premium-Lamellensystem" }, { v: "Noch unsicher – bitte beraten" } ] } ] },
      { title: "Welche Ausführung?", groups: [ { key: "pergolaAusf", type: "choice", required: true, cols: 2, options: [
        { v: "SunPro", desc: "Bewährtes Lamellendach" }, { v: "Premium (Warema Lamaxa L50)", desc: "Hochwertige Markenlösung", badge: "PREMIUM" } ] } ] },
      { title: "Art des Aufbaus", groups: [ { key: "aufbau", type: "choice", required: true, cols: 2, options: [
        { v: "Wandmontage", desc: "Am Haus befestigt" }, { v: "Freistehend", desc: "Auf eigenen Stützen" } ] } ] },
      stepHauswand(), stepMasse(),
      { title: "Seiten schützen?", groups: [ { key: "seitenschutz", type: "choice", cols: 3, options: [
        { v: "ZIP-Senkrechtmarkise", desc: "Wind- & Sichtschutz" }, { v: "Glas-Schiebeelemente", desc: "Transparent, edel" },
        { v: "Nichts / später entscheiden" } ] } ] },
      { title: "Komfort & Technik", groups: [
        { key: "beleuchtung", type: "choice", cols: 2, label: "Beleuchtung", options: [ { v: "Ja, mit Beleuchtung" }, { v: "Nein, ohne Beleuchtung" } ] },
        { key: "heizung", type: "choice", cols: 2, label: "Heizstrahler", options: [ { v: "Ja, mit Heizstrahler" }, { v: "Nein, ohne Heizung" } ] },
        { key: "automatik", type: "choice", cols: 2, label: "Wetter-Automatik", options: [ { v: "Ja, mit Wetter-Automatik" }, { v: "Nein" } ] } ] },
      stepFarbe(FARBE_PERGOLA), stepMontage() ] },

    { v: "Sonstiges", desc: "Markise, Geländer, Vordach …", icon: "✨", img: "bilder/konfig-sonstiges", steps: [
      { title: "Was können wir für Sie tun?", groups: [ { key: "anliegen", type: "textarea", required: true,
        placeholder: "Beschreiben Sie Ihr Vorhaben – z. B. Sonnenschutz, Geländer, Sichtschutz, Reparatur …" } ] },
      stepMasse(), stepMontage() ] },

    { v: "Direkt anfragen", desc: "Ohne Fragen – kurze Nachricht senden", icon: "✉️", steps: [
      { title: "Ihre Nachricht", sub: "Kurz beschreiben, worum es geht – wir melden uns bei Ihnen.",
        groups: [ { key: "nachricht", type: "textarea", required: true,
          placeholder: "Worum geht es? Ihre Nachricht an Antonov Outdoor …" } ] } ] }
  ];

  /* Kontakt- & Zusammenfassungs-Schritt (immer am Ende) */
  var STEP_KONTAKT = {
    title: "Ihre Kontaktdaten", sub: "Damit wir Ihnen Ihr persönliches Angebot zusenden können",
    groups: [ { key: "kontakt", type: "contact", required: true } ]
  };
  var STEP_SUMME = { title: "Zusammenfassung", sub: "Bitte prüfen Sie Ihre Angaben", groups: [ { key: "summe", type: "summary" } ] };

  /* Beschriftungen für die Zusammenfassung */
  var LABELS = {
    produkt: "Produkt", carportTyp: "Carport-Typ", aufbau: "Aufbau", ausfuehrung: "Ausführung",
    dachTyp: "Dach", pergolaAusf: "Ausführung", hauswand: "Fassade", fassadeText: "Fassaden-Info",
    eindeckung: "Eindeckung", glasstaerke: "Glasstärke", sonnenschutz: "Sonnenschutz",
    seiteLinks: "Erweiterung links", seiteRechts: "Erweiterung rechts", seiteVorne: "Erweiterung vorne",
    led: "LED-Beleuchtung", ledSet: "LED-Set", lautsprecher: "Lautsprecher", lautsprecherSet: "Lautsprecher-Set",
    beleuchtung: "Beleuchtung", heizung: "Heizstrahler", automatik: "Wetter-Automatik",
    seitenschutz: "Seitenschutz", farbe: "Farbe", montage: "Montage",
    anliegen: "Ihr Anliegen", nachricht: "Nachricht", vorname: "Name", email: "E-Mail", telefon: "Telefon"
  };
  var SUMME_ORDER = ["produkt", "carportTyp", "dachTyp", "pergolaAusf", "aufbau", "ausfuehrung",
    "hauswand", "fassadeText", "masse", "eindeckung", "glasstaerke", "sonnenschutz", "seiteLinks",
    "seiteRechts", "seiteVorne", "led", "ledSet", "lautsprecher", "lautsprecherSet", "beleuchtung",
    "heizung", "automatik", "seitenschutz", "farbe", "montage", "anliegen", "nachricht",
    "vorname", "email", "telefon"];

  /* ---- Zustand ----------------------------------------------------------- */
  var state = {};
  var produkt = null;      // gewähltes Produkt-Objekt
  var flow = [];           // aktuelle Schrittliste (nach Produktwahl)
  var idx = -1;            // -1 = Produktwahl
  var anfrageNr = "AO-" + Math.random().toString(36).slice(2, 7).toUpperCase();

  /* ---- Rendering --------------------------------------------------------- */
  function el(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function totalSteps() { return produkt ? produkt.steps.length + 2 : 0; } // + Kontakt + Zusammenfassung
  function progress() {
    if (idx < 0) return 6;
    return Math.round(((idx + 1) / (totalSteps() + 1)) * 100);
  }

  function render() {
    var stepHtml = idx < 0 ? renderProduktwahl() : renderStep(flow[idx]);
    mount.innerHTML =
      '<div class="kf__top">' +
        '<span class="kf__nr">Anfrage-Nr. ' + anfrageNr + '</span>' +
        '<span class="kf__balken"><i style="width:' + progress() + '%"></i></span>' +
      '</div>' + stepHtml;
    verdrahten();
  }

  function renderProduktwahl() {
    var cards = PRODUKTE.map(function (p) {
      var bild = p.img
        ? '<span class="kf-opt__bild"><picture>' +
            '<source srcset="' + p.img + '.webp" type="image/webp">' +
            '<img src="' + p.img + '.jpg" alt="' + esc(p.v) + '" loading="lazy"></picture></span>'
        : '<span class="kf-opt__bild kf-opt__bild--icon">' + esc(p.icon) + '</span>';
      return '<button type="button" class="kf-opt kf-opt--prod" data-produkt="' + esc(p.v) + '">' + bild +
        '<span class="kf-opt__titel">' + esc(p.v) + '</span>' +
        '<span class="kf-opt__desc">' + esc(p.desc) + '</span></button>';
    }).join("");
    return '<div class="kf__step"><h3>Was möchten Sie kostenlos konfigurieren?</h3>' +
      '<p class="kf__sub">Kostenlos &amp; unverbindlich – Sie stellen Ihr Wunschprodukt zusammen und erhalten ein individuelles Angebot.</p>' +
      '<div class="kf__opts kf__opts--prod">' + cards + '</div>' +
      '<p class="kf__fehler">Bitte wählen Sie ein Produkt.</p></div>';
  }

  function renderStep(step) {
    var groupsHtml = step.groups.filter(function (g) { return !g.showIf || g.showIf(state); })
      .map(renderGroup).join("");
    return '<div class="kf__step"><h3>' + esc(step.title) + '</h3>' +
      (step.sub ? '<p class="kf__sub">' + esc(step.sub) + '</p>' : "") +
      groupsHtml +
      (step.hint ? '<div class="kf__hint">' + esc(step.hint) + '</div>' : "") +
      '<p class="kf__fehler">Bitte füllen Sie die markierten Felder aus.</p>' +
      '<div class="kf__nav">' +
        '<button type="button" class="btn btn--rahmen kf-zurueck">← Zurück</button>' +
        '<button type="button" class="btn btn--primaer kf-weiter">' +
          (step.groups[0] && step.groups[0].type === "summary" ? "Anfrage absenden ✓" : "Weiter →") +
        '</button>' +
      '</div></div>';
  }

  function renderGroup(g) {
    var lbl = g.label ? '<span class="kf__gruppe-label">' + esc(g.label) + '</span>' : "";
    if (g.type === "choice") {
      var cols = g.cols === 3 ? " kf__opts--3" : (g.cols === 1 ? " kf__opts--1" : "");
      var opts = g.options.map(function (o) {
        var an = state[g.key] === o.v ? " an" : "";
        return '<button type="button" class="kf-opt' + an + '" data-group="' + g.key + '" data-value="' + esc(o.v) + '">' +
          (o.badge ? '<span class="kf-opt__badge">' + esc(o.badge) + '</span>' : "") +
          '<span class="kf-opt__titel">' + esc(o.v) + '</span>' +
          (o.desc ? '<span class="kf-opt__desc">' + esc(o.desc) + '</span>' : "") + '</button>';
      }).join("");
      return lbl + '<div class="kf__opts' + cols + '">' + opts + "</div>";
    }
    if (g.type === "measures") {
      var fields = g.fields.map(function (f) {
        return '<div class="kf-feld"><label>' + esc(f.label) + '</label>' +
          '<div class="kf-input"><input type="text" inputmode="numeric" data-masse="' + f.key + '" placeholder="' + esc(f.ph) + '" value="' + esc(state[f.key] || "") + '"><span class="kf-cm">cm</span></div></div>';
      }).join("");
      return lbl + '<div class="kf__masse">' + fields + "</div>";
    }
    if (g.type === "textarea") {
      return lbl + '<div class="kf__textarea"><textarea data-text="' + g.key + '" placeholder="' + esc(g.placeholder) + '">' + esc(state[g.key] || "") + "</textarea></div>";
    }
    if (g.type === "contact") {
      return '<div class="kf__kontakt">' +
        '<div class="kf-feld"><label>Vorname *</label><input type="text" data-kontakt="vorname" value="' + esc(state.vorname || "") + '" placeholder="Vorname"></div>' +
        '<div class="kf-feld"><label>Nachname</label><input type="text" data-kontakt="nachname" value="' + esc(state.nachname || "") + '" placeholder="Nachname"></div>' +
        '<div class="kf-feld kf-feld--voll"><label>E-Mail *</label><input type="email" data-kontakt="email" value="' + esc(state.email || "") + '" placeholder="ihre@email.de"></div>' +
        '<div class="kf-feld kf-feld--voll"><label>Telefon / WhatsApp</label><input type="tel" data-kontakt="telefon" value="' + esc(state.telefon || "") + '" placeholder="0160 …"></div>' +
        '<label class="kf__dsgvo kf-feld--voll"><input type="checkbox" data-kontakt="dsgvo"' + (state.dsgvo ? " checked" : "") + '><span>Ich habe die <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *</span></label>' +
      "</div>";
    }
    if (g.type === "summary") { return renderSumme(); }
    return "";
  }

  function renderSumme() {
    var rows = [];
    var masse = state.breite ? (state.breite + " × " + (state.tiefe || "?") + (state.hoehe ? " × " + state.hoehe : "") + " cm") : null;
    var seen = {};
    SUMME_ORDER.forEach(function (k) {
      if (seen[k]) return; seen[k] = 1;
      if (k === "masse") { if (masse) rows.push(["Maße (B×T×H)", masse]); return; }
      if (k === "produkt") { rows.push(["Produkt", produkt.v]); return; }
      if (state[k]) rows.push([LABELS[k] || k, k === "vorname" ? (state.vorname + " " + (state.nachname || "")).trim() : state[k]]);
    });
    var html = rows.map(function (r) { return '<div class="zeile"><span>' + esc(r[0]) + "</span><span>" + esc(r[1]) + "</span></div>"; }).join("");
    return '<div class="kf__summe">' + html + "</div>";
  }

  function renderErfolg() {
    mount.innerHTML = '<div class="form-erfolg aktiv" style="display:block">' +
      '<div class="form-erfolg__icon">✓</div>' +
      "<h3>Vielen Dank für Ihre Anfrage!</h3>" +
      "<p>Ihre Konfiguration (Anfrage-Nr. " + anfrageNr + ") ist bei uns eingegangen. Wir melden uns innerhalb von 24&nbsp;Stunden mit Ihrem persönlichen Angebot.</p>" +
      '<p><strong>Sie möchten sofort sprechen?</strong><br><a href="tel:+491603681266">📞 0160 3681266</a></p></div>';
  }

  /* ---- Interaktion ------------------------------------------------------- */
  function verdrahten() {
    mount.querySelectorAll("[data-produkt]").forEach(function (b) {
      b.addEventListener("click", function () {
        produkt = PRODUKTE.filter(function (p) { return p.v === b.getAttribute("data-produkt"); })[0];
        state = { produkt: produkt.v };
        flow = produkt.steps.concat([STEP_KONTAKT, STEP_SUMME]);
        idx = 0; render();
      });
    });
    mount.querySelectorAll(".kf-opt[data-group]").forEach(function (b) {
      b.addEventListener("click", function () {
        var g = b.getAttribute("data-group");
        state[g] = state[g] === b.getAttribute("data-value") ? "" : b.getAttribute("data-value");
        render(); // neu zeichnen (bedingte Untergruppen ein-/ausblenden)
      });
    });
    mount.querySelectorAll("[data-masse]").forEach(function (i) {
      i.addEventListener("input", function () { state[i.getAttribute("data-masse")] = i.value.trim(); });
    });
    mount.querySelectorAll("[data-text]").forEach(function (t) {
      t.addEventListener("input", function () { state[t.getAttribute("data-text")] = t.value.trim(); });
    });
    mount.querySelectorAll("[data-kontakt]").forEach(function (i) {
      i.addEventListener("input", function () { state[i.getAttribute("data-kontakt")] = i.type === "checkbox" ? i.checked : i.value.trim(); });
      if (i.type === "checkbox") i.addEventListener("change", function () { state.dsgvo = i.checked; });
    });
    var w = mount.querySelector(".kf-weiter"); if (w) w.addEventListener("click", weiter);
    var z = mount.querySelector(".kf-zurueck"); if (z) z.addEventListener("click", zurueck);
  }

  function fehler() { var f = mount.querySelector(".kf__fehler"); if (f) { f.classList.add("an"); f.scrollIntoView({ block: "nearest" }); } }

  function gueltig(step) {
    var ok = true;
    step.groups.filter(function (g) { return (!g.showIf || g.showIf(state)) && g.required; }).forEach(function (g) {
      if (g.type === "choice" && !state[g.key]) ok = false;
      else if (g.type === "measures" && (!state.breite || !state.tiefe)) ok = false;
      else if (g.type === "textarea" && !state[g.key]) ok = false;
      else if (g.type === "contact" && (!state.vorname || !state.email || !state.dsgvo)) ok = false;
    });
    return ok;
  }

  function weiter() {
    var step = flow[idx];
    if (step.groups[0] && step.groups[0].type === "summary") { absenden(); return; }
    if (!gueltig(step)) { fehler(); return; }
    if (idx < flow.length - 1) { idx++; render(); mount.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }

  /* ---- Absenden an Web3Forms -------------------------------------------- */
  function felderSammeln() {
    var felder = {};
    var masse = state.breite ? (state.breite + " × " + (state.tiefe || "?") +
      (state.hoehe ? " × " + state.hoehe : "") + " cm" +
      (state.vorsprung ? " · Dachvorsprung " + state.vorsprung + " cm" : "")) : "";
    var seen = {};
    SUMME_ORDER.forEach(function (k) {
      if (seen[k]) return; seen[k] = 1;
      if (k === "masse") { if (masse) felder["Maße (B×T×H)"] = masse; return; }
      if (k === "produkt") { felder["Produkt"] = produkt.v; return; }
      if (k === "vorname") { if (state.vorname) felder["Name"] = (state.vorname + " " + (state.nachname || "")).trim(); return; }
      if (state[k]) felder[LABELS[k] || k] = state[k];
    });
    return felder;
  }

  function absenden() {
    var btn = mount.querySelector(".kf-weiter");
    if (btn) { btn.disabled = true; btn.textContent = "Wird gesendet …"; }
    var felder = felderSammeln();
    var text = "Anfrage-Nr.: " + anfrageNr + "\n" +
      Object.keys(felder).map(function (k) { return k + ": " + felder[k]; }).join("\n");
    var payload = {
      access_key: WEB3FORMS_KEY,
      subject: "Neue Konfigurator-Anfrage " + anfrageNr + " – " + produkt.v,
      from_name: "Antonov Outdoor – Website",
      replyto: state.email || "",
      email: state.email || "",
      botcheck: "",
      "Anfrage-Nr": anfrageNr,
      message: text
    };
    Object.keys(felder).forEach(function (k) { payload[k] = felder[k]; });

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (r) { return r.json(); })
      .then(function (d) { if (d && d.success) { renderErfolg(); } else { sendeFehler(btn); } })
      .catch(function () { sendeFehler(btn); });
  }

  function sendeFehler(btn) {
    if (btn) { btn.disabled = false; btn.textContent = "Anfrage absenden ✓"; }
    var f = mount.querySelector(".kf__fehler");
    if (f) {
      f.innerHTML = "Das Senden hat leider nicht geklappt. Bitte prüfen Sie Ihre Internetverbindung – " +
        'oder rufen Sie uns direkt an: <a href="tel:+491603681266">0160 3681266</a>.';
      f.classList.add("an");
    }
  }
  function zurueck() {
    if (idx === 0) { produkt = null; idx = -1; render(); }
    else { idx--; render(); }
    mount.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render();
})();
