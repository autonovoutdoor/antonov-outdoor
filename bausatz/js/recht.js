/* Rechtstexte: Firmendaten, Lieferpauschale usw. zentral aus SHOP_CONFIG einsetzen */
(function () {
  var S = window.AO_SHOP, C = S.config, F = C.firma;
  S.rahmen("");
  var adresse = "<b>" + F.name + "</b><br>Inhaber: " + F.inhaber + "<br>" + F.strasse + "<br>" + F.ort + "<br>" + F.land +
    "<br>Telefon: <a href=\"tel:" + C.telefonLink + "\">+49 156 79818872</a><br>E-Mail: <a href=\"mailto:" + C.mail + "\">" + C.mail + "</a>";
  var setze = function (sel, html) { document.querySelectorAll(sel).forEach(function (e) { e.innerHTML = html; }); };
  setze("[data-firma]", adresse);
  setze("[data-firma-zeile]", F.name + ", Inh. " + F.inhaber + ", " + F.strasse + ", " + F.ort);
  setze("[data-versand]", S.euro(S.versand()));
  setze("[data-versand-netto]", S.euro(C.versand.netto));
  setze("[data-lieferzeit]", C.lieferzeit);
  setze("[data-mail]", "<a href=\"mailto:" + C.mail + "\">" + C.mail + "</a>");
  setze("[data-ustid]", F.ustid);
  setze("[data-bank]", "Kontoinhaber: " + C.bank.inhaber + "<br>Bank: " + C.bank.bankname + "<br>IBAN: " + C.bank.iban);

  // Online-Widerrufsfunktion („Vertrag widerrufen“)
  var form = document.getElementById("widerrufForm");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var pflicht = ["wName", "wMail", "wNr"], ok = true;
    pflicht.forEach(function (id) { var el = document.getElementById(id), gut = el.value.trim() && (id !== "wMail" || /.+@.+\..+/.test(el.value)); el.closest(".feld").classList.toggle("is-fehler", !gut); if (!gut) ok = false; });
    if (!ok) return;
    var jetzt = new Date(), btn = form.querySelector("button"), g = function (id) { return document.getElementById(id).value.trim(); };
    var eingang = jetzt.toLocaleDateString("de-DE") + ", " + jetzt.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }) + " Uhr";
    btn.disabled = true; btn.textContent = "Wird gesendet …";
    S.widerrufSenden({ name: g("wName"), mail: g("wMail"), nr: g("wNr"), datum: g("wDatum"), text: g("wText"), eingang: eingang }).then(function () {
      document.getElementById("wOk").innerHTML = "<b>Ihre Widerrufserklärung ist eingegangen.</b><br>Eingang: " + eingang + ". Eine Bestätigung mit Inhalt, Datum und Uhrzeit Ihrer Erklärung senden wir Ihnen unverzüglich per E-Mail an " + g("wMail") + ".";
      document.getElementById("wOk").style.display = "block"; btn.textContent = "Gesendet";
    }).catch(function () {
      btn.disabled = false; btn.textContent = "Widerruf bestätigen";
      document.getElementById("wOk").innerHTML = "Die Erklärung konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder senden Sie uns Ihren Widerruf per E-Mail an " + C.mail + ".";
      document.getElementById("wOk").style.display = "block";
    });
  });
})();
