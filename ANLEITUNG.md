# Antonov Outdoor – Website-Anleitung

Diese Website besteht aus reinem **HTML, CSS und JavaScript** – kein Framework, keine
Datenbank. Sie lässt sich per Doppelklick auf `index.html` im Browser öffnen und
kostenlos über **GitHub Pages** veröffentlichen. Vollständig responsive (Handy, Tablet, Desktop).

---

## 0. Neu: Design & Aufbau nach Vorbild bv-aussensysteme.de

Die **Startseite (`index.html`) ist jetzt eine Onepage** im Stil der Referenz-Website:
alle Bereiche auf einer Seite, Navigation über Anker-Links (Leistungen · Galerie · Über uns ·
Ablauf · FAQ · Kontakt). Übernommen wurden Aufbau, Sektionsreihenfolge und Design – die Texte
sind jedoch **eigenständig für Antonov Outdoor formuliert** (besser fürs SEO, kein Duplicate Content).

- **Design:** nahezu Schwarz (`#1a1a1a`) + Gold/Messing (`#C49A2A`), warme Off-White-Flächen –
  Schriften **Inter** (Text) + **Barlow Condensed** (Überschriften), zentral in `css/style.css`.
- **9 Leistungs­kategorien** wie in der Referenz: Terrassenüberdachung, Carport,
  Pergola & Lamellendach, Kaltwintergarten, Sonnenschutz & Markisen, Geländer & Glasgeländer,
  Eingang & Vordächer, Balkon & Fassade, Garten & Außenbereich.
- **Barrierefreiheits-Leiste** unten links (♿): Schrift größer/kleiner, Hoher Kontrast,
  Links betonen, Großer Cursor, Lesehilfe, Nachtmodus, Leseschrift, Animationen stoppen,
  Vorlesen. Einstellungen werden im Browser gespeichert.
- **Sticky-CTA-Leiste** (mobil, erscheint beim Scrollen) + schwebende WhatsApp-/Anruf-Buttons.
- **Produkt-Konfigurator** wie die Referenz (`js/konfigurator.js`): Produktwahl → produktabhängige
  Schritte (Aufbau, Fassade, Maße, Eindeckung + Glasstärke, Sonnenschutz, Seiten, Licht & Sound,
  Farbe, Montage …) → Kontaktdaten → Zusammenfassung. Aktuell zeigt der Versand nur eine
  Bestätigung – für echten Mailversand siehe Formspree-Hinweis weiter unten.
- Die früheren Unterseiten (Leistungs-, Orts-, Ratgeber-, Rechtsseiten) bleiben für das
  **lokale SEO** erhalten und werden aus Footer/Einzugsgebiet verlinkt.

> **Bilder-Hinweis:** Für **Pergola/Lamellendach** sind jetzt echte Fotos eingebunden
> (`pergola-1` = SunPro, `pergola-2` = Warema Lamaxa L50). Nur noch **Sonnenschutz & Markisen**
> nutzt vorübergehend ein Terrassenbild (`terrassenueberdachung-3`) – bei Gelegenheit ersetzen.
> Erzeugte Bildsätze: `kaltwintergarten-1..3`, `balkon-1..3`, `gelaender-1..3`, `garten-1..3`, `pergola-1..2`.

> **E-Mail:** überall auf `ivan@antonov-outdoor.com` gesetzt, Domain auf `antonov-outdoor.de`.

---

## 1. Ordnerstruktur

```
website/
├── index.html                         ← Startseite (alle Sektionen + Tools + Formular)
├── leistungen.html                    ← Übersicht aller Leistungen
├── leistung-terrassenueberdachung.html
├── leistung-carport.html
├── leistung-skyview.html
├── leistung-flat-line.html
├── leistung-vordaecher.html
├── terrassenueberdachung-<ort>.html   ← 5 lokale SEO-Landingpages
├── ueber-uns.html
├── kontakt.html
├── impressum.html · datenschutz.html · agb.html   ← Rechtstexte (PLATZHALTER!)
├── sitemap.xml · robots.txt           ← für Google
├── ratgeber/
│   ├── index.html                     ← Blog-/Ratgeber-Übersicht
│   ├── terrassenueberdachung-alu-oder-holz.html
│   ├── baugenehmigung-terrassenueberdachung.html
│   └── glas-oder-polycarbonat.html
├── css/style.css                      ← ein zentrales Stylesheet für ALLE Seiten
├── js/main.js                         ← Menü, FAQ, Lightbox, mehrstufiges Formular
├── js/tools.js                        ← Windlast- & Baugenehmigungs-Rechner
└── bilder/                            ← alle Bilder
```

---

## 2. WICHTIG: Das müssen Sie noch eintragen / prüfen

### 🔴 Zuerst (wichtig)

| Was | Wo | Aktuell eingetragen (Platzhalter) |
|-----|----|-----------------------------------|
| **E-Mail-Adresse prüfen!** | überall (Suche nach `ivan@antonov-outdoor.com`) | `ivan@antonov-outdoor.com` – die von Ihnen genannte Adresse war unleserlich. Bitte korrigieren. |
| **Inhaber-Name** | `impressum.html` | `[Vor- und Nachname des Inhabers]` |
| **Adresse (Straße, Hausnr.)** | `impressum.html`, `datenschutz.html` | `[Straße und Hausnummer]` |
| **Rechtstexte** | `impressum.html`, `datenschutz.html`, `agb.html` | Nur Gerüst – siehe Punkt 3 |

Telefon/WhatsApp (`0156 79818872`), Ort (Waldshut-Tiengen) und Öffnungszeiten (Mo–Fr 8–17 Uhr)
sind bereits überall eingetragen.

### 🟡 Danach (empfohlen)

- **Logo:** ✅ Ihr echtes Logo ist bereits eingebunden. Das Original (`bilder/logo.PNG`) wurde
  automatisch freigestellt (transparenter Hintergrund) in zwei Versionen:
  `logo.png` (anthrazit, für den hellen Header) und `logo-weiss.png` (weiß, für den dunklen Footer).
  Möchten Sie das Logo später austauschen: neue Datei liefern, ich erzeuge beide Versionen neu –
  oder gleichnamige transparente PNGs ersetzen. (Der Favicon nutzt noch das kleine Symbol `logo.svg`.)
- **USP / Garantie:** Suchen Sie nach `10 Jahre Garantie` bzw. `10 J.` und passen Sie die
  echten Garantiebedingungen an (Startseite, `ueber-uns.html`). Das `*` weist bereits darauf hin.
- **Social-Media-Links:** im Footer (Suche nach `aria-label="Facebook"`) – aktuell `#`.
- **Google-Bewertungen:** Auf der Startseite ist ein Platzhalter mit Beispiel-Bewertungen.
  Ersetzen Sie ihn durch Ihr echtes Google-Widget und den Link zu Ihrem Google-Profil.
- **Kennzahlen:** die Zahlen in der dunklen „Stats"-Sektion (z. B. „100 % Maßanfertigung").

### 🟢 Optional

- **Karte** auf `kontakt.html`: Platzhalter-Kasten durch einen Google-Maps- oder
  OpenStreetMap-`<iframe>` ersetzen (Datenschutzhinweis beachten!).
- **Weitere Orts-Seiten** für zusätzliche Gemeinden (siehe Punkt 5).

---

## 3. Rechtstexte (Impressum, Datenschutz, AGB)

Die Dateien `impressum.html`, `datenschutz.html` und `agb.html` enthalten **nur ein Gerüst mit
Platzhaltern** und sind **keine Rechtsberatung**. Erstellen Sie die finalen Texte mit einem
Generator (z. B. **eRecht24**, **e-recht24.de**, IHK-Generator) und fügen Sie sie ein.
Ein Impressum ist Pflicht; die gelben Hinweiskästen in den Dateien erklären, was zu tun ist.

---

## 4. Kontaktformular „scharf" schalten (E-Mail-Versand)

Aktuell zeigt das mehrstufige Formular nach dem Absenden **nur eine Bestätigung** an – es
verschickt noch keine E-Mail (reines HTML/JS kann das nicht). So aktivieren Sie den echten Versand:

**Einfachste Lösung – Formspree (kostenlos für wenige Anfragen):**
1. Konto auf [formspree.io](https://formspree.io) anlegen, Formular-Endpoint erhalten
   (z. B. `https://formspree.io/f/xxxxxxx`).
2. In `index.html` **und** `kontakt.html` im `<form …>`-Tag ändern:
   - `action="#"` → `action="https://formspree.io/f/xxxxxxx"`
   - `method="post"` bleibt.
3. In `js/main.js` im Formular-Teil das `e.preventDefault();` beim `submit` entfernen bzw.
   die Zeile so anpassen, dass das Formular an Formspree gesendet wird. (Kommentar im Code
   markiert die Stelle: „Für echten Mailversand siehe ANLEITUNG.md".)

Alternativen: eigenes PHP-Skript (nur bei PHP-Hosting), Netlify Forms, Brevo etc.

---

## 5. Weitere Orts-Landingpages anlegen (lokales SEO)

Kopieren Sie z. B. `terrassenueberdachung-wehr.html`, benennen Sie die Kopie um
(z. B. `terrassenueberdachung-dogern.html`) und ersetzen Sie darin den Ortsnamen. Nehmen Sie die
neue Seite in die Footer-Liste, den Abschnitt „Einzugsgebiet" auf der Startseite und in
`sitemap.xml` auf.

---

## 6. Bilder

- **Echte Fotos** von unserem Aluminium-Hersteller sind eingebunden und wurden automatisch verkleinert und in
  **WebP + JPG** (für schnelle Ladezeiten) umgewandelt. Zuordnung:
  - `hero.*` → großer Kopfbereich der Startseite (Terrasse über Lounge)
  - `terrassenueberdachung-1/2/3` → Leistungsseite Terrassenüberdachung
  - `skyview-1…5` → SkyView · `carport-1/2/3` → Carport
  - `flatline-1…6` → Flat Line (Flachdach: Carport, Verkleidung, Gründach, Solar)
  - `vordach-1/2/3` → Vordächer
  - `referenz-1…6` → Startseiten-Galerie & Detailbilder · `zertifikat.*` → Über-uns (DIN EN 1090)
- **Aktuelle Leistungen (5):** Terrassenüberdachung, SkyView, Carport, Flat Line, Vordächer.
  Pergola, Sonnenschutz und Geländer wurden entfernt. Es gibt **keine Platzhalterbilder mehr** –
  alle Leistungen zeigen echte Fotos.
- **Original-Fotos** (die großen Dateien) liegen unter `webseite antonov/Bilder/…` – bewusst **nicht**
  im Web-Ordner, damit die Website schlank bleibt. Neue Fotos am besten als JPG **max. 1600 px** liefern.

> **Hinweis Bildrechte:** Sie haben angegeben, das Herstellermaterial von unserem Aluminium-Hersteller mit
> Erlaubnis nutzen zu dürfen. Der Bildnachweis steht bereits im Impressum.

---

## 7. Veröffentlichen über GitHub Pages (kostenlos)

1. Neues GitHub-Repository anlegen und den **Inhalt des Ordners `website/`** hochladen
   (die Dateien, nicht den Ordner selbst).
2. Im Repo unter **Settings → Pages** als Quelle den `main`-Branch / Root wählen.
3. Nach kurzer Zeit ist die Seite unter `https://<benutzername>.github.io/<repo>/` erreichbar.
4. **Eigene Domain** (z. B. `antonov-outdoor.de`): unter *Settings → Pages → Custom domain*
   eintragen und beim Domain-Anbieter den DNS-Eintrag setzen. Danach in allen Seiten die
   `canonical`- und `og:image`-URLs sowie `sitemap.xml`/`robots.txt` auf Ihre echte Domain prüfen.

---

## 8. Farben ändern (optional)

Alle Farben stehen zentral in `css/style.css` ganz oben unter `:root` (z. B. `--farbe-gold`,
`--farbe-anthrazit`). Einmal dort ändern = wirkt auf allen Seiten.
