/* Antonov Outdoor – Bausatz-Shop: universeller Konfigurator
   Baut Maße, Auswahlfelder, Zubehör, Skizze und Preisaufstellung aus der Produktbeschreibung in js/katalog.js. */
(function () {
  var S = window.AO_SHOP, F = S.farben, $ = function (id) { return document.getElementById(id); };
  var key = new URLSearchParams(location.search).get("p");
  if (!S.produkte[key]) key = "tds";
  var P = S.produkte[key], K = S.kategorien.find(function (k) { return k.id === P.kat; });
  S.rahmen(P.kat);
  if (P.massanfertigung === false) document.querySelectorAll(".kasse-box__liefer span").forEach(function (s) { s.innerHTML = "Standardprodukt · 14 Tage Widerrufsrecht · Lieferung <span data-lieferzeit></span>"; });
  document.title = P.name + " als Bausatz konfigurieren | Antonov Outdoor";
  document.querySelectorAll("[data-lieferzeit]").forEach(function (e) { e.textContent = S.config.lieferzeit; });

  // ---------- Kopf, Galerie, Technik ----------
  $("brotKat").textContent = K.name; $("brotKat").href = "index.html#kat-" + K.id; $("brotName").textContent = P.name;
  $("kat").textContent = K.name + " · Bausatz"; $("titel").textContent = P.name; $("lead").textContent = P.text;
  $("chips").innerHTML = [P.massanfertigung === false ? [S.ic.mass, "Standardgröße"] : [S.ic.mass, "Maßanfertigung"], [S.ic.schild, "10 J. Garantie Beschichtung"], [S.ic.lkw, "Spedition"], [S.ic.tel, "Monteur-Support"]]
    .map(function (c) { return '<span class="chip">' + c[0] + c[1] + '</span>'; }).join("");
  function zeige(i) { $("galBild").src = P.bilder[i]; $("galBild").alt = P.name; document.querySelectorAll("#galMini button").forEach(function (b, j) { b.classList.toggle("is-aktiv", j === i); }); }
  $("galMini").innerHTML = P.bilder.length > 1 ? P.bilder.map(function (b, i) { return '<button type="button" aria-label="Bild ' + (i + 1) + '"><img src="' + b + '" alt="" loading="lazy"></button>'; }).join("") : "";
  document.querySelectorAll("#galMini button").forEach(function (b, i) { b.addEventListener("click", function () { zeige(i); }); });
  zeige(0);
  $("technik").innerHTML = P.technik.map(function (t) { return "<tr><td>" + t[0] + "</td><td>" + t[1] + "</td></tr>"; }).join("");

  // ---------- Zustand ----------
  var z = {};
  P.masse.forEach(function (m) { z[m.key] = m.start; });
  P.felder.forEach(function (f) { z[f.key] = f.werte[0].wert; });
  (P.extras || []).forEach(function (e) { z[e.key] = e.typ === "check" ? false : e.typ === "auswahl" ? e.werte[0].wert : e.typ === "zahl" ? e.start : 0; });
  var r = {};

  var sichtbar = function (o) { return !o.wenn || o.wenn(z); };
  var aktiv = function (w) { return !w.aktiv || w.aktiv(z); };
  var nettoVon = function (e) { return typeof e.netto === "function" ? e.netto(z) : e.netto; };

  // ---------- Schritte rendern ----------
  function schritte() {
    var nr = 0, h = "";
    P.felder.forEach(function (f) { var w = f.werte.find(function (x) { return x.wert === z[f.key]; }); if (w && !aktiv(w)) { var neu = f.werte.find(aktiv); if (neu) z[f.key] = neu.wert; } });
    // Maße (entfällt bei Produkten in Standardgrößen)
    if (P.masse.length) h += '<div class="konf-schritt"><div class="konf-schritt__kopf"><span class="nr">' + (++nr) + '</span><h2>Maße</h2><small>in Zentimetern</small></div><div class="mass mass--' + P.masse.length + '">';
    if (P.masse.length) P.masse.forEach(function (m) {
      var einheit = m.einheit || "cm";
      h += '<div><label for="in_' + m.key + '">' + m.label + (m.hint ? ' <span>(' + m.hint + ')</span>' : "") + '</label>' +
        '<div class="mass__feld"><input id="in_' + m.key + '" data-mass="' + m.key + '" type="number" inputmode="numeric" min="' + m.min + '" max="' + m.max + '" value="' + z[m.key] + '"><em>' + einheit + '</em></div>' +
        '<input type="range" data-regler="' + m.key + '" min="' + m.min + '" max="' + m.max + '" step="1" value="' + z[m.key] + '" aria-label="' + m.label + '">' +
        '<div class="mass__grenze"><span>' + m.min + ' ' + einheit + '</span><span>' + m.max + ' ' + einheit + '</span></div></div>';
    });
    if (P.masse.length) h += '</div>' + (P.skizze ? '<div class="skizze"><svg id="skizze" viewBox="0 0 520 280" aria-label="Skizze mit Maßen"></svg><div class="skizze__info" id="skizzeInfo"></div></div>' : "") +
      '<p class="hinweis" id="massHinweis">Wir fertigen exakt auf Ihr Maß. Unsicher beim Ausmessen? Rufen Sie uns an – wir prüfen Ihre Maße kostenlos vor der Bestellung.</p></div>';
    else h += '<p class="hinweis" id="massHinweis" style="display:none"></p>';
    // Auswahlfelder
    P.felder.forEach(function (f) {
      if (!sichtbar(f)) return;
      h += '<div class="konf-schritt"><div class="konf-schritt__kopf"><span class="nr">' + (++nr) + '</span><h2>' + f.label + '</h2>' + (f.klein ? '<small>' + f.klein + '</small>' : "") + '</div>';
      if (f.typ === "chips") {
        h += '<div class="wahl-chips">' + f.werte.map(function (w) { var a = aktiv(w); return '<button type="button" class="wchip' + (z[f.key] === w.wert ? " is-aktiv" : "") + (a ? "" : " is-aus") + '" data-feld="' + f.key + '" data-wert="' + w.wert + '"' + (a ? "" : " disabled") + '><b>' + w.name + '</b>' + (w.info ? '<span>' + w.info + '</span>' : "") + '</button>'; }).join("") + '</div>';
      } else {
        var spalten = f.typ === "farben" ? 4 : (f.spalten || 3);
        h += '<div class="optionen optionen--' + spalten + '">' + f.werte.map(function (w) {
          if (!aktiv(w)) return ""; // nicht passende Ausführungen ausblenden
          var inhalt;
          if (f.typ === "farben") { var c = F[w.wert]; inhalt = '<div class="opt__bild"><span class="swatch' + (c.metall ? " swatch--metall" : "") + (c.holz ? " swatch--holz" : "") + '" style="--c:' + c.hex + '"></span></div><div class="opt__txt"><b>' + c.name + '</b><span>' + c.ral + '</span></div>'; }
          else inhalt = (w.bild ? '<div class="opt__bild"><img src="' + w.bild + '" alt="" loading="lazy"></div>' : w.svg ? '<div class="opt__bild opt__bild--svg">' + w.svg + '</div>' : "") + '<div class="opt__txt"><b>' + w.name + '</b>' + (w.info ? '<span>' + w.info + '</span>' : "") + '</div>';
          return '<label class="opt' + (f.typ === "farben" ? " opt--farbe" : "") + (z[f.key] === w.wert ? " is-aktiv" : "") + '"><input type="radio" name="' + f.key + '" data-feld="' + f.key + '" value="' + w.wert + '"' + (z[f.key] === w.wert ? " checked" : "") + '>' + inhalt + '</label>';
        }).join("") + '</div>';
      }
      if (f.hinweis) h += '<p class="hinweis">' + f.hinweis + '</p>';
      h += '</div>';
    });
    // Zubehör
    var ex = (P.extras || []).filter(sichtbar);
    if (ex.length) {
      h += '<div class="konf-schritt"><div class="konf-schritt__kopf"><span class="nr">' + (++nr) + '</span><h2>Zubehör & Optionen</h2><small>optional</small></div><div class="extras">';
      ex.forEach(function (e) {
        if (e.typ === "check") h += '<label class="extra' + (z[e.key] ? " is-aktiv" : "") + '" data-extra-zeile="' + e.key + '"><input type="checkbox" data-extra="' + e.key + '"' + (z[e.key] ? " checked" : "") + '><span class="extra__txt"><b>' + e.label + '</b>' + (e.info ? '<small>' + e.info + '</small>' : "") + '</span><span class="extra__preis" data-preis="' + e.key + '"></span></label>';
        else if (e.typ === "auswahl") h += '<div class="extra extra--select"><span class="extra__txt"><b>' + e.label + '</b></span><select data-extra="' + e.key + '">' + e.werte.map(function (w) { return '<option value="' + w.wert + '"' + (z[e.key] === w.wert ? " selected" : "") + '>' + w.name + (w.netto ? " (+ " + S.euro(S.brutto(w.netto)) + ")" : "") + '</option>'; }).join("") + '</select></div>';
        else if (e.typ === "menge") h += '<div class="extra extra--menge"><span class="extra__txt"><b>' + e.label + '</b>' + (e.info ? '<small>' + e.info + '</small>' : "") + '<small>' + S.euro(S.brutto(e.netto)) + ' je ' + e.einheit + ' · <a href="#" data-vorschlag="' + e.key + '">Empfehlung übernehmen</a></small></span><span class="menge"><button type="button" data-minus="' + e.key + '">−</button><input type="number" min="0" max="' + e.max + '" data-extra="' + e.key + '" value="' + z[e.key] + '"><button type="button" data-plus="' + e.key + '">+</button></span></div>';
        else if (e.typ === "zahl") h += '<div class="extra extra--zahl"><span class="extra__txt"><b>' + e.label + '</b><small>' + e.min + '–' + e.max + ' ' + e.einheit + '</small></span><span class="mass__feld mass__feld--klein"><input type="number" min="' + e.min + '" max="' + e.max + '" data-extra="' + e.key + '" value="' + z[e.key] + '"><em>' + e.einheit + '</em></span></div>';
      });
      h += '</div></div>';
    }
    // Lieferung
    h += '<div class="konf-schritt"><div class="konf-schritt__kopf"><span class="nr">' + (++nr) + '</span><h2>Lieferung</h2></div><p style="font-size:.92rem">Lieferung per Spedition bis an Ihr Grundstück (Bordsteinkante) – pauschal <b>' + S.euro(S.versand()) + '</b> pro Bestellung, egal wie viele Bausätze. Die Spedition stimmt den Liefertermin vorab telefonisch mit Ihnen ab.</p></div>';
    $("schritte").innerHTML = h;
    binden();
    update();
  }

  // ---------- Ereignisse ----------
  function binden() {
    var box = $("schritte");
    box.querySelectorAll("[data-mass]").forEach(function (inp) {
      var m = P.masse.find(function (x) { return x.key === inp.dataset.mass; }), rg = box.querySelector('[data-regler="' + m.key + '"]');
      inp.addEventListener("input", function () { var v = parseFloat(inp.value); if (v >= m.min) { z[m.key] = Math.min(v, m.max * 4); rg.value = Math.min(v, m.max); update(); } });
      inp.addEventListener("change", function () { var v = parseFloat(inp.value); if (!(v >= m.min)) v = m.min; if (m.einheit === "Stk") v = Math.min(Math.round(v), m.max); inp.value = v; rg.value = Math.min(v, m.max); z[m.key] = v; update(); });
      rg.addEventListener("input", function () { inp.value = rg.value; z[m.key] = +rg.value; update(); });
    });
    box.querySelectorAll('input[type=radio][data-feld]').forEach(function (inp) { inp.addEventListener("change", function () { z[inp.dataset.feld] = inp.value; schritte(); }); });
    box.querySelectorAll("button[data-feld]").forEach(function (b) { b.addEventListener("click", function () { z[b.dataset.feld] = b.dataset.wert; schritte(); }); });
    box.querySelectorAll("[data-extra]").forEach(function (el) {
      var e = P.extras.find(function (x) { return x.key === el.dataset.extra; });
      el.addEventListener("change", function () {
        if (e.typ === "check") z[e.key] = el.checked;
        else if (e.typ === "auswahl") z[e.key] = el.value;
        else { var v = Math.max(e.typ === "zahl" ? e.min : 0, Math.min(e.max, Math.round(parseFloat(el.value) || 0))); el.value = v; z[e.key] = v; }
        if (e.typ === "check" || e.typ === "auswahl") schritte(); else update();
      });
    });
    box.querySelectorAll("[data-plus],[data-minus]").forEach(function (b) {
      b.addEventListener("click", function () { var k = b.dataset.plus || b.dataset.minus, e = P.extras.find(function (x) { return x.key === k; }); z[k] = Math.max(0, Math.min(e.max, (z[k] || 0) + (b.dataset.plus ? 1 : -1))); box.querySelector('[data-extra="' + k + '"]').value = z[k]; update(); });
    });
    box.querySelectorAll("[data-vorschlag]").forEach(function (a) {
      a.addEventListener("click", function (ev) { ev.preventDefault(); var k = a.dataset.vorschlag, e = P.extras.find(function (x) { return x.key === k; }); z[k] = e.vorschlag(z, r); box.querySelector('[data-extra="' + k + '"]').value = z[k]; update(); });
    });
  }

  // ---------- Berechnung ----------
  function berechne() {
    var res = P.rechne(z) || {};
    if (res.fehler) return res;
    var posten = res.posten.slice();
    (P.extras || []).filter(sichtbar).forEach(function (e) {
      if (e.typ === "check" && z[e.key]) { var n = nettoVon(e); if (n) posten.push({ name: e.label, netto: n }); }
      if (e.typ === "auswahl" && z[e.key]) { var w = e.werte.find(function (x) { return x.wert === z[e.key]; }); if (w && w.netto) posten.push({ name: e.label + ": " + w.name, netto: w.netto }); }
      if (e.typ === "menge" && z[e.key] > 0) posten.push({ name: z[e.key] + " × " + e.label.replace(/ für.*$/, "") + " (" + e.einheit + ")", netto: e.netto * z[e.key] });
    });
    posten.forEach(function (p) { p.brutto = S.brutto(p.netto); });
    res.posten = posten;
    res.netto = posten.reduce(function (a, p) { return a + p.netto; }, 0);
    res.brutto = posten.reduce(function (a, p) { return a + p.brutto; }, 0);
    return res;
  }

  function update() {
    // Auswahl, die durch neue Maße unzulässig wurde, automatisch umstellen
    var umgestellt = false;
    P.felder.forEach(function (f) {
      var w = f.werte.find(function (x) { return x.wert === z[f.key]; });
      if (w && !aktiv(w)) { var neu = f.werte.find(aktiv); if (neu) { z[f.key] = neu.wert; umgestellt = true; } }
      document.querySelectorAll('button[data-feld="' + f.key + '"]').forEach(function (b) { var ww = f.werte.find(function (x) { return x.wert === b.dataset.wert; }); var a = aktiv(ww); b.disabled = !a; b.classList.toggle("is-aus", !a); });
    });
    if (umgestellt) { schritte(); return; }
    r = berechne();
    var ind = !!r.fehler;
    $("produkt").classList.toggle("ist-individuell", ind);
    $("massHinweis").className = "hinweis" + (ind ? " hinweis--warn" : "");
    $("massHinweis").textContent = ind ? r.fehler : "Wir fertigen exakt auf Ihr Maß. Unsicher beim Ausmessen? Rufen Sie uns an – wir prüfen Ihre Maße kostenlos vor der Bestellung.";
    if (!P.masse.length) $("massHinweis").style.display = ind ? "" : "none";
    $("indText").textContent = r.fehler || "";
    // Zubehörpreise
    (P.extras || []).forEach(function (e) {
      var el = document.querySelector('[data-preis="' + e.key + '"]'); if (!el) return;
      var n = nettoVon(e), zeile = document.querySelector('[data-extra-zeile="' + e.key + '"]'), cb = zeile.querySelector("input");
      if (n === null) { el.textContent = "nicht möglich"; cb.disabled = true; if (z[e.key]) { z[e.key] = false; cb.checked = false; zeile.classList.remove("is-aktiv"); } }
      else { cb.disabled = false; el.textContent = n ? "+ " + S.euro(S.brutto(n)) : (e.key === "ledStreifen" && r.posten ? "+ " + S.euro(ledStreifenPreis()) : ""); }
    });
    if (!ind) {
      $("sPosten").innerHTML = '<ul class="posten-liste">' + r.posten.map(function (p) { return '<li><span>' + p.name + '</span><b>' + S.euro(p.brutto) + '</b></li>'; }).join("") + '</ul>';
      $("sPreis").textContent = S.euro(r.brutto);
      $("sMwst").innerHTML = "inkl. 19 % MwSt., zzgl. " + S.euro(S.versand()) + " Lieferung (<a href=\"versand.html\" style=\"color:#ccc\">Versand & Zahlung</a>)";
      $("lieferumfang").innerHTML = (r.umfang || []).map(function (u) { return "<li>" + u + "</li>"; }).join("");
      $("nichtEnthalten").innerHTML = r.nicht && r.nicht.length ? "<b>Nicht im Lieferumfang:</b> " + r.nicht.join(", ") + "." : "";
      $("nichtEnthalten").style.display = r.nicht && r.nicht.length ? "" : "none";
    }
    $("plName").textContent = P.name;
    $("plDetail").textContent = zusammenfassung().slice(0, 3).join(" · ");
    $("plPreis").textContent = ind ? "Auf Anfrage" : S.euro(r.brutto);
    $("plBtn").textContent = ind ? "Angebot anfragen" : "In den Warenkorb";
    if (P.skizze) skizze();
  }
  function ledStreifenPreis() { var g = P.id === "luna" ? window.AO_RASTER.markise.luna : window.AO_RASTER.markise.luxora; var i = S.rasterIndex(g, z.b * 10); return i < 0 ? 0 : S.brutto(g.led[i]); }

  // Kurzbeschreibung der Auswahl (für Warenkorb & Preisleiste)
  function zusammenfassung() {
    var z1 = P.masse.length ? [P.masse.map(function (m) { return m.label.replace(/ je .*| der .*/, "") + " " + z[m.key] + " " + (m.einheit || "cm"); }).join(" · ")] : [];
    P.felder.forEach(function (f) {
      if (!sichtbar(f)) return;
      var w = f.werte.find(function (x) { return x.wert === z[f.key]; }); if (!w) return;
      z1.push(f.typ === "farben" ? f.label + ": " + F[w.wert].name + " (" + F[w.wert].ral + ")" : f.label + ": " + w.name);
    });
    (P.extras || []).filter(sichtbar).forEach(function (e) {
      if (e.typ === "check" && z[e.key]) z1.push(e.label);
    });
    return z1;
  }

  // ---------- Skizze ----------
  function bem(x1, y1, x2, y2, txt, vertikal) {
    var s = '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#9A7318" stroke-width="1.5" marker-start="url(#pf)" marker-end="url(#pf)"/>';
    if (vertikal) s += '<text x="' + (x1 + 8) + '" y="' + ((y1 + y2) / 2 + 4) + '" font-size="13" font-weight="700" fill="#262626" font-family="Inter,Arial">' + txt + '</text>';
    else s += '<text x="' + ((x1 + x2) / 2) + '" y="' + (y1 + 17) + '" text-anchor="middle" font-size="13" font-weight="700" fill="#262626" font-family="Inter,Arial">' + txt + '</text>';
    return s;
  }
  function skizze() {
    var W = 520, H = 280, sk = P.skizze, s = "", info = [];
    var defs = '<defs><marker id="pf" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#9A7318"/></marker></defs>';
    if (sk.typ === "drauf") {
      var b = z.b, t = z.t, sc = Math.min((W - 110) / b, (H - 90) / t), w = b * sc, h = t * sc, x = (W - w) / 2, y = 34;
      var wand = !sk.frei && z.art !== "frei";
      if (wand) s += '<rect x="' + (x - 10) + '" y="' + (y - 14) + '" width="' + (w + 20) + '" height="12" fill="#cfc8b6"/><text x="' + (W / 2) + '" y="' + (y - 18) + '" text-anchor="middle" font-size="11" fill="#7a7466" font-family="Inter,Arial">Hauswand</text>';
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="rgba(160,200,230,.25)" stroke="#2b2b2b" stroke-width="3" rx="2"/>';
      if (sk.lamellen) { var n = Math.max(6, Math.round(t / 16)); for (var i = 1; i < n; i++) { var ly = y + i * h / n; s += '<line x1="' + (x + 3) + '" y1="' + ly + '" x2="' + (x + w - 3) + '" y2="' + ly + '" stroke="#5c6166" stroke-width="2"/>'; } }
      else { var sp = (r.info && r.info.sparren) || Math.max(3, Math.round(b / 85)); for (var j = 0; j < sp; j++) { var sx = x + (sp === 1 ? w / 2 : j * w / (sp - 1)); s += '<line x1="' + sx + '" y1="' + y + '" x2="' + sx + '" y2="' + (y + h) + '" stroke="#2b2b2b" stroke-width="' + (j === 0 || j === sp - 1 ? 3 : 2) + '"/>'; } if (r.info && r.info.sparren) info.push("<span><b>" + r.info.sparren + "</b> Sparren</span>"); }
      var pf = (r.info && r.info.pfosten) || 2, reihen = wand ? [y + h] : [y, y + h], proReihe = Math.max(2, Math.round(pf / reihen.length));
      reihen.forEach(function (py) { for (var k = 0; k < proReihe; k++) { var px = x + (proReihe === 1 ? w / 2 : k * w / (proReihe - 1)); s += '<rect x="' + (px - 6) + '" y="' + (py - 6) + '" width="12" height="12" fill="#C49A2A" stroke="#7a5d10" stroke-width="1.5"/>'; } });
      s += bem(x, y + h + 24, x + w, y + h + 24, (P.masse[0].label) + " " + b + " cm");
      s += bem(x + w + 22, y, x + w + 22, y + h, t + " cm", true);
      info.unshift("<span>Fläche <b>" + (b * t / 10000).toLocaleString("de-DE", { maximumFractionDigits: 1 }) + " m²</b></span>");
      info.push("<span><b>" + (r.info && r.info.pfosten ? r.info.pfosten : "") + "</b> Pfosten</span>");
    } else {
      var n = z.n && sk.gesamt ? Math.round(z.n) : 1, bb = sk.gesamt && P.id === "queen" ? z.w * n : z.b * n, hh = z[sk.hoeheKey] || 200;
      var sc2 = Math.min((W - 150) / bb, (H - 80) / hh), w2 = bb * sc2, h2 = hh * sc2, x2 = (W - w2) / 2, y2 = 20, teile = (r.info && r.info.teile) || n;
      var schraeg = sk.schraeg, hNied = schraeg ? Math.min(z.h2 || 15, hh) * sc2 : h2;
      var form = schraeg ? '<polygon points="' + x2 + ',' + y2 + ' ' + (x2 + w2) + ',' + (y2 + h2 - hNied) + ' ' + (x2 + w2) + ',' + (y2 + h2) + ' ' + x2 + ',' + (y2 + h2) + '"' : '<rect x="' + x2 + '" y="' + y2 + '" width="' + w2 + '" height="' + h2 + '"';
      var fuell = { glas: "rgba(160,200,230,.28)", rahmen: "rgba(160,200,230,.28)", sprossen: "rgba(160,200,230,.28)", stoff: "#d9cbb2", lamellen: z.lamelle === "oak" ? "#c68a4c" : "#4a4f54", bahnen: "#e6d3a8" }[sk.muster] || "#eee";
      s += form + ' fill="' + fuell + '" stroke="#2b2b2b" stroke-width="3"/>';
      if (sk.gelaender) { s += '<rect x="' + (x2 - 3) + '" y="' + (y2 - 7) + '" width="' + (w2 + 6) + '" height="9" rx="2" fill="#3a3f44"/><rect x="' + (x2 - 3) + '" y="' + (y2 + h2 - 4) + '" width="' + (w2 + 6) + '" height="12" fill="#3a3f44"/>'; }
      if (sk.muster === "stoff") { s += '<rect x="' + (x2 - 6) + '" y="' + (y2 - 10) + '" width="' + (w2 + 12) + '" height="14" rx="3" fill="#3a3f44"/>'; for (var q = 1; q < 8; q++) s += '<line x1="' + x2 + '" y1="' + (y2 + q * h2 / 8) + '" x2="' + (x2 + w2) + '" y2="' + (y2 + q * h2 / 8) + '" stroke="rgba(0,0,0,.06)"/>'; }
      if (sk.muster === "lamellen") { for (var e = 1; e < n; e++) s += '<line x1="' + (x2 + e * w2 / n) + '" y1="' + y2 + '" x2="' + (x2 + e * w2 / n) + '" y2="' + (y2 + h2) + '" stroke="#ddd" stroke-width="3"/>'; for (var l = 1; l < Math.round(hh / 8); l++) s += '<line x1="' + x2 + '" y1="' + (y2 + l * h2 / Math.round(hh / 8)) + '" x2="' + (x2 + w2) + '" y2="' + (y2 + l * h2 / Math.round(hh / 8)) + '" stroke="rgba(255,255,255,.25)"/>'; }
      if (sk.muster === "bahnen") for (var bn = 1; bn < n; bn++) s += '<line x1="' + (x2 + bn * w2 / n) + '" y1="' + y2 + '" x2="' + (x2 + bn * w2 / n) + '" y2="' + (y2 + h2) + '" stroke="#fff" stroke-width="3"/>';
      if (sk.muster === "glas" || sk.muster === "rahmen") for (var g = 1; g < teile; g++) { var gx = x2 + g * w2 / teile; s += '<line x1="' + gx + '" y1="' + y2 + '" x2="' + gx + '" y2="' + (y2 + h2) + '" stroke="#2b2b2b" stroke-width="' + (sk.muster === "rahmen" ? 4 : 1.5) + '"/>'; }
      if (sk.muster === "sprossen") {
        for (var v = 1; v < teile; v++) { var vx = x2 + v * w2 / teile, top = schraeg ? y2 + (h2 - hNied) * v / teile : y2; s += '<line x1="' + vx + '" y1="' + top + '" x2="' + vx + '" y2="' + (y2 + h2) + '" stroke="#2b2b2b" stroke-width="3"/>'; }
        if (r.info && r.info.quer) { var qy = y2 + h2 * 0.55; s += '<line x1="' + x2 + '" y1="' + qy + '" x2="' + (x2 + w2) + '" y2="' + qy + '" stroke="#2b2b2b" stroke-width="3"/>'; }
        if (z.fenster && !schraeg) { var fw = (z.fB || 80) * sc2, fh = (z.fH || 100) * sc2; s += '<rect x="' + (x2 + 10) + '" y="' + (y2 + 10) + '" width="' + Math.min(fw, w2 / teile - 20) + '" height="' + Math.min(fh, h2 - 20) + '" fill="none" stroke="#C49A2A" stroke-width="2.5" stroke-dasharray="6 4"/>'; }
        if (z.tuer && !schraeg) { var tw = (z.tB || 90) * sc2, th = Math.min((z.tH || 200) * sc2, h2); s += '<rect x="' + (x2 + w2 - tw - 4) + '" y="' + (y2 + h2 - th) + '" width="' + tw + '" height="' + th + '" fill="none" stroke="#C49A2A" stroke-width="2.5"/><circle cx="' + (x2 + w2 - tw + 6) + '" cy="' + (y2 + h2 - th / 2) + '" r="3" fill="#C49A2A"/>'; }
      }
      s += bem(x2, y2 + h2 + 24, x2 + w2, y2 + h2 + 24, (sk.gesamt && n > 1 ? "Gesamt " : P.masse[0].label + " ") + Math.round(bb) + " cm");
      s += bem(x2 + w2 + 22, schraeg ? y2 : y2, x2 + w2 + 22, y2 + h2, Math.round(hh) + " cm", true);
      if (schraeg) s += '<text x="' + (x2 - 8) + '" y="' + (y2 + h2 / 2) + '" text-anchor="end" font-size="11" fill="#7a7466" font-family="Inter,Arial">Wand</text>';
      if (teile > 1) info.push("<span><b>" + teile + "</b> " + (sk.teileName || (sk.muster === "bahnen" ? "Bahnen" : sk.muster === "lamellen" ? "Elemente" : sk.muster === "sprossen" ? "Glasfelder" : "Flügel")) + "</span>");
      info.push("<span>" + sk.hoeheLabel + " <b>" + Math.round(hh) + " cm</b></span>");
    }
    var hoehe = sk.typ === "drauf" ? H : Math.max(150, Math.ceil(y2 + h2 + 52));
    $("skizze").setAttribute("viewBox", "0 0 " + W + " " + hoehe);
    $("skizze").innerHTML = defs + s;
    $("skizzeInfo").innerHTML = info.join("");
  }

  // ---------- Warenkorb ----------
  function inKorb() {
    if (r.fehler) { location.href = "tel:+4915679818872"; return; }
    S.hinzufuegen({ produkt: key, name: P.name, massanfertigung: P.massanfertigung !== false, bild: P.karte, preis: Math.round(r.brutto * 100) / 100, netto: r.netto,
      zeilen: zusammenfassung(), posten: r.posten.map(function (p) { return { name: p.name, brutto: p.brutto }; }) });
    var t = $("toast"); t.classList.add("is-zeigen"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("is-zeigen"); }, 3500);
  }
  $("btnKorb").addEventListener("click", inKorb);
  $("plBtn").addEventListener("click", inKorb);

  // Preisleiste: sichtbar, solange die Preisbox nicht im Bild ist
  var kbox = document.querySelector(".kasse-box"), leiste = $("preisleiste");
  window.addEventListener("scroll", function () { var b = kbox.getBoundingClientRect(); leiste.classList.toggle("is-zeigen", window.scrollY > 300 && (b.top > innerHeight || b.bottom < 0)); }, { passive: true });

  schritte();
})();
