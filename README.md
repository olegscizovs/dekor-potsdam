# Dekor Potsdam — Premium Web-Präsentation / Web Presentation

*Eine elegante, responsive Web-Präsentation für den Dekor Salon Potsdam.*  
*A luxury, dark-themed responsive web presentation for Dekor Salon Potsdam.*

---

## 🇩🇪 Deutsch (Hauptversion)

### 🚀 Einfacher Test (Vorschau ohne Server)
Um die Website zu testen, müssen Sie keinen lokalen Webserver einrichten. Öffnen Sie einfach die Datei **`index.html` direkt per Doppelklick** in einem beliebigen modernen Webbrowser. Alle Funktionen, Skripte und Stile laden sofort offline.

### ✨ Funktionen
- **Luxuriöses Design**: Dunkles Premium-Farbschema mit Gold-/Bronze-Akzenten (`#c4a47c`), edler Typografie (`Playfair Display` & `Inter`) und Scroll-Reveal-Effekten.
- **Modulare Struktur**:
  - CSS in 11 spezialisierte Stylesheets unterteilt, zusammengefasst in der Haupteintragsdatei `style.css`.
  - JavaScript in funktionale Module aufgeteilt (Sprachdateien, Highlights-Slider, 3D-Galerie und globale Initialisierung).
- **Mehrsprachigkeit (i18n)**: Volle Unterstützung für **Deutsch**, **Englisch** und **Russisch**. Die Sprachauswahl wird sicher im `localStorage` gespeichert.
- **Interaktive 3D-Galerie**: Eigens entwickelte, performante 3D-Bildgalerie, die auf reinen CSS3-Transformationen basiert.
- **Highlights-Karussell**: Responsiver Slider zur Präsentation von Beispielen und Materialien.
- **Stylische Karte**: Google-Map-Integration, die sich nahtlos ins dunkle Design einfügt und bei Mausberührung (Hover) farbig wird.
- **Barrierefreiheit & SEO**: Strukturierung nach HTML5-Standards, ARIA-Attribute für Screenreader, Tastaturbedienbarkeit (`Tab`, `Enter`, `Leertaste`, `Esc`, `Pfeiltasten`), optimierte Metadaten und beschreibende Bild-Alt-Texte.

### 📁 Dateistruktur
```text
dekorpotsdam/
├── css/                   # Modulare CSS-Komponenten
│   ├── about.css          # Über Uns Sektion
│   ├── base.css           # Basis-Reset & globale Utility-Klassen
│   ├── contacts.css       # Kontakt-Sektion & Karte
│   ├── footer.css         # Footer
│   ├── gallery.css        # Portfolio-Galerie
│   ├── hero.css           # Hero-Bereich (Startbildschirm)
│   ├── highlights.css     # Highlights-Slider
│   ├── impressum.css      # Impressum-Styling
│   ├── navigation.css     # Header & Menüs
│   ├── sections.css       # Allgemeine Sektions-Layouts
│   └── variables.css      # CSS-Tokens (Farben, Schriften, Abstände)
├── js/                    # Modulare JavaScript-Dateien
│   ├── main.js            # Initialisierung & globale Event-Listener
│   ├── slice-gallery.js   # Logik der 3D-Transform-Galerie
│   ├── slider.js          # Logik des Highlights-Sliders
│   └── translations.js    # Übersetzungs-Wörterbuch (DE/EN/RU)
├── images/                # Bilder (Stuck-Texturen, Galeriebilder, Logos)
├── index.html             # Hauptseite (Startseite)
├── impressum.html         # Impressum (TMG-konform)
├── style.css              # CSS-Haupteintragsdatei (@import-Regeln)
├── .gitignore             # Git-Ausschlusskonfiguration (schützt Dokumente)
└── package.json           # Projekt-Konfigurationsdatei
```

### 🛠️ Lokale Ausführung (Optional mit Server)
Falls Sie die Website dennoch über einen lokalen Server ausführen möchten, nutzen Sie einen der folgenden Befehle im Projektverzeichnis:

Mit **Python**:
```bash
python3 -m http.server 8080
```
*Öffnen Sie anschließend `http://localhost:8080` im Browser.*

Mit **Node.js**:
```bash
npx serve .
```

---

## 🇬🇧 English

### 🚀 Simple Testing (Preview Without Server)
To test the website, you do not need to configure or launch a local web server. Simply open the **`index.html` file directly by double-clicking it** in any modern web browser. All features, scripts, and styles load instantly offline.

### ✨ Features
- **Luxury Aesthetic**: A dark premium theme featuring gold/bronze accents (`#c4a47c`), elegant typography (`Playfair Display` & `Inter`), and smooth scroll reveal animations.
- **Modular Codebase**:
  - CSS divided into 11 specialized stylesheets imported via a single `style.css` entrypoint.
  - JavaScript divided into clean component modules (translations, highlights slider, 3D gallery, and global orchestra).
- **Internationalization (i18n)**: Built-in support for **German**, **English**, and **Russian**, with language selection saved locally in the browser's `localStorage`.
- **3D Portfolio Gallery**: A custom, zero-dependency 3D rotating portfolio gallery utilizing CSS 3D transforms.
- **Highlights Carousel**: A fluid, responsive slider showing off key achievements and services.
- **Stylized Google Map**: A customized dark-themed embedded map that turns into full color on mouse hover.
- **Accessibility & SEO**: HTML5 semantic layouts, ARIA attributes, full keyboard control navigation, custom metadata, and unique descriptive image alt attributes.

### 🛠️ Local Server Execution (Optional)
If you prefer running the page via a local static web server, execute one of the following commands:

Using **Python**:
```bash
python3 -m http.server 8080
```
*Navigate to `http://localhost:8080` in your web browser.*

Using **Node.js**:
```bash
npx serve .
```
