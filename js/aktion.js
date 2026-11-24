/* Aktionsmotiv „Saisonstart 2027“ – erscheint einmal je Besuch, nach der Cookie-Auswahl, und endet automatisch nach dem 31.12.2026.
   Schliessen: ✕, „Später“, Klick daneben oder Escape. */
(function () {
  "use strict";
  var ENDE = new Date("2027-01-01T00:00:00+01:00"), KEY = "ao_aktion_saisonstart27";
  if (new Date() >= ENDE) return;
  if (/(impressum|datenschutz|404|kontakt)(\.html)?$/.test(location.pathname)) return;
  var gesehen = false; try { gesehen = !!sessionStorage.getItem(KEY); } catch (e) {}
  if (gesehen) return;

  var css = document.createElement("style");
  css.textContent =
    ".ak-o{position:fixed;inset:0;z-index:1050;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(15,18,20,.6);opacity:0;transition:opacity .3s}" +
    ".ak{position:relative;display:grid;grid-template-columns:1.15fr .85fr;width:100%;max-width:820px;max-height:calc(100dvh - 32px);overflow:auto;background:#1b1b1b;color:#fff;border-radius:14px;box-shadow:0 30px 80px rgba(0,0,0,.5);transform:translateY(46px) scale(.95);opacity:0;transition:transform .5s cubic-bezier(.2,.9,.25,1.12),opacity .35s}" +
    ".ak-o.an{opacity:1}.ak-o.an .ak{transform:none;opacity:1}" +
    ".ak-t{padding:40px 34px 32px}.ak-k{color:#e3bd55;font-weight:700;letter-spacing:.14em;font-size:.8rem;padding-right:40px}" +
    ".ak h2{color:#fff;font-size:clamp(2.1rem,5vw,3rem);font-weight:800;line-height:1.05;margin:8px 0 10px}" +
    ".ak p{color:#e8e4da;margin:0;line-height:1.5}" +
    ".ak-p{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0}" +
    ".ak-p div{border:2px solid #c49b2d;border-radius:8px;text-align:center;padding:10px 6px 12px;opacity:0;transform:scale(.7)}" +
    ".ak-o.an .ak-p div{animation:akPop .45s .35s cubic-bezier(.2,.9,.3,1.4) forwards}.ak-o.an .ak-p div+div{animation-delay:.5s}" +
    "@keyframes akPop{to{opacity:1;transform:none}}" +
    ".ak-p b{display:block;color:#e3bd55;font-size:2.3rem;font-weight:800;line-height:1.1}.ak-p span{font-size:.92rem}" +
    ".ak .ak-f{display:inline-block;background:#c49b2d;color:#1b1b1b;font-weight:700;padding:7px 14px;font-size:.95rem}" +
    ".ak-b{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}" +
    ".ak-b a,.ak-b button{font:inherit;font-weight:700;min-height:48px;padding:0 22px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;text-decoration:none}" +
    ".ak-b a{background:#fff;color:#1b1b1b;border:0}.ak-b a:hover{background:#f3e3b5;color:#1b1b1b}.ak-b button{background:none;color:#fff;border:1px solid #777}.ak-b button:hover{border-color:#fff}" +
    ".ak .ak-s{font-size:.75rem;color:#a9a59b;margin-top:14px}" +
    ".ak-i{overflow:hidden;min-height:100%}.ak-i img{width:100%;height:100%;object-fit:cover;display:block;object-position:50% 25%;transform:scale(1.14)}.ak-o.an .ak-i img{transform:none;transition:transform 5s ease-out}" +
    ".ak-x{position:absolute;top:10px;right:10px;z-index:2;width:46px;height:46px;border-radius:50%;border:0;background:rgba(0,0,0,.65);color:#fff;font-size:1.5rem;line-height:1;cursor:pointer}.ak-x:hover{background:#c49b2d;color:#1b1b1b}" +
    ".ak :focus-visible{outline:3px solid #e3bd55;outline-offset:2px}" +
    "@media(max-width:680px){.ak{grid-template-columns:1fr;max-width:420px}.ak-i{order:-1;height:130px;min-height:0}.ak-t{padding:20px 20px 22px}.ak-p{margin:14px 0}.ak-b{margin-top:14px}.ak .ak-b>*{flex:1;padding:0 8px;white-space:nowrap;font-size:.95rem}.ak-p span{font-size:.78rem;white-space:nowrap}.ak .ak-f{font-size:.82rem;padding:7px 10px;white-space:nowrap}}@media(max-width:680px) and (max-height:640px){.ak-i{height:84px}.ak-t{padding:14px 18px 14px}.ak-p{margin:10px 0}.ak h2{margin:4px 0 6px}}" +
    "@media(prefers-reduced-motion:reduce){.ak,.ak-o,.ak-i img,.ak-o.an .ak-i img{transition:none!important}.ak-i img{transform:none}.ak-p div,.ak-o.an .ak-p div{animation:none!important;opacity:1;transform:none}}";

  function zeigen() {
    document.head.appendChild(css);
    var vorher = document.activeElement, o = document.createElement("div");
    o.className = "ak-o";
    o.innerHTML =
      '<div class="ak" role="dialog" aria-modal="true" aria-labelledby="ak-h">' +
        '<button type="button" class="ak-x" aria-label="Schließen">✕</button>' +
        '<div class="ak-t"><div class="ak-k">ANTONOV OUTDOOR · AKTION</div><h2 id="ak-h">Saisonstart 2027</h2>' +
        "<p>Jetzt planen und im Frühling unter dem neuen Dach sitzen.</p>" +
        '<div class="ak-p"><div><b>–10 %</b><span>auf das Terrassendach</span></div><div><b>–15 %</b><span>auf die Markisen</span></div></div>' +
        '<span class="ak-f">Nur bei Bestellung bis 31. Dezember 2026</span>' +
        '<div class="ak-b"><a href="kontakt.html">Jetzt anfragen</a><button type="button">Später</button></div>' +
        '<p class="ak-s">Rabatt auf den Materialpreis, ohne Montage und Lieferung.</p></div>' +
        '<div class="ak-i"><img src="bilder/aktion-saisonstart-2027.webp" alt="Terrassendach mit Senkrechtmarkisen"></div>' +
      "</div>";
    document.body.appendChild(o);
    var x = o.querySelector(".ak-x"), el = o.querySelectorAll("button,a");
    function merken() { try { sessionStorage.setItem(KEY, "1"); } catch (e) {} }
    function zu() {
      merken(); o.classList.remove("an"); o.style.pointerEvents = "none";
      document.removeEventListener("keydown", taste);
      if (vorher && vorher.focus) vorher.focus({ preventScroll: true });
      setTimeout(function () { o.remove(); }, 320);
    }
    function taste(e) {
      if (e.key === "Escape") return zu();
      if (e.key !== "Tab") return;
      var erst = el[0], letzt = el[el.length - 1];
      if (e.shiftKey && document.activeElement === erst) { e.preventDefault(); letzt.focus(); }
      else if (!e.shiftKey && document.activeElement === letzt) { e.preventDefault(); erst.focus(); }
    }
    o.addEventListener("click", function (e) { if (e.target === o) zu(); });
    x.addEventListener("click", zu);
    o.querySelector(".ak-b button").addEventListener("click", zu);
    o.querySelector(".ak-b a").addEventListener("click", merken);
    document.addEventListener("keydown", taste);
    merken();
    setTimeout(function () { o.classList.add("an"); x.focus({ preventScroll: true }); }, 40);
  }

  // erst nach der Cookie-Auswahl, dann nach 1,2 s; nicht stören, wenn gerade ein Feld ausgefüllt wird
  function frei() { return !document.querySelector(".cookie-banner") && !/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName || ""); }
  (function warten() {
    setTimeout(function () { if (frei()) zeigen(); else warten(); }, 1200);
  })();
})();
