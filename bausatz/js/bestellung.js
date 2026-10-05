/* Antonov Outdoor – Bausatz-Shop: Bestellung & Widerruf versenden
   1) E-Mail an uns über Web3Forms (muss klappen – sonst Fehlermeldung, Warenkorb bleibt erhalten)
   2) Zusätzlich Eintrag in der Antonov Base (Supabase, RPC submit_lead) – best effort */
(function () {
  var S = window.AO_SHOP, C = S.config;

  function mail(betreff, felder, antwortAn) {
    var daten = Object.assign({ access_key: C.web3formsKey, subject: betreff, from_name: "Antonov Outdoor – Bausatz-Shop", botcheck: "" }, felder);
    if (antwortAn) daten.replyto = antwortAn;
    return fetch("https://api.web3forms.com/submit", {
      method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(daten)
    }).then(function (r) { return r.json(); }).then(function (res) { if (!res || !res.success) throw new Error("Versand fehlgeschlagen"); return res; });
  }

  function base(name, tel, mail, notiz) {
    try {
      var basis = { p_name: name, p_telefon: tel, p_email: mail, p_source: "shop", p_medium: "", p_campaign: "bausatz", p_content: "", p_term: "", p_landing_page: location.pathname, p_referrer: document.referrer || null };
      var post = function (body) { return fetch(C.supabaseUrl + "/rest/v1/rpc/submit_lead", { method: "POST", headers: { "Content-Type": "application/json", "apikey": C.supabaseAnon, "Authorization": "Bearer " + C.supabaseAnon }, body: JSON.stringify(body) }); };
      post(Object.assign({}, basis, { p_notes: notiz })).then(function (r) { if (!r.ok) return post(basis); }).catch(function () { post(basis).catch(function () {}); });
    } catch (e) {}
  }

  S.bestellungSenden = function (b) {
    var k = b.kunde, e = S.euro;
    var positionen = b.posten.map(function (p, i) {
      return (i + 1) + ") " + p.name + " – " + e(p.preis) + (p.massanfertigung === false ? " (Standardprodukt)" : " (Maßanfertigung)") + "\n   " + (p.zeilen || []).join("\n   ") +
        ((p.posten || []).length ? "\n   Preisaufstellung: " + p.posten.map(function (x) { return x.name + " = " + e(x.brutto); }).join("; ") : "");
    }).join("\n\n");
    var adresse = [k.vorname + " " + k.nachname, k.firma, k.strasse, k.plz + " " + k.ort].filter(Boolean).join(", ");
    var felder = {
      Bestellnummer: b.nr,
      Gesamtbetrag: e(b.summe.gesamt) + " inkl. MwSt. (Waren " + e(b.summe.waren) + " + Lieferung " + e(b.summe.versand || 0) + ")",
      Zahlungsart: "Vorkasse per Überweisung",
      Kunde: adresse, Telefon: k.tel, "E-Mail": k.mail,
      "Hinweis zur Anlieferung": k.hinweis || "-",
      Positionen: positionen,
      Nächster_Schritt: "Maße prüfen → Auftragsbestätigung mit Bankdaten per E-Mail an den Kunden (innerhalb 1 Werktag)"
    };
    var betreff = "🛒 Neue Shop-Bestellung " + b.nr + " – " + e(b.summe.gesamt);
    return mail(betreff, felder, k.mail).then(function () {
      base(k.vorname + " " + k.nachname, k.tel, k.mail, "Shop-Bestellung " + b.nr + " · " + e(b.summe.gesamt) + " · " + b.posten.map(function (p) { return p.name; }).join(", ") + " · Lieferadresse: " + adresse);
    });
  };

  S.widerrufSenden = function (w) {
    return mail("↩️ Widerrufserklärung " + (w.nr || ""), { Name: w.name, "E-Mail": w.mail, Bestellnummer: w.nr, "Bestellt/erhalten am": w.datum || "-", Waren: w.text || "-", Eingang: w.eingang }, w.mail);
  };
})();
