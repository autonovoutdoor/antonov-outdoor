/* Antonov Outdoor – Bausatz-Shop: Montage dazubuchen nur im Umkreis (Luftlinie) um den Firmensitz.
   Die PLZ wird über OpenStreetMap (Nominatim) in Koordinaten umgerechnet, dann Entfernung zum Firmensitz berechnet.
   Ergebnis wird je PLZ im Browser zwischengespeichert. */
(function () {
  var S = window.AO_SHOP, M = S.config.montage;
  function km(a, b) { // Luftlinie (Haversine)
    var r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }
  // → Promise { ok: true, km, ort, imUmkreis } bzw. { ok: false } wenn die PLZ nicht gefunden wurde
  S.montagePruefen = function (plz, land) {
    land = land || "de";
    if (!/^\d{4,5}$/.test(plz)) return Promise.resolve({ ok: false });
    var key = "ao_plz_" + land + "_" + plz;
    try { var c = JSON.parse(sessionStorage.getItem(key)); if (c) return Promise.resolve(c); } catch (e) {}
    var url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&postalcode=" + encodeURIComponent(plz) + "&countrycodes=" + land;
    return fetch(url, { headers: { "Accept-Language": "de" } }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j || !j.length) return { ok: false };
      var p = { lat: +j[0].lat, lng: +j[0].lon }, a = j[0].address || {}, d = Math.round(km(M.start, p));
      var e = { ok: true, km: d, ort: a.city || a.town || a.village || a.municipality || "", imUmkreis: d <= M.radiusKm };
      try { sessionStorage.setItem(key, JSON.stringify(e)); } catch (x) {}
      return e;
    }).catch(function () { return { ok: false, fehler: true }; });
  };
  // Montagepreis für den Warenkorb: Summe der Montagetage aller Positionen × Tagessatz (+ MwSt.)
  S.montageFuerKorb = function (korb) {
    var tage = 0, infos = [];
    korb.forEach(function (p) { if (p.montage) { tage += p.montage.tage; infos.push(p.montage.info); } });
    if (!tage) return null;
    var netto = tage * M.tagessatzNetto;
    return { tage: tage, netto: netto, brutto: Math.round(netto * (1 + S.config.mwst) * 100) / 100, info: infos.join(" + ") };
  };
})();
