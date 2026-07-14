# 🚀 Quick Start Guide - YASPIMIYAH React

## Prerequisites
- Node.js 16+ (download dari https://nodejs.org)
- npm atau yarn

## Installation & Setup

### Step 1: Install Dependencies
```bash
cd c:\vibe-coding\website-yaspimiyah
npm install
```

Jika ada error, coba:
```bash
npm install --legacy-peer-deps
```

### Step 2: Start Development Server
```bash
npm run dev
```

Output akan menunjukkan:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

Buka browser dan kunjungi `http://localhost:5173`

### Step 3: Development

Edit file di `src/` dan perubahan akan auto-reload di browser.

## Project Structure

```
src/
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   ├── Header.jsx            # Navigation
│   ├── Footer.jsx            # Footer
│   └── sections/
│       ├── HeroTentang.jsx
│       ├── AboutYayasan.jsx
│       ├── VisiMisi.jsx
│       ├── GuruSection.jsx
│       ├── FasilitasSection.jsx
│       ├── EMISSection.jsx
│       ├── NilaiSection.jsx
│       └── CTASection.jsx
├── pages/                     # (untuk future routes)
└── layouts/                   # (untuk shared layouts)
```

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Editing Components

### Mengubah Heading
Buka `src/components/sections/HeroTentang.jsx`:
```jsx
<h1 className="mt-8 text-5xl font-black">
  Mengenal <span className="block text-primary">YASPIMIYAH</span>
</h1>
```

### Mengubah Konten
Cari komponen yang relevan dan edit text-nya langsung.

### Mengubah Gambar
Ganti path di image tags:
```jsx
<img src="/Assets/2.png" alt="Description" />
```

Pastikan file ada di folder `Assets/`

## Styling dengan Tailwind

Semua styling menggunakan Tailwind CSS classes.

### Custom Colors (sudah tersedia):
```
text-primary      // oklch(59.6% 0.145 163.225)
text-secondary    // #D4A017
bg-primary
bg-secondary
```

### Common Classes:
```
p-6              // padding
gap-8            // gap
rounded-3xl      // border-radius
shadow-lg        // shadow
hover:scale-105  // hover effect
```

[Lihat Tailwind Docs](https://tailwindcss.com/docs)

## Adding New Content

### Tambah Section Baru:

1. Buat file `src/components/sections/NewSection.jsx`:
```jsx
export default function NewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2>Your Title Here</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

2. Import di `src/App.jsx`:
```jsx
import NewSection from './components/sections/NewSection'

function App() {
  return (
    <div>
      {/* ... existing sections ... */}
      <NewSection />
    </div>
  )
}
```

## Deployment

### Build untuk Production:
```bash
npm run build
```

Output akan di folder `dist/`

### Deploy ke Vercel (Recommended):
1. Push ke GitHub
2. Kunjungi https://vercel.com
3. Connect repository
4. Vercel akan auto-deploy

### Deploy Lainnya:
- Netlify
- GitHub Pages
- Self-hosted server

## Troubleshooting

### Port 5173 sudah terpakai?
```bash
npm run dev -- --port 3000
```

### Styling tidak muncul?
- Clear cache: `npm cache clean --force`
- Hapus `node_modules` dan install ulang
- Pastikan `src/index.css` exist

### Error saat npm install?
```bash
npm install --legacy-peer-deps
```

## Learn More

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Need help?** Cek CONVERSION_SUMMARY.md atau README_REACT.md
