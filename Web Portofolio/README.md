# Web Portofolio

Web portofolio modern yang dibangun dengan React dan Vite.

## 🚀 Fitur

- **Responsive Design** - Tampil sempurna di semua perangkat
- **Section About** - Menampilkan informasi diri dan foto profil
- **Tech Stack** - Showcase teknologi yang dikuasai
- **Projects Showcase** - Gallery projek yang pernah dikerjakan
- **Modern UI/UX** - Desain yang menarik dan user-friendly
- **Smooth Animations** - Animasi yang halus dan menarik

## 📦 Teknologi yang Digunakan

- React 19
- Vite 7
- CSS3 (Custom styling)
- JavaScript ES6+

## 🛠️ Instalasi dan Menjalankan Project

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (versi 14 atau lebih baru)
- npm atau yarn

### Langkah-langkah

1. Clone atau download repository ini

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:5173
```

### Build untuk Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Struktur Project

```
web-portofolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── TechStack.jsx
│   │   ├── TechStack.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## ✏️ Kustomisasi

### Mengubah Informasi Personal

Edit file `src/components/About.jsx`:
- Ganti placeholder foto dengan foto Anda sendiri
- Update informasi nama, email, dan lokasi

### Menambah/Mengubah Tech Stack

Edit array `techStacks` di `src/components/TechStack.jsx`:
```javascript
const techStacks = [
  { name: 'Nama Tech', icon: '🎨', color: '#HexColor' },
  // tambahkan tech stack lainnya
]
```

### Menambah/Mengubah Projects

Edit array `projects` di `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Nama Project',
    description: 'Deskripsi project',
    tech: ['Tech1', 'Tech2'],
    image: 'URL gambar',
    link: 'URL project'
  },
  // tambahkan project lainnya
]
```

### Mengubah Warna Theme

Edit CSS variables di `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ubah warna sesuai keinginan */
}
```

## 📱 Sections

1. **Home/Hero** - Landing section dengan CTA buttons
2. **About** - Informasi diri dan foto profil
3. **Tech Stack** - Teknologi yang dikuasai
4. **Projects** - Portfolio projek yang pernah dikerjakan
5. **Footer** - Informasi kontak dan social media

## 🎨 Customization Tips

- Ganti foto placeholder di section About dengan foto asli Anda
- Update link social media di Footer
- Tambahkan atau kurangi tech stack sesuai keahlian
- Upload screenshot projek Anda untuk mengganti placeholder images
- Sesuaikan warna theme dengan preferensi Anda

## 📝 Catatan

- Gambar menggunakan placeholder dari `via.placeholder.com`
- Ganti dengan gambar asli untuk hasil yang lebih baik
- Pastikan untuk mengupdate link dan informasi kontak

## 📄 License

ISC

---

Dibuat dengan ❤️ menggunakan React dan Vite
