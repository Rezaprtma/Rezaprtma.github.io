# AUDIT WEBSITE PORTFOLIO — Novian Reza Pratama

**Tanggal audit:** 14 September 2026  
**URL:** https://rezaprtma.github.io  
**Tipe:** Landing page portfolio pribadi (single page)

---

## 1. INSPEKSI WEBSITE

### Struktur Folder

```
Rezaprtma.github.io/
├── index.html          (satu-satunya halaman)
├── css/
│   ├── style.css       (125 baris, custom CSS)
│   └── bootstrap*.css  (file Bootstrap 5.0 lengkap, lokal)
├── js/
│   ├── script.js       (28 baris, handle link sosial media)
│   ├── close.js        (TIDAK ADA — file direferensikan tapi tidak ditemukan)
│   └── bootstrap*.js   (file Bootstrap 5.0 lengkap, lokal)
└── img/
    ├── hero.jpeg        (foto profil — foto selfie kasual)
    └── projects/
        ├── Project1.png (screenshot Eviana Salon)
        ├── Project2.png (screenshot portfolio lama)
        └── edit.jpeg    (placeholder "coming soon" — gambar teks sederhana)
```

### Teknologi yang Digunakan

| Komponen   | Detail                                                              |
| ---------- | ------------------------------------------------------------------- |
| HTML       | HTML5, single page, inline style sangat banyak                      |
| CSS        | Bootstrap 5.0.0-beta2 + custom style.css (125 baris)               |
| JavaScript | jQuery 3.6.0 (CDN) + vanilla JS                                    |
| Font       | `YujiSyuku` via `@font-face` — file font **tidak ditemukan** di repo |
| Icon       | Bootstrap Icons 1.4.0 (CDN)                                        |
| Animasi    | Hanya CSS loader (3 bar loading animation)                          |
| SVG        | Wave divider antar section (inline SVG path)                        |
| Backend    | Google Apps Script untuk form contact                               |

### Temuan Teknis

- `js/close.js` di-reference di HTML tapi file tidak ada di repo (404 error)
- Font `YujiSyuku` di-reference di CSS (`src: url(font/YujiSyuku-Regular.ttf)`) tapi folder `font/` tidak ada — font **tidak akan termuat**, fallback ke serif/sans-serif
- Bootstrap di-load **dua kali**: sekali via CDN di `<head>`, sekali lagi via file lokal di akhir `<body>` — duplikasi yang tidak perlu
- Banyak inline style (`style="background-color: ..."`, `style="color: white"`) yang seharusnya ada di CSS
- Typo di HTML: `<div class="col-md-4 mb-3"k>` — ada karakter `k` yang salah
- `getElementById("home")` di script.js tanpa `document.` — akan error di console
- Variable `instagram` digunakan dua kali untuk dua event listener yang berbeda (Instagram dan GitHub)
- Social media links (Instagram, GitHub) menggunakan `confirm()` dialog — sangat tidak umum dan mengganggu UX
- Tidak ada `<!DOCTYPE html>` di baris pertama
- Tidak ada meta description, favicon, atau Open Graph tags

---

## 2. KONDISI WEBSITE SAAT INI

### Navbar

- **Fungsi:** Navigasi ke Home, About, Projects, Contact
- **Yang sudah bagus:** Fixed top, responsive (hamburger menu), link anchor berfungsi
- **Masalah utama:** Warna background navbar (`#45415e`) tidak memiliki kontras yang kuat dengan teks, brand hanya bertuliskan "Reza" tanpa identitas visual
- **Perlu diperbaiki:** Tambahkan logo atau brand mark, perbaiki kontras, tambahkan efek scroll (misalnya background berubah saat scroll)

### Hero (Jumbotron)

- **Fungsi:** Menampilkan foto profil dan nama pemilik
- **Yang sudah bagus:** Nama jelas terlihat, ada wave SVG sebagai transisi ke section berikutnya
- **Masalah utama:** Sangat kosong — hanya foto dan nama, tidak ada headline, tagline, deskripsi singkat, atau CTA. Foto menggunakan selfie kasual yang kurang profesional. Tidak ada informasi tentang apa yang dilakukan pemilik
- **Perlu diperbaiki:** Tambahkan tagline/role (misalnya "Informatics Engineering Student"), CTA button, dan gunakan foto yang lebih profesional

### About

- **Fungsi:** Memperkenalkan pemilik website
- **Yang sudah bagus:** Layout sederhana dan mudah dibaca
- **Masalah utama:** Konten sangat minim — hanya menyebutkan nama, kota lahir, dan umur (17 tahun — informasi yang sudah outdated). Tidak ada informasi tentang pendidikan, minat, keahlian, atau tujuan karier. Teks putih di atas background `#9aacb8` memiliki kontras yang kurang baik
- **Perlu diperbaiki:** Tulis deskripsi diri yang lebih informatif dan relevan untuk portfolio developer

### Projects

- **Fungsi:** Menampilkan project yang pernah dibuat
- **Yang sudah bagus:** Menggunakan card layout Bootstrap, gambar project tersedia
- **Masalah utama:** Hanya 2 project nyata, sisanya 3 card bertuliskan "Coming Soon" dengan placeholder image dan teks lorem ipsum default. Deskripsi project sangat singkat dan kurang profesional ("I made this website because I have a lot of free time"). Tidak ada tech stack, link GitHub, atau detail project
- **Perlu diperbaiki:** Hapus placeholder "Coming Soon", tambahkan detail project (tech stack, role, link repo), perbaiki deskripsi

### Contact

- **Fungsi:** Form kontak untuk menghubungi pemilik
- **Yang sudah bagus:** Form berfungsi (terintegrasi Google Apps Script), ada loading state dan success alert
- **Masalah utama:** Tombol bertuliskan "kirim" (bahasa Indonesia campur dengan bahasa Inggris di seluruh website), placeholder form juga campur bahasa ("Enter Pesan"). Tidak ada info kontak alternatif (email, LinkedIn)
- **Perlu diperbaiki:** Konsistensi bahasa, tambahkan info kontak alternatif, perbaiki desain form

### Footer

- **Fungsi:** Credit dan link sosial media
- **Yang sudah bagus:** Ada link Instagram dan GitHub
- **Masalah utama:** Link sosial media menggunakan `confirm()` dialog sebelum redirect — ini sangat mengganggu dan tidak standar. Tidak ada link LinkedIn atau email
- **Perlu diperbaiki:** Hapus confirm dialog, gunakan `<a href>` biasa, tambahkan lebih banyak sosial media

---

## 3. AUDIT VISUAL

| Aspek              | Nilai /10 | Catatan                                                                                         |
| ------------------ | --------: | ----------------------------------------------------------------------------------------------- |
| Layout             |         3 | Layout sangat basic, bergantung sepenuhnya pada default Bootstrap tanpa kustomisasi berarti      |
| Typography         |         3 | Font custom tidak termuat (file hilang), fallback ke serif default. Tidak ada hirarki tipografi  |
| Color              |         4 | Palet warna gelap gradual (abu → biru-abu) cukup konsisten tapi terkesan suram dan tidak modern |
| Spacing            |         3 | Spacing antar section tidak konsisten, margin negatif (-15px) untuk mengatasi gap SVG wave       |
| Visual hierarchy   |         3 | Tidak ada elemen yang menonjol. Hero hanya foto + nama tanpa penekanan visual                    |
| Consistency        |         3 | Campuran bahasa Indonesia-Inggris, inline style yang inconsistent, heading style seragam tapi monoton |
| Branding           |         2 | Tidak ada logo, tidak ada identitas visual, foto profil kasual, tidak ada warna brand yang kuat  |
| Overall appearance |         3 | Terlihat seperti tugas sekolah/latihan pertama Bootstrap, bukan portfolio profesional            |

### 3-7 Masalah Visual Paling Penting

1. **Hero section terlalu kosong dan tidak informatif** — Pengunjung hanya melihat foto selfie dan nama. Tidak ada tagline, role, atau CTA. First impression sangat lemah karena tidak ada alasan bagi pengunjung untuk scroll ke bawah.

2. **Foto profil tidak profesional** — Menggunakan selfie kasual dengan kualitas yang kurang baik. Foto profil adalah elemen pertama yang dilihat pengunjung dan sangat mempengaruhi kredibilitas.

3. **Placeholder "Coming Soon" mendominasi section Projects** — 3 dari 5 card adalah placeholder dengan gambar generic. Ini memberikan kesan website belum selesai dan tidak dirawat, merusak kredibilitas secara signifikan.

4. **Palet warna suram tanpa aksen** — Semua section menggunakan variasi abu-abu gelap ke biru-gelap tanpa satu pun warna aksen yang menarik perhatian. Tidak ada warna yang membuat elemen penting menonjol.

5. **Font custom hilang** — Font `YujiSyuku` yang seharusnya menjadi karakter visual heading tidak termuat karena file font tidak ada di repo. Heading jatuh ke font serif default browser.

6. **Section About sangat minim konten** — Hanya dua kalimat pendek yang tidak memberikan informasi berguna tentang keahlian atau latar belakang pemilik.

7. **Wave SVG transitions menciptakan layout yang aneh** — SVG wave antar section membuat setiap section terasa seperti "tumpukan" yang terpisah, bukan halaman yang mengalir. Margin negatif yang digunakan untuk menghilangkan gap menunjukkan pendekatan yang kurang tepat.

---

## 4. AUDIT UI/UX & FIRST IMPRESSION

- **Apakah pengunjung langsung tahu siapa pemilik website?** Sebagian — nama terlihat jelas ("Novian Reza"), tapi tidak ada informasi tentang siapa dia atau apa yang dia lakukan.

- **Apakah bidang/keahlian terlihat jelas?** Tidak. Tidak ada satu pun mention tentang Teknik Informatika, programming, atau developer di seluruh website. Skills section tidak ada.

- **Apakah website terlihat profesional?** Tidak. Foto selfie kasual, placeholder "Coming Soon", campuran bahasa, dan desain yang sangat basic membuat website terlihat belum selesai.

- **Apakah website terlihat memorable?** Tidak. Tidak ada satu elemen pun yang unik atau berkesan. Desainnya sangat generic Bootstrap.

- **Apakah CTA mudah ditemukan?** Tidak ada CTA sama sekali di hero. Satu-satunya "CTA" adalah tombol "kirim" di form contact yang berada jauh di bawah.

- **Apakah navigasi mudah dipahami?** Ya, navigasi sederhana dan standar. Ini satu-satunya aspek yang cukup baik.

- **Apakah ada bagian yang terlalu kosong atau terlalu ramai?** Hero terlalu kosong. About terlalu kosong. Projects sedikit ramai karena placeholder.

- **Apakah ada bagian yang terasa generik seperti template portfolio?** Seluruh website terasa seperti template Bootstrap default yang belum dikustomisasi. Project cards menggunakan teks placeholder Bootstrap ("Some quick example text to build on the card title").

### Kesan Saat Pertama Melihat Website

> Saat pertama membuka website ini, yang terlihat adalah loading screen singkat, lalu sebuah halaman dengan background abu-abu pucat, foto selfie seseorang berbentuk lingkaran, dan nama "Novian Reza" dalam font serif. Kesan pertama: ini terlihat seperti tugas latihan HTML/CSS, bukan portfolio yang serius. Tidak ada sesuatu yang menarik perhatian atau membuat saya ingin tahu lebih banyak. Scroll ke bawah, section About hanya berisi dua kalimat pendek tentang nama dan tempat lahir. Section Projects menunjukkan beberapa card, tapi 3 dari 5 bertuliskan "Coming Soon" dengan gambar placeholder — ini memberikan kesan website dibuat terburu-buru atau sudah lama tidak diperbarui. Secara keseluruhan, tidak ada yang membuat website ini terasa personal atau profesional.

### Masalah UX Terbesar

1. **Tidak ada value proposition** — Pengunjung tidak tahu dalam 5 detik pertama apa yang dilakukan pemilik website atau mengapa mereka harus peduli.

2. **Social media links menggunakan `confirm()` dialog** — Mengklik ikon Instagram/GitHub memunculkan dialog "Anda yakin ingin mengunjungi...?" — ini sangat mengganggu dan tidak pernah digunakan di website modern manapun.

3. **3 placeholder "Coming Soon"** — Menampilkan konten yang belum ada lebih buruk daripada tidak menampilkan apa-apa. Ini merusak kredibilitas.

4. **Tidak ada CTA di hero** — Pengunjung tidak diarahkan untuk melakukan apapun setelah melihat nama dan foto.

5. **Campuran bahasa tanpa konsistensi** — "kirim", "Enter Pesan", "Terima kasih!", "Anda yakin ingin mengunjungi..." — campur bahasa Indonesia dan Inggris tanpa pola yang jelas.

---

## 5. PERSONAL BRANDING

### Analisis Elemen Branding

| Elemen      | Status                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------- |
| Headline    | Hanya nama "Novian Reza" — tidak ada role atau tagline                                   |
| Deskripsi   | Tempat lahir dan umur (17 tahun — sudah outdated) — tidak relevan untuk portfolio        |
| Skills      | Tidak ada section skills sama sekali                                                     |
| Teknologi   | Tidak disebutkan teknologi apapun yang dikuasai                                          |
| Project     | 2 project web sederhana tanpa penjelasan tech stack                                      |
| Pengalaman  | Tidak ada section experience/education                                                   |
| CTA         | Hanya form contact tanpa konteks ("hubungi saya untuk apa?")                             |

### Apa yang Saat Ini Terlihat dari Pemilik Website?

Saat ini, website hanya menunjukkan bahwa pemilik bernama Novian Reza Pratama, berasal dari Metro, Lampung, dan pernah membuat 2 website sederhana. Tidak ada petunjuk bahwa pemilik adalah mahasiswa Teknik Informatika, programmer, atau memiliki keahlian teknis apapun. Website ini bisa milik siapa saja — tidak ada identitas profesional yang terlihat.

### Apa yang Seharusnya Lebih Terlihat Setelah Redesign?

- **Identitas sebagai mahasiswa/lulusan Teknik Informatika** — universitas, jurusan, angkatan
- **Keahlian teknis** — bahasa pemrograman, framework, tools yang dikuasai
- **Minat spesifik** — web development, mobile development, data science, dll
- **Project yang bermakna** — dengan tech stack, deskripsi problem-solving, dan link repo GitHub
- **Journey/timeline** — perjalanan belajar programming dan pencapaian
- **Profesionalisme** — foto yang layak, bahasa yang konsisten, desain yang rapi
- **Personality** — sesuatu yang membedakan dari ribuan portfolio developer lainnya

---

## 6. ARAH VISUAL TEKNIK INFORMATIKA

### Ide yang Cocok untuk Website Ini

1. **Animated code snippet di hero** — Tampilkan potongan kode (pseudo-code atau kode nyata) yang seolah-olah sedang diketik di background hero. Gunakan syntax highlighting dengan warna-warna yang sesuai palet. Ini langsung menunjukkan identitas sebagai programmer tanpa harus membaca teks.

2. **Terminal-style introduction** — Bagian perkenalan diri bisa menggunakan estetika terminal/command line: `$ whoami → Novian Reza`, `$ cat skills.txt → JavaScript, Python, ...`. Ini memberikan personality yang kuat dan langsung menunjukkan bidang teknologi.

3. **Floating tech icons** — Icon-icon teknologi (HTML, CSS, JS, Python, Git, dll) yang melayang pelan di background atau di sekitar section tertentu. Menggunakan grayscale atau opacity rendah agar tidak mengganggu konten utama.

4. **Grid/dot pattern background** — Subtle dot grid atau line grid di background yang menyerupai graph paper atau circuit board. Memberikan nuansa teknis tanpa terlalu ramai.

5. **Code bracket decorations** — Gunakan `{ }`, `< />`, `//` sebagai elemen dekoratif di sekitar heading atau section divider. Menggantikan wave SVG dengan elemen yang lebih relevan dengan identitas developer.

6. **Git-style timeline untuk Experience** — Tampilkan pengalaman/journey dalam format yang menyerupai git log atau git branch visualization. Setiap milestone adalah sebuah "commit".

7. **Interactive tech stack visualization** — Skills ditampilkan sebagai node-node yang terhubung (network graph) atau sebagai card interaktif dengan level proficiency.

---

## 7. ANIMASI & INTERAKSI

### Animasi yang Sudah Ada

1. **CSS Loader** — Animasi 3 bar yang naik-turun saat loading page (menggunakan CSS keyframes `load1`)
2. **Card hover shadow** — Sedikit box-shadow muncul saat hover pada project card (dengan transition-delay 0.1s)

Hanya itu. Tidak ada animasi scroll, tidak ada transisi section, tidak ada hover effect lain.

### Rekomendasi Animasi & Interaksi

| # | Elemen                     | Interaksi                                                                                              | Tujuan                                                                 |
|---|----------------------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| 1 | **Scroll reveal sections** | Setiap section muncul dengan fade-in + slide-up saat user scroll ke posisinya                          | Membuat halaman terasa hidup dan memberikan ritme saat scrolling       |
| 2 | **Typing animation di hero** | Teks tagline/role diketik satu per satu seperti terminal, bisa berganti-ganti (Web Developer, Student, ...) | Menarik perhatian di hero, menunjukkan identitas secara dinamis        |
| 3 | **Floating tech icons**    | Icon teknologi melayang perlahan di background hero/about dengan parallax ringan saat scroll            | Memberikan identitas teknis dan kedalaman visual                       |
| 4 | **Magnetic button**        | Tombol CTA sedikit "tertarik" ke arah cursor saat cursor mendekat                                      | Meningkatkan interaktivitas dan membuat CTA lebih menarik untuk diklik |
| 5 | **Project card tilt**      | Card project sedikit miring mengikuti posisi cursor saat hover (3D tilt effect)                        | Membuat project cards terasa interaktif dan premium                    |
| 6 | **Cursor custom + spotlight** | Cursor berubah menjadi dot kecil dengan lingkaran glow yang mengikuti, menciptakan efek spotlight      | Memberikan kesan modern dan interaktif di seluruh halaman              |
| 7 | **Navbar scroll effect**   | Navbar berubah warna/opacity/blur saat user scroll ke bawah (glassmorphism)                            | Membedakan state navbar dan memberikan kesan depth                     |
| 8 | **Skill bar/progress animation** | Bar skill atau circle progress teranimasi (dari 0 ke nilai target) saat section masuk viewport         | Menunjukkan level keahlian secara visual dan engaging                  |
| 9 | **Smooth section transitions** | Parallax ringan pada background elements saat scroll, menggantikan wave SVG statis                    | Memberikan kedalaman visual dan membuat scrolling lebih menarik        |
| 10 | **Staggered card entrance** | Project cards muncul satu per satu dengan delay bertahap (staggered animation)                        | Mengarahkan perhatian user secara berurutan ke setiap project          |

---

## 8. RESPONSIVE

### Analisis Kondisi Saat Ini

Website menggunakan Bootstrap grid system sehingga layout dasar sudah responsive. Namun terdapat beberapa masalah:

### Masalah Responsive

| Masalah                             | Platform | Detail                                                                                     |
| ----------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Foto profil ukuran fixed 240px      | Mobile   | `width="240px"` hardcoded — pada layar kecil (<320px) bisa overflow atau terlalu besar     |
| SVG wave tidak optimal              | Mobile   | Wave SVG menggunakan viewBox 1440px, pada mobile bisa terlihat terlalu "rata"              |
| Inline style tidak responsive       | Mobile   | Banyak inline style yang tidak bisa di-override dengan media query                         |
| Font size heading                   | Mobile   | `display-4` class cukup besar, pada mobile kecil bisa memakan terlalu banyak ruang         |
| Card layout                         | Mobile   | Cards stack secara vertikal — 5 cards (3 placeholder) membuat scroll sangat panjang        |
| Loader positioning                  | Mobile   | Loader menggunakan `margin: 300px auto` — pada mobile kecil loader bisa terlalu rendah     |
| Navbar toggler                      | Mobile   | Berfungsi tapi tidak ada animasi smooth untuk open/close                                   |

### Rekomendasi Responsive

- Gunakan responsive image sizing (`max-width: 50vw` atau CSS clamp) untuk foto profil
- Pindahkan semua inline style ke CSS file agar bisa menggunakan media queries
- Gunakan CSS clamp() untuk typography yang fluid (`font-size: clamp(1.5rem, 4vw, 3rem)`)
- Pada mobile, batasi jumlah project yang ditampilkan atau gunakan horizontal scroll/swiper
- Pastikan spacing antar section konsisten di semua breakpoint
- Disable animasi berat (particles, parallax, tilt) pada mobile untuk performa
- Custom cursor harus di-disable di touch devices

---

## 9. PRIORITAS PERBAIKAN

| Prioritas  | Masalah                                                 | Dampak                                                         | Solusi yang Disarankan                                                     |
| ---------- | ------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Critical** | Hero tidak memiliki tagline, role, atau CTA           | Pengunjung tidak tahu siapa pemilik website dalam 5 detik      | Tambahkan tagline "Informatics Engineering Student & Web Developer" + CTA |
| **Critical** | Tidak ada Skills/Tech Stack section                   | Tidak ada bukti kemampuan teknis                               | Buat section skills dengan teknologi yang dikuasai                         |
| **Critical** | 3 placeholder "Coming Soon" di Projects               | Website terlihat belum selesai, merusak kredibilitas           | Hapus placeholder, tampilkan hanya project nyata                          |
| **Critical** | File `close.js` dan font `YujiSyuku` tidak ada (404)  | Error di console, font heading tidak termuat                   | Hapus referensi file yang hilang, gunakan Google Fonts                    |
| **High**     | Foto profil selfie kasual                              | Mengurangi kesan profesional secara signifikan                 | Ganti dengan foto yang lebih profesional                                  |
| **High**     | About section terlalu minim dan outdated               | Tidak memberikan informasi berguna tentang pemilik             | Tulis ulang dengan info pendidikan, minat, dan tujuan                     |
| **High**     | Social media menggunakan confirm() dialog              | UX yang sangat buruk dan tidak standar                         | Gunakan `<a href="..." target="_blank">` biasa                            |
| **High**     | Bootstrap di-load dua kali (CDN + lokal)               | Performance buruk, download ganda ~200KB                       | Pilih salah satu: CDN atau lokal                                          |
| **High**     | Tidak ada identitas visual/branding                    | Website tidak memorable dan tidak profesional                  | Buat visual identity: logo, color palette, typography                     |
| **Medium**   | Campuran bahasa Indonesia-Inggris                      | Tidak konsisten, kurang profesional                            | Pilih satu bahasa (disarankan Inggris) dan konsistenkan                   |
| **Medium**   | Inline style di mana-mana                              | Sulit di-maintain, tidak bisa responsive, tidak DRY            | Pindahkan semua style ke CSS file                                         |
| **Medium**   | Wave SVG sebagai section divider                       | Terasa repetitif dan membuat layout terasa disjointed          | Ganti dengan divider yang lebih modern atau hilangkan                     |
| **Medium**   | Tidak ada meta description, favicon, OG tags           | SEO buruk, tidak ada preview saat di-share                     | Tambahkan meta tags dan favicon                                           |

---

## 10. ARAH REDESIGN

### Design Style

**Modern Tech Minimalist**

Alasan: Berdasarkan audit, website perlu menunjukkan identitas Teknik Informatika secara kuat, tapi tetap clean dan tidak overwhelming. Style "Modern Tech Minimalist" menggabungkan estetika developer (code elements, monospace accents, tech patterns) dengan layout yang bersih dan banyak whitespace. Ini akan membedakan portfolio dari template generic Bootstrap, sambil tetap terlihat profesional dan mudah dibaca.

### Color Direction

- **Background utama:** Dark mode (sangat gelap, hampir hitam — `#0a0a0f` atau `#0d1117` seperti GitHub dark)
- **Teks utama:** Putih/off-white (`#e6edf3`)
- **Aksen primer:** Cyan/electric blue (`#58a6ff` atau `#00d4ff`) — warna yang identik dengan tech/code
- **Aksen sekunder:** Soft purple atau green (`#7c3aed` atau `#3fb950`) untuk highlight
- **Gradien:** Subtle gradient dari dark blue ke dark purple di background tertentu
- **Card/Surface:** Slightly lighter dark (`#161b22`) dengan border halus

Dark mode sangat cocok untuk portfolio developer karena terasa familiar (seperti code editor) dan membuat elemen berwarna lebih menonjol.

### Typography

- **Heading:** Sans-serif modern yang tegas — **Inter**, **Outfit**, atau **Space Grotesk**. Memberikan kesan clean dan teknologi.
- **Body text:** Sans-serif yang readable — **Inter** atau **DM Sans**
- **Code/accent:** Monospace — **JetBrains Mono** atau **Fira Code**. Digunakan untuk tagline, label, atau elemen dekoratif yang ingin terasa "technical"
- **Sizing:** Fluid typography menggunakan `clamp()` — heading besar dan bold, body comfortable untuk dibaca
- **Karakter:** Clean, geometric, modern. Hindari serif atau decorative font.

### Layout

- **Full-width sections** dengan max-width container untuk konten
- **Generous whitespace** — biarkan konten "bernafas", jangan memadatkan
- **Asymmetric layouts** di beberapa section (misalnya About: teks di kiri, visual di kanan) untuk menghindari monoton center-aligned
- **Grid-based** dengan alignment yang konsisten
- **Section divider:** Gunakan spacing besar atau subtle line/gradient — hapus wave SVG
- **Sticky navbar** dengan glassmorphism effect
- **Single column focus** untuk mobile, multi-column untuk desktop

### Hero

**Konsep: "Code Introduction"**

- Layout split: kiri berisi teks (nama, tagline typing animation, CTA buttons), kanan berisi elemen visual (foto profesional dengan frame/border modern, atau animated code editor illustration)
- Background: dark dengan subtle floating tech icons atau particle network
- Tagline menggunakan typing animation: `I'm a Web Developer` → `I'm an Informatics Student` → `I'm a Tech Enthusiast`
- Dua CTA button: "View Projects" (primary, aksen warna) dan "Contact Me" (secondary, outline)
- Subtle scroll indicator di bawah (animated chevron)
- Nama ditampilkan besar dan bold, dengan aksen monospace pada role/tagline

### Project Section

- **Tampilkan hanya project nyata** — lebih baik 2 project bagus daripada 5 dengan placeholder
- **Featured project:** 1 project utama ditampilkan besar (full-width atau 2/3 width) dengan screenshot, deskripsi, tech stack badges, dan link (live demo + GitHub)
- **Project cards:** Sisa project dalam grid card yang lebih kecil
- **Setiap card harus memiliki:** screenshot/thumbnail, judul, deskripsi singkat (1-2 kalimat), tech stack icons/badges, link demo + repo
- **Hover effect:** Card tilt 3D ringan, overlay dengan link buttons yang muncul
- **Filter/category** (opsional): jika project sudah banyak, tambahkan filter berdasarkan teknologi

### Technical Identity

- **Monospace font** digunakan sebagai aksen di tagline, label section, dan elemen dekoratif — memberikan nuansa "code" tanpa harus menampilkan kode nyata
- **Code bracket decorations:** `{ }` atau `< />` di sekitar heading atau sebagai section ornament
- **Tech stack icons** ditampilkan dengan style konsisten (monochrome atau branded colors)
- **Terminal-inspired elements:** section header bisa menggunakan format `// About` atau `## Skills` seperti comment/markdown
- **Dot grid atau circuit pattern** sebagai background texture yang sangat subtle
- **Git-style timeline** untuk experience/journey
- Semua elemen teknis ini digunakan sebagai **aksen**, bukan elemen utama — konten tetap yang paling penting

### Animation

**Karakter: Smooth, Subtle, Purposeful**

- Semua animasi menggunakan easing yang smooth (ease-out atau custom cubic-bezier)
- Duration antara 300ms-800ms — cukup cepat agar tidak membuat user menunggu
- Scroll-triggered animations dengan IntersectionObserver (bukan library berat)
- Staggered entrance untuk list/grid items
- Parallax ringan (hanya 1-2 layer) pada background elements
- Hindari animasi yang blocking (user harus menunggu sebelum bisa berinteraksi)
- Reduce motion: respect `prefers-reduced-motion` media query
- Mobile: disable parallax dan custom cursor, simplify entrance animations

### Cursor Interaction

- **Custom cursor:** Dot kecil (8px) dengan circle follower (30-40px) yang mengikuti dengan slight delay (lerp)
- **Hover states:** Circle membesar saat hover pada interactive elements (links, buttons, cards)
- **Magnetic effect:** Buttons sedikit tertarik ke arah cursor saat cursor mendekat (radius 100px)
- **Spotlight/glow:** Subtle radial gradient yang mengikuti cursor di dark background, menciptakan efek "flashlight"
- **Blend mode:** Cursor circle menggunakan `mix-blend-mode: difference` untuk selalu terlihat di atas konten apapun
- **Mobile:** Semua cursor interaction di-disable — touch devices tidak memiliki cursor. Fokus pada tap feedback dan scroll animations.

### Mobile

- **Layout:** Full single column, generous vertical spacing
- **Hero:** Stack vertikal — nama/tagline di atas, foto di bawah (atau foto sebagai background dengan overlay)
- **Navigation:** Hamburger menu dengan full-screen overlay (bukan dropdown kecil Bootstrap default)
- **Cards:** Full width, swipeable horizontal carousel jika ada banyak project
- **Typography:** Slightly smaller tapi tetap readable (minimum 16px body)
- **Animations:** Hanya scroll reveal (fade-in + slide-up), disable parallax, custom cursor, dan tilt effects
- **Touch feedback:** Tap states yang jelas pada semua interactive elements
- **Performance:** Lazy load images, reduce animation complexity

---

## 11. STRUKTUR LANDING PAGE YANG DISARANKAN

```
Navbar (sticky, glassmorphism on scroll)
↓
Hero (nama, tagline typing animation, CTA, foto/visual, floating tech icons)
↓
About (deskripsi diri, pendidikan, foto, personality)
↓
Skills / Tech Stack (bahasa, framework, tools — dengan icons dan level)
↓
Featured Projects (project nyata dengan detail, tech stack, links)
↓
Experience / Journey (pendidikan, organisasi, pengalaman — git-style timeline)
↓
Contact CTA (headline persuasif, form + info kontak + sosial media)
↓
Footer (copyright, sosial media links, quick links)
```

**Catatan:**
- Section "Tech Identity" tidak perlu menjadi section sendiri — unsur teknis dimasukkan ke dalam visual seluruh halaman (background, typography, decorations)
- Skills dan Projects adalah section terpenting — berikan porsi visual terbesar
- Experience/Journey bisa di-skip jika belum ada konten cukup, tapi sebaiknya ada untuk menunjukkan growth

---

## 12. FINAL DESIGN BRIEF

### Current Problem

Website saat ini adalah landing page yang sangat basic, dibangun dengan Bootstrap default tanpa kustomisasi visual yang berarti. Hero hanya menampilkan foto selfie dan nama tanpa tagline atau CTA. About section hanya berisi 2 kalimat yang sudah outdated. Projects section didominasi placeholder "Coming Soon". Tidak ada section Skills, Experience, atau identitas teknis apapun. Website tidak menunjukkan bahwa pemiliknya adalah mahasiswa Teknik Informatika atau developer. Secara teknis, ada file yang hilang (font, JS), Bootstrap di-load dua kali, dan banyak inline style. Keseluruhan website terlihat seperti latihan pertama Bootstrap, bukan portfolio profesional.

### Main Design Goal

Membuat portfolio yang **langsung menunjukkan identitas sebagai mahasiswa Teknik Informatika / developer** dalam 5 detik pertama, dengan desain modern yang profesional, memorable, dan interaktif — sehingga meninggalkan kesan positif bagi recruiter, dosen, atau sesama developer yang mengunjungi.

### Desired Impression

"Website ini milik seorang developer muda yang serius, punya taste desain yang bagus, dan terus berkembang. Orang ini mengerti teknologi dan memperhatikan detail."

### Visual Direction

**Modern Tech Minimalist** — Dark mode dengan aksen cyan/electric blue. Typography clean (Inter/Space Grotesk untuk heading, JetBrains Mono untuk aksen code). Layout bersih dengan generous whitespace. Elemen dekoratif minimal tapi impactful. Terasa seperti code editor yang dirancang dengan taste tinggi.

### Informatics Identity

Unsur Teknik Informatika dimasukkan melalui: (1) monospace font sebagai aksen di tagline dan labels, (2) code bracket decorations `{ }` `< />` pada heading, (3) tech stack icons yang prominent, (4) terminal-style elements di hero/about, (5) git-style timeline untuk experience, (6) dot grid background pattern, (7) floating tech icons di hero. Semua elemen ini berfungsi sebagai **identitas visual**, bukan gimmick — subtle tapi konsisten di seluruh halaman.

### Animation Direction

Smooth dan purposeful. Scroll-triggered reveal (fade + slide) untuk setiap section. Typing animation di hero tagline. Staggered entrance untuk cards dan list. Parallax ringan pada background elements. Card tilt 3D pada hover. Magnetic effect pada CTA buttons. Semua animasi menggunakan easing yang smooth (300-800ms). Respect `prefers-reduced-motion`. Simplify untuk mobile.

### Cursor Interaction

Custom cursor dengan dot + circle follower (mix-blend-mode: difference). Circle membesar saat hover pada interactive elements. Magnetic pull pada buttons. Subtle spotlight/glow yang mengikuti cursor di background gelap. Semua di-disable pada touch devices.

### Recommended Structure

```
Navbar (sticky, glassmorphism)
→ Hero (nama, typing tagline, dual CTA, visual, floating icons)
→ About (bio, pendidikan, personality)
→ Skills / Tech Stack (icons + level)
→ Featured Projects (detail + tech + links)
→ Experience / Journey (git-style timeline)
→ Contact (form + info + sosial media)
→ Footer
```

### Important Things To Avoid

- Jangan gunakan template Bootstrap default tanpa kustomisasi
- Jangan tampilkan placeholder "Coming Soon" — lebih baik tampilkan sedikit project yang berkualitas
- Jangan menggunakan wave SVG sebagai section divider — terasa outdated
- Jangan mencampur bahasa Indonesia dan Inggris — pilih satu dan konsistenkan
- Jangan menggunakan confirm() dialog untuk link navigasi
- Jangan menggunakan foto selfie kasual sebagai foto profil
- Jangan membuat website terlalu ramai dengan animasi — subtle is better
- Jangan menggunakan inline style — semua styling harus di CSS file
- Jangan load library yang sama dua kali (Bootstrap CDN + lokal)
- Jangan buat website seperti dashboard admin — unsur tech harus menjadi identitas, bukan UI pattern
- Jangan abaikan mobile experience — semua animasi berat harus di-disable pada mobile
- Jangan menggunakan font yang filenya tidak tersedia
