# Kreavoks Website

**Kreavoks** adalah platform digital yang menyediakan layanan pengembangan website, pelatihan keterampilan digital, dan desain kit profesional. Proyek ini merupakan implementasi penuh dari website Kreavoks menggunakan **Laravel, Inertia.js, dan React**.

## 📌 Tentang Kreavoks

Kreavoks bertujuan untuk membantu bisnis, startup, dan profesional dalam membangun citra digital yang kuat melalui layanan berikut:

- **Pengembangan Website** – Pembuatan website company profile yang responsif, cepat, dan dioptimalkan untuk SEO.
- **Pelatihan Digital** – Workshop dan pelatihan keterampilan digital untuk individu maupun tim bisnis.
- **Desain Kit** – Penyediaan aset digital seperti template presentasi dan elemen branding.

## ⚙️ Teknologi yang Digunakan

Website ini dikembangkan menggunakan teknologi modern berikut:

- **Laravel** – Backend framework untuk manajemen controller data dan routing.
- **Inertia.js** – Penghubung antara Laravel dan React untuk membangun aplikasi SPA.
- **React.js** – Library frontend untuk antarmuka interaktif.
- **Tailwind CSS** – Framework styling berbasis utility-first.
- **Vite** – Bundler modern untuk optimalisasi performa development.

## 📂 Struktur Proyek

├── app/            # Backend logic Laravel<br>
├── database/       # Migrasi database & seeders<br>
├── public/         # Aset publik<br>
├── resources/<br>
│ ├── css/          # Global css<br>
│ ├── js/           # React components & pages (Inertia)<br>
│ └── views/        # Blade templates<br>
├── routes/         # Definisi routing Laravel<br>
└── vite.config.js  # Konfigurasi Vite<br>


## 🚀 Instalasi & Penggunaan

1. **Clone repositori**
   ```bash
   git clone https://github.com/adlifarizi/kreavoks.git
   cd kreavoks
   ```

2. **Install dependensi**
    ```bash
    composer install
    npm install
    ```

3. **Konfigurasi file `.env`**
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. **Jalankan migrasi database**
    ```bash
    php artisan migrate --seed
    ```

4. **Jalankan Aplikasi**
    ```bash
    npm run dev
    php artisan serve
    ```
Aplikasi akan berjalan di `http://localhost:8000`.

## 📩 Kontak

Untuk informasi lebih lanjut, silakan kunjungi atau hubungi:
- **🌐 Website**: kreavoks.my.id
- **📸 Instagram**: @kreavoks
- **💼 LinkedIn**: Kreavoks

© 2025 Kreavoks. All rights reserved.