# YASPIMIYAH Website - React Version

Selamat datang! Anda telah berhasil mengkonversi halaman `tentang.html` menjadi React application. Berikut adalah dokumentasi lengkap untuk project ini.

## 📁 Struktur Direktori

```
website-yaspimiyah/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Komponen Header/Navigation
│   │   ├── Footer.jsx              # Komponen Footer
│   │   └── sections/
│   │       ├── HeroTentang.jsx      # Hero section - Tentang
│   │       ├── AboutYayasan.jsx     # Tentang Yayasan section
│   │       ├── VisiMisi.jsx         # Visi & Misi section
│   │       ├── GuruSection.jsx      # Guru kami section
│   │       ├── FasilitasSection.jsx # Fasilitas section
│   │       ├── EMISSection.jsx      # Data EMIS section
│   │       ├── NilaiSection.jsx     # Nilai-nilai section
│   │       └── CTASection.jsx       # Call to Action section
│   ├── App.jsx                      # Main App component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles (Tailwind)
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
└── Assets/                          # Static assets (sudah ada)
```

## 🚀 Cara Menjalankan Project

### 1. Install Dependencies

```bash
npm install
```

Jika ada masalah dengan peer dependencies, gunakan:
```bash
npm install --legacy-peer-deps
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### 3. Build untuk Production

```bash
npm run build
```

Build output akan tersimpan di folder `dist/`

### 4. Preview Production Build

```bash
npm run preview
```

## 🎨 Teknologi yang Digunakan

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - CSS framework
- **Lucide React** - Icon library
- **React Router** - Routing (optional untuk future implementation)

## 📦 Komponen-Komponen

### Header Component
- Navigation menu untuk desktop dan mobile
- Logo yayasan
- Donate button
- Mobile menu toggle

### Footer Component
- Logo dan informasi yayasan
- Social media links
- Navigation links
- Contact information

### Sections

#### HeroTentang
- Hero banner dengan background blur
- Breadcrumb navigation
- Heading dan description
- Call-to-action buttons
- Statistics cards

#### AboutYayasan
- Tentang Yayasan section
- Image dan text layout
- Feature list
- Statistics grid

#### VisiMisi
- Visi dan Misi display
- Icon-based design
- Founder image dengan quote card
- Decorative elements

#### GuruSection
- Grid layout untuk guru-guru
- Teacher cards dengan image hover effect
- "Lihat Semua Guru" button

#### FasilitasSection
- Fasilitas cards grid
- Image hover effects
- Responsive layout

#### EMISSection
- Data EMIS dengan animated counters
- Two-column layout untuk info dan statistik
- Download dokumen link

#### NilaiSection
- 5 nilai-nilai yayasan
- Icon-based cards
- Responsive grid

#### CTASection
- Call-to-action section
- Registration information
- Features checklist
- Primary & secondary buttons

## 🎯 Fitur-Fitur

✅ Fully Responsive Design
✅ Mobile-first approach
✅ Tailwind CSS styling
✅ Animated counters (EMIS section)
✅ Smooth transitions dan hover effects
✅ Font Awesome icons integration
✅ Modern UI dengan glass-morphism effects

## 🔧 Kustomisasi

### Mengubah Warna Primary

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: 'oklch(59.6% 0.145 163.225)',
  // Ganti dengan warna yang diinginkan
}
```

### Menambah Komponen Baru

1. Buat file di `src/components/`
2. Export component sebagai default
3. Import di `App.jsx`
4. Gunakan di JSX

### Mengubah Assets

Ganti file di folder `Assets/` dengan aset yang baru. Pastikan path di komponen sudah benar (gunakan `/Assets/...`).

## 📱 Responsive Breakpoints

Project ini menggunakan Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚨 Troubleshooting

### Vite port sudah terpakai
```bash
npm run dev -- --port 3000
```

### Build error
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Styling tidak muncul
Pastikan Tailwind CSS sudah di-import di `src/index.css`

## 📝 Environment Variables (optional)

Buat file `.env` di root directory:
```
VITE_API_URL=http://localhost:3001
```

Akses di component:
```javascript
import.meta.env.VITE_API_URL
```

## 🎓 Pembelajaran Lebih Lanjut

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📞 Kontak & Support

Jika ada pertanyaan atau issues, silakan hubungi tim development YASPIMIYAH.

---

**Dibuat dengan ❤️ untuk YASPIMIYAH**
