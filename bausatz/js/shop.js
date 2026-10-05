/* Antonov Outdoor – Bausatz-Shop (lokaler Entwurf) – KERN
   >>> Alle Stellschrauben in SHOP_CONFIG <<<
   Preise = Hersteller-Listenpreis (netto, siehe js/preise.js) × Aufschlag + 19 % MwSt.
   Lieferung per Spedition: Pauschale netto (+ MwSt.), einmal pro Bestellung.
   Die Produkte selbst stehen in js/katalog.js. */
(function () {
  var SHOP_CONFIG = {
    aufschlag: 1.00,          // Faktor auf den Listenpreis (1.00 = Listenpreis)
    freistehend: 1.07,        // Faktor bei freistehendem Terrassendach (TDS/SkyView)
    mwst: 0.19,
    versand: {
      netto: 399 / 1.19,      // Lieferpauschale: 399,00 € inkl. MwSt. für den Kunden (= 335,29 € netto) pro Bestellung (Deutschland)
      text: "Lieferung per Spedition bis an Ihr Grundstück (Bordsteinkante), Termin telefonisch abgestimmt"
    },
    lieferzeit: "4–6 Wochen nach Zahlungseingang",
    telefon: "0156 79818872",
    telefonLink: "+4915679818872",
    mail: "ivan@antonov-outdoor.com",
    firma: { name: "Antonov Outdoor", inhaber: "Ivan Antonov", strasse: "Bloisstraße 49", ort: "79761 Waldshut-Tiengen", land: "Deutschland", ustid: "DE465022490", steuernr: "20045/18223" },
    // Bestellungen: E-Mail an uns (Web3Forms, wie auf der Website) + Eintrag in der Antonov Base (Supabase, RPC submit_lead)
    web3formsKey: "b26a6983-d43b-4a05-908c-f5ba56350c48",
    supabaseUrl: "https://nrpwbbepwuauikqpcvxz.supabase.co",
    supabaseAnon: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycHdiYmVwd3VhdWlrcXBjdnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMTA3NDIsImV4cCI6MjEwMTc4Njc0Mn0.1ds84MnzcWvSTH4XkTZuGuvU6Uc9XZKiAJzWPOYimjQ",
    bank: { inhaber: "Antonov Outdoor", bankname: "Sparkasse Hochrhein", iban: "DE55 6845 2290 0077 1165 15" }
  };

  // Gestell-/Profilfarben (Standardfarben laut Preislisten, ohne Aufpreis)
  var FARBEN = {
    "7016": { name: "Anthrazit", ral: "RAL 7016", hex: "#383E42" },
    "7016s": { name: "Anthrazit Struktur", ral: "RAL 7016", hex: "#383E42" },
    "db703": { name: "Anthrazit Eisenglimmer", ral: "DB 703", hex: "#4B4F52", metall: true },
    "9006": { name: "Weißaluminium", ral: "RAL 9006", hex: "#A5A8A6", metall: true },
    "9007": { name: "Graualuminium", ral: "RAL 9007", hex: "#8F8F8C", metall: true },
    "9010": { name: "Reinweiß", ral: "RAL 9010", hex: "#F1ECE1" },
    "9016": { name: "Verkehrsweiß", ral: "RAL 9016", hex: "#F1F0EA" },
    "oak": { name: "Golden Oak", ral: "Holzoptik", hex: "#B7793E", holz: true },
    "elox": { name: "Eloxiert", ral: "Aluminium natur", hex: "#C9CCCE", metall: true }
  };

  // ---------- Preis-Hilfen ----------
  // Rasterwert: kleinste Stufe ≥ Maß (mm). undefined = außerhalb des Rasters, null = nicht lieferbar
  function raster(g, xmm, ymm) {
    var xi = g.x.findIndex(function (v) { return v >= xmm - 0.5; }), yi = g.y.findIndex(function (v) { return v >= ymm - 0.5; });
    if (xi < 0 || yi < 0) return undefined;
    return g.p[yi][xi];
  }
  function rasterIndex(g, ymm) { return g.y.findIndex(function (v) { return v >= ymm - 0.5; }); }
  function brutto(netto) { return Math.round(netto * SHOP_CONFIG.aufschlag * (1 + SHOP_CONFIG.mwst) * 100) / 100; }
  function versand() { return Math.round(SHOP_CONFIG.versand.netto * (1 + SHOP_CONFIG.mwst) * 100) / 100; }
  var euro = function (n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €"; };
  var cm = function (n) { return Math.round(n).toLocaleString("de-DE") + " cm"; };

  // ---------- Warenkorb (localStorage) ----------
  var KEY = "ao_bausatz_korb_v2";
  function korb() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function speichern(k) { try { localStorage.setItem(KEY, JSON.stringify(k)); } catch (e) {} zahlAnzeigen(); }
  function hinzufuegen(pos) { var k = korb(); pos.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 5); k.push(pos); speichern(k); }
  function entfernen(id) { speichern(korb().filter(function (x) { return x.id !== id; })); }
  function leeren() { speichern([]); }
  function zahlAnzeigen() {
    var n = korb().length;
    document.querySelectorAll("[data-korb-zahl]").forEach(function (el) { el.textContent = n; el.setAttribute("data-leer", n ? "0" : "1"); });
  }

  // ---------- Icons ----------
  var IC = {
    korb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3.5h2.6l2.3 11.2a1.6 1.6 0 0 0 1.6 1.3h8.8a1.6 1.6 0 0 0 1.6-1.2l1.6-7.3H6"/></svg>',
    mass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17 17 3l4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/></svg>',
    schild: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
    tel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    lkw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4h14v12H1zM15 9h4l3 3v4h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></svg>',
    buch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M8 7h8M8 11h6"/></svg>',
    werkzeug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg>',
    pfeil: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    haken: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    schloss: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    uhr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };

  // ---------- Kopf / Fuß ----------
  function kopf(aktivKat) {
    var K = (window.AO_SHOP && window.AO_SHOP.kategorien) || [];
    var nav = K.map(function (k) { return '<a href="index.html#kat-' + k.id + '"' + (k.id === aktivKat ? ' class="is-aktiv"' : "") + '>' + k.kurz + '</a>'; }).join("");
    return '<div class="topbar"><div class="wrap"><span>' + IC.tel.replace("<svg", '<svg width="14" height="14"') + ' Fachberatung vom Monteur: <a href="tel:' + SHOP_CONFIG.telefonLink + '">' + SHOP_CONFIG.telefon + '</a></span>' +
      '<span><b>Maßanfertigung</b> · Lieferung per Spedition · <b>10 J.</b> Garantie auf die Beschichtung</span></div></div>' +
      '<header class="kopf"><div class="wrap">' +
      '<button class="menu-btn" type="button" aria-label="Menü" data-menu>' + IC.menu + '</button>' +
      '<a class="logo" href="index.html"><img src="bilder/logo-weiss.png" alt="Antonov Outdoor"><span class="logo__tag">BAUSATZ-SHOP<small>Alu-Systeme zum Selbstbauen</small></span></a>' +
      '<nav class="nav" id="hauptnav">' + nav + '<a href="index.html#faq">FAQ</a></nav>' +
      '<a class="korb-link" href="warenkorb.html">' + IC.korb + '<span class="korb-txt"> Warenkorb</span> <span class="korb-zahl" data-korb-zahl>0</span></a>' +
      '</div></header>';
  }
  function fuss() {
    var K = (window.AO_SHOP && window.AO_SHOP.kategorien) || [];
    return '<footer class="fuss"><div class="wrap"><div class="fuss__grid">' +
      '<div><img src="bilder/logo-weiss.png" alt="Antonov Outdoor" style="height:52px;margin-bottom:12px"><p>Aluminium-Systeme als Bausatz nach Maß – vom Fachbetrieb, der sie selbst jeden Tag montiert.</p>' +
      '<div class="zahlarten"><span>Vorkasse</span><span>PayPal (bald)</span><span>Kreditkarte (bald)</span></div></div>' +
      '<div><h4>Shop</h4><ul>' + K.map(function (k) { return '<li><a href="index.html#kat-' + k.id + '">' + k.name + '</a></li>'; }).join("") + '</ul></div>' +
      '<div><h4>Service</h4><ul><li><a href="index.html#ablauf">So funktioniert’s</a></li><li><a href="index.html#faq">Häufige Fragen</a></li><li><a href="versand.html">Versand & Zahlung</a></li><li><a href="tel:' + SHOP_CONFIG.telefonLink + '">Beratung: ' + SHOP_CONFIG.telefon + '</a></li><li><a href="https://antonov-outdoor.de/">Montage vom Fachbetrieb →</a></li></ul></div>' +
      '<div><h4>Rechtliches</h4><ul><li><a href="impressum.html">Impressum</a></li><li><a href="datenschutz.html">Datenschutz</a></li><li><a href="agb.html">AGB</a></li><li><a href="widerruf.html">Widerrufsbelehrung</a></li><li><a href="widerruf.html#erklaeren">Vertrag widerrufen</a></li></ul></div>' +
      '</div><div class="fuss__unten"><span>© 2026 Antonov Outdoor · Waldshut-Tiengen</span><span>Alle Preise inkl. 19 % MwSt., zzgl. Lieferpauschale (<a href="versand.html">Versand & Zahlung</a>)</span></div></div></footer>' +
      "";
  }
  function rahmen(aktivKat) {
    var k = document.getElementById("kopf"), f = document.getElementById("fuss");
    if (k) k.outerHTML = kopf(aktivKat);
    if (f) f.outerHTML = fuss();
    var btn = document.querySelector("[data-menu]"), nav = document.getElementById("hauptnav");
    if (btn && nav) {
      btn.addEventListener("click", function () { nav.classList.toggle("is-offen"); });
      nav.addEventListener("click", function (e) { if (e.target.tagName === "A") nav.classList.remove("is-offen"); });
    }
    zahlAnzeigen();
  }

  window.AO_SHOP = Object.assign(window.AO_SHOP || {}, {
    config: SHOP_CONFIG, farben: FARBEN, ic: IC,
    raster: raster, rasterIndex: rasterIndex, brutto: brutto, versand: versand, euro: euro, euro2: euro, cm: cm,
    korb: korb, hinzufuegen: hinzufuegen, entfernen: entfernen, leeren: leeren, rahmen: rahmen
  });
})();
