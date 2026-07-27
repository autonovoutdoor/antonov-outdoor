/* ==========================================================================
   Antonov Outdoor – Haupt-JavaScript (ohne externe Bibliotheken)
   Enthält: mobiles Menü · aktuelles Jahr · FAQ-Akkordeon · Lightbox-Galerie
            · mehrstufiges Kontaktformular
   Bewusst schlank gehalten = schnelle Ladezeit.
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ---- Mobiles Menü ------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var offen = nav.classList.toggle("offen");
      toggle.classList.toggle("offen", offen);
      toggle.setAttribute("aria-expanded", offen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("offen");
        toggle.classList.remove("offen");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Aktuelles Jahr im Footer ------------------------------------------ */
  document.querySelectorAll(".js-jahr").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- FAQ-Akkordeon ----------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var frage = item.querySelector(".faq-frage");
    var antwort = item.querySelector(".faq-antwort");
    if (!frage || !antwort) return;
    frage.addEventListener("click", function () {
      var offen = item.classList.contains("offen");
      document.querySelectorAll(".faq-item.offen").forEach(function (o) {
        o.classList.remove("offen");
        o.querySelector(".faq-antwort").style.maxHeight = null;
        o.querySelector(".faq-frage").setAttribute("aria-expanded", "false");
      });
      if (!offen) {
        item.classList.add("offen");
        antwort.style.maxHeight = antwort.scrollHeight + "px";
        frage.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Lightbox-Galerie -------------------------------------------------- */
  var galerieItems = Array.prototype.slice.call(document.querySelectorAll(".galerie__item"));
  if (galerieItems.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lightbox__schliessen" aria-label="Schließen">&times;</button>' +
      '<button class="lightbox__pfeil lightbox__pfeil--prev" aria-label="Zurück">&#8249;</button>' +
      '<img src="" alt="">' +
      '<button class="lightbox__pfeil lightbox__pfeil--next" aria-label="Weiter">&#8250;</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var index = 0;

    var bilder = galerieItems.map(function (it) {
      var img = it.querySelector("img");
      return { src: it.getAttribute("data-gross") || (img ? img.src : ""), alt: img ? img.alt : "" };
    });

    function zeige(i) {
      index = (i + bilder.length) % bilder.length;
      lbImg.src = bilder[index].src;
      lbImg.alt = bilder[index].alt;
    }
    function oeffne(i) { zeige(i); lb.classList.add("offen"); document.body.style.overflow = "hidden"; }
    function schliesse() { lb.classList.remove("offen"); document.body.style.overflow = ""; }

    galerieItems.forEach(function (it, i) {
      it.addEventListener("click", function () { oeffne(i); });
    });
    lb.querySelector(".lightbox__schliessen").addEventListener("click", schliesse);
    lb.querySelector(".lightbox__pfeil--prev").addEventListener("click", function () { zeige(index - 1); });
    lb.querySelector(".lightbox__pfeil--next").addEventListener("click", function () { zeige(index + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) schliesse(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("offen")) return;
      if (e.key === "Escape") schliesse();
      if (e.key === "ArrowLeft") zeige(index - 1);
      if (e.key === "ArrowRight") zeige(index + 1);
    });
  }

  /* ---- Mehrstufiges Kontaktformular -------------------------------------- */
  var form = document.querySelector(".js-mehrschritt");
  if (form) {
    var schritte = Array.prototype.slice.call(form.querySelectorAll(".form-schritt"));
    var progress = Array.prototype.slice.call(form.querySelectorAll(".form-fortschritt__schritt"));
    var erfolg = form.querySelector(".form-erfolg");
    var aktuell = 0;

    function zeigeSchritt(i) {
      schritte.forEach(function (s, idx) { s.classList.toggle("aktiv", idx === i); });
      progress.forEach(function (p, idx) {
        p.classList.toggle("aktiv", idx === i);
        p.classList.toggle("fertig", idx < i);
      });
      aktuell = i;
    }

    function schrittGueltig(i) {
      var felder = schritte[i].querySelectorAll("input[required], textarea[required], select[required]");
      for (var k = 0; k < felder.length; k++) {
        if (!felder[k].checkValidity()) { felder[k].reportValidity(); return false; }
      }
      var radios = schritte[i].querySelectorAll('input[type="radio"][name="leistung"]');
      if (radios.length) {
        var gewaehlt = Array.prototype.some.call(radios, function (r) { return r.checked; });
        if (!gewaehlt) { alert("Bitte wählen Sie zuerst eine Leistung aus."); return false; }
      }
      return true;
    }

    form.querySelectorAll(".js-weiter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (schrittGueltig(aktuell) && aktuell < schritte.length - 1) zeigeSchritt(aktuell + 1);
      });
    });
    form.querySelectorAll(".js-zurueck").forEach(function (btn) {
      btn.addEventListener("click", function () { if (aktuell > 0) zeigeSchritt(aktuell - 1); });
    });

    /* Web3Forms Access-Key (identisch zu js/konfigurator.js). Anfragen gehen an
       die im Web3Forms-Konto hinterlegte E-Mail (ivan@antonov-outdoor.com). */
    var WEB3FORMS_KEY = "b26a6983-d43b-4a05-908c-f5ba56350c48";

    function zeigeErfolg() {
      schritte.forEach(function (s) { s.classList.remove("aktiv"); });
      var navi = form.querySelector(".form-navi"); if (navi) navi.style.display = "none";
      var fp = form.querySelector(".form-fortschritt"); if (fp) fp.style.display = "none";
      if (erfolg) erfolg.classList.add("aktiv");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!schrittGueltig(aktuell)) return;

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Wird gesendet …"; }

      var leistung = (form.querySelector('input[name="leistung"]:checked') || {}).value || "";
      var g = function (n) { var el = form.querySelector("#" + n); return el ? el.value.trim() : ""; };
      var payload = {
        access_key: WEB3FORMS_KEY,
        subject: "Neue Anfrage über die Website" + (leistung ? " – " + leistung : ""),
        from_name: "Antonov Outdoor – Website",
        replyto: g("email"),
        email: g("email"),
        botcheck: "",
        Leistung: leistung,
        Name: g("name"), "E-Mail": g("email"), Telefon: g("telefon"),
        "Ort / PLZ": g("ort"), Nachricht: g("nachricht")
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json(); })
        .then(function (d) {
          if (d && d.success) { zeigeErfolg(); }
          else { throw new Error("fail"); }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = "Anfrage absenden"; }
          alert("Das Senden hat leider nicht geklappt. Bitte prüfen Sie Ihre Internetverbindung – oder rufen Sie uns direkt an: 0160 3681266.");
        });
    });
  }

  /* ---- Sticky-CTA-Leiste (erscheint nach dem Hero) ----------------------- */
  var stickyCta = document.querySelector(".sticky-cta");
  if (stickyCta) {
    var toggleSticky = function () {
      if (window.scrollY > 640) stickyCta.classList.add("sichtbar");
      else stickyCta.classList.remove("sichtbar");
    };
    window.addEventListener("scroll", toggleSticky, { passive: true });
    toggleSticky();
  }

  /* ---- Scrollspy: aktiven Menüpunkt hervorheben -------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var abschnitte = navLinks
    .map(function (a) { var id = a.getAttribute("href").slice(1); return { link: a, sec: document.getElementById(id) }; })
    .filter(function (o) { return o.sec; });
  if (abschnitte.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove("aktiv"); });
          var treffer = abschnitte.filter(function (o) { return o.sec === e.target; })[0];
          if (treffer) treffer.link.classList.add("aktiv");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    abschnitte.forEach(function (o) { spy.observe(o.sec); });
  }

  /* ---- Barrierefreiheits-Widget ----------------------------------------- */
  var a11yToggle = document.querySelector(".a11y-toggle");
  var a11yPanel = document.querySelector(".a11y-panel");
  if (a11yToggle && a11yPanel) {
    var root = document.documentElement;
    var SCHRITT = 0;                 // Schriftgröße-Stufe (-2 … +4)
    var einstellungen = {};          // aktive Umschalter
    var LS_KEY = "ao_a11y";

    // gespeicherte Einstellungen laden
    try {
      var gespeichert = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
      SCHRITT = gespeichert.schritt || 0;
      einstellungen = gespeichert.schalter || {};
    } catch (e) {}

    var toggles = {
      kontrast: "a11y-kontrast", links: "a11y-links", cursor: "a11y-cursor",
      nacht: "a11y-nacht", leseschrift: "a11y-leseschrift", stopp: "a11y-stopp",
      lesehilfe: "a11y-lesehilfe"
    };

    function anwenden() {
      root.style.fontSize = SCHRITT ? (100 + SCHRITT * 10) + "%" : "";
      Object.keys(toggles).forEach(function (k) {
        root.classList.toggle(toggles[k], !!einstellungen[k]);
      });
      // Button-Status spiegeln
      a11yPanel.querySelectorAll(".a11y-btn").forEach(function (b) {
        var k = b.getAttribute("data-a11y");
        if (toggles[k]) b.classList.toggle("an", !!einstellungen[k]);
      });
      try { localStorage.setItem(LS_KEY, JSON.stringify({ schritt: SCHRITT, schalter: einstellungen })); } catch (e) {}
    }

    a11yToggle.addEventListener("click", function () {
      var offen = a11yPanel.classList.toggle("offen");
      a11yToggle.setAttribute("aria-expanded", offen ? "true" : "false");
    });

    a11yPanel.querySelectorAll(".a11y-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var k = btn.getAttribute("data-a11y");
        if (k === "schrift-plus") { SCHRITT = Math.min(SCHRITT + 1, 4); }
        else if (k === "schrift-minus") { SCHRITT = Math.max(SCHRITT - 1, -2); }
        else if (k === "vorlesen") {
          if ("speechSynthesis" in window) {
            if (window.speechSynthesis.speaking) { window.speechSynthesis.cancel(); btn.classList.remove("an"); }
            else {
              var haupt = document.querySelector("main, .hero") || document.body;
              var u = new SpeechSynthesisUtterance(document.body.innerText.slice(0, 4000));
              u.lang = "de-DE";
              u.onend = function () { btn.classList.remove("an"); };
              window.speechSynthesis.speak(u); btn.classList.add("an");
            }
          } else { alert("Ihr Browser unterstützt die Vorlesefunktion leider nicht."); }
          return;
        }
        else if (toggles[k]) { einstellungen[k] = !einstellungen[k]; }
        anwenden();
      });
    });

    var reset = a11yPanel.querySelector(".a11y-reset");
    if (reset) reset.addEventListener("click", function () {
      SCHRITT = 0; einstellungen = {};
      a11yPanel.querySelectorAll(".a11y-btn.an").forEach(function (b) { b.classList.remove("an"); });
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      anwenden();
    });

    // Lesehilfe-Balken folgt dem Mauszeiger
    var balken = document.querySelector(".a11y-lesebalken");
    if (balken) document.addEventListener("mousemove", function (e) {
      if (root.classList.contains("a11y-lesehilfe")) balken.style.top = (e.clientY - 22) + "px";
    });

    anwenden(); // gespeicherten Zustand herstellen
  }

  /* ---- Cookie-Banner (DSGVO) --------------------------------------------
     Erscheint beim ersten Besuch auf JEDER Seite und verlangt eine Auswahl.
     Rechtlich muss neben "Alle akzeptieren" eine gleichwertige Ablehnung
     ("Nur notwendige") angeboten werden. Die Auswahl wird gespeichert.
     Andere Skripte können die Einstellung so abfragen:
       window.aoCookieOK = function(){ return localStorage.getItem("ao_cookie")==="alle"; }
     -> optionale Dienste (Karten, Statistik) NUR laden, wenn true. */
  (function () {
    var KEY = "ao_cookie";
    window.aoCookieOK = function () { return localStorage.getItem(KEY) === "alle"; };
    if (localStorage.getItem(KEY)) return; // bereits entschieden

    // Pfad zur Datenschutzseite je nach Verzeichnis (z. B. /ratgeber/)
    var dpfad = /\/ratgeber\//.test(location.pathname) ? "../datenschutz.html" : "datenschutz.html";

    var overlay = document.createElement("div");
    overlay.className = "cookie-overlay";

    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "true");
    banner.setAttribute("aria-label", "Cookie-Hinweis");
    banner.innerHTML =
      '<div class="cookie-banner__text">' +
        "<strong>Wir verwenden Cookies</strong>" +
        "Diese Website verwendet notwendige Cookies bzw. lokale Speicherung, damit die Seite " +
        "funktioniert (z. B. für dieses Hinweisfenster und die Barrierefreiheits-Einstellungen). " +
        "Optionale Cookies – etwa für eingebundene Karten oder Statistik – setzen wir nur mit Ihrer " +
        'Zustimmung. Mehr dazu in unserer <a href="' + dpfad + '">Datenschutzerklärung</a>.' +
      "</div>" +
      '<div class="cookie-banner__btns">' +
        '<button type="button" class="btn btn--rahmen-weiss" data-cookie="notwendig">Nur notwendige</button>' +
        '<button type="button" class="btn btn--primaer" data-cookie="alle">Alle akzeptieren</button>' +
      "</div>";

    document.body.appendChild(overlay);
    document.body.appendChild(banner);
    // kleiner Timeout (statt requestAnimationFrame) – feuert zuverlässig auch in
    // inaktiven Tabs, löst aber trotzdem die CSS-Einblende-Animation aus.
    setTimeout(function () { overlay.classList.add("sichtbar"); banner.classList.add("sichtbar"); }, 40);

    function entscheiden(wahl) {
      try { localStorage.setItem(KEY, wahl); } catch (e) {}
      banner.classList.remove("sichtbar");
      overlay.classList.remove("sichtbar");
      setTimeout(function () { banner.remove(); overlay.remove(); }, 350);
    }
    banner.querySelectorAll("[data-cookie]").forEach(function (b) {
      b.addEventListener("click", function () { entscheiden(b.getAttribute("data-cookie")); });
    });
  })();

  /* ---- Produktseiten: Farb-/Glas-Musterauswahl -------------------------- */
  document.querySelectorAll(".muster-auswahl").forEach(function (gruppe) {
    var ziel = gruppe.getAttribute("data-ziel");
    gruppe.querySelectorAll(".muster").forEach(function (btn) {
      btn.addEventListener("click", function () {
        gruppe.querySelectorAll(".muster").forEach(function (m) { m.classList.remove("an"); });
        btn.classList.add("an");
        if (ziel) { var el = document.querySelector(ziel); if (el) el.textContent = btn.getAttribute("data-name"); }
      });
    });
  });

  /* ---- Produktseiten: Kontaktformular an Web3Forms ---------------------- */
  var WEB3FORMS_KEY_PRODUKT = "b26a6983-d43b-4a05-908c-f5ba56350c48";
  document.querySelectorAll(".js-produkt-form").forEach(function (pform) {
    var box = pform.closest(".formular-box") || pform.parentElement;
    var erfolg = box ? box.querySelector(".form-erfolg") : null;
    pform.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!pform.checkValidity()) { pform.reportValidity(); return; }
      var btn = pform.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Wird gesendet …"; }
      var g = function (n) { var el = pform.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ""; };
      var produkt = pform.getAttribute("data-produkt") || "";
      var payload = {
        access_key: WEB3FORMS_KEY_PRODUKT,
        subject: "Produktanfrage: " + produkt,
        from_name: "Antonov Outdoor – Website",
        replyto: g("email"), email: g("email"), botcheck: "",
        Produkt: produkt, Name: g("name"), "E-Mail": g("email"), Telefon: g("telefon"), Nachricht: g("nachricht")
      };
      fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json(); })
        .then(function (d) {
          if (d && d.success) { pform.style.display = "none"; if (erfolg) erfolg.classList.add("aktiv"); }
          else { throw new Error("fail"); }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = "Anfrage senden"; }
          alert("Das Senden hat leider nicht geklappt. Bitte prüfen Sie Ihre Internetverbindung – oder rufen Sie uns direkt an: 0160 3681266.");
        });
    });
  });
});
