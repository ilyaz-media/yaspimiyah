# Components Documentation

## Header Component
**File:** `src/components/Header.jsx`

Komponen navigasi utama aplikasi.

### Features:
- Desktop navigation menu
- Mobile hamburger menu dengan toggle state
- Logo dan yayasan name
- Donate button
- Responsive design

### Props: None

### State:
- `isMenuOpen` - boolean untuk mobile menu visibility

### Usage:
```jsx
import Header from './components/Header'

<Header />
```

---

## Footer Component
**File:** `src/components/Footer.jsx`

Footer dengan informasi kontak dan links.

### Features:
- 4-column grid layout
- Logo dengan social media links
- Navigation links
- Unit Pendidikan links
- Contact information
- Bottom copyright section

### Props: None

### Usage:
```jsx
import Footer from './components/Footer'

<Footer />
```

---

## Section Components

### HeroTentang
**File:** `src/components/sections/HeroTentang.jsx`

Hero section halaman Tentang dengan background blur effects.

**Content:**
- Breadcrumb navigation
- Main heading "Mengenal YASPIMIYAH"
- Description
- CTA buttons (Pelajari Lebih Lanjut, Hubungi Kami)
- 3 statistics cards
- Right-side image dengan floating card

**Responsive:** Yes (2 columns → 1 column on mobile)

---

### AboutYayasan
**File:** `src/components/sections/AboutYayasan.jsx`

Section tentang lembaga dengan image dan features.

**Content:**
- Section heading
- Left: Image dengan "Sejak 2000" badge
- Right: Text, features, button
- Bottom: 4 statistics cards

**Features:**
- Feature checklist (4 items)
- Statistics grid

---

### VisiMisi
**File:** `src/components/sections/VisiMisi.jsx`

Visi dan Misi display dengan founder information.

**Content:**
- Section heading
- Left (3/5 cols):
  - Visi card dengan icon
  - Misi list dengan 4 items
- Right (2/5 cols):
  - Founder image
  - Founder info card dengan quote

**Features:**
- Icon usage (lucide-react)
- Custom grid layout

---

### GuruSection
**File:** `src/components/sections/GuruSection.jsx`

Grid layout untuk menampilkan guru-guru.

**Features:**
- 4 teacher cards (responsive: 4 cols → 2 cols → 1 col)
- Image hover scale effect
- Name dan position
- "Lihat Semua Guru" button

**Data Structure:**
```jsx
{
  name: string,
  position: string,
  image: string (path to image)
}
```

---

### FasilitasSection
**File:** `src/components/sections/FasilitasSection.jsx`

6 fasilitas dalam grid dengan hover effects.

**Content:**
- Section heading
- 6 facility cards:
  - Ruang Kelas Nyaman
  - Laboratorium Komputer
  - Perpustakaan
  - Musholla
  - Lapangan Olahraga
  - Area Parkir Luas

**Features:**
- Image hover scale
- Responsive layout (3 cols → 2 cols → 1 col)

---

### EMISSection
**File:** `src/components/sections/EMISSection.jsx`

Data EMIS dengan animated counters.

**Features:**
- Animated counter animation menggunakan useEffect
- Header dengan gradient background
- 2-column layout:
  - Left: Lembaga information
  - Right: Statistik dengan 6 counters
- Footer dengan download link

**Data:**
```
157 Total Santri
11 Total Ustadz
80 Santri Putra
77 Santri Putri
6 Ruang Belajar Baik
5 Ruang Lain Rusak
```

**Animation:**
- Counters increment dari 0 ke target value
- Duration: ~1.5 detik
- Smooth animation dengan setInterval

---

### NilaiSection
**File:** `src/components/sections/NilaiSection.jsx`

5 Nilai-nilai yayasan dalam card layout.

**Content:**
1. Iman & Taqwa
2. Akhlak Mulia
3. Ilmu Pengetahuan
4. Kepedulian
5. Profesional

**Features:**
- Icon cards dengan gradient background
- Hover scale dan rotate effects
- Responsive grid (3 cols → 2 cols → 1 col)

---

### CTASection  
**File:** `src/components/sections/CTASection.jsx`

Call-to-Action section untuk pendaftaran.

**Content:**
- Left:
  - Section label dengan heart icon
  - Main heading
  - Description
- Right:
  - Registration info card
  - 4 feature checklist
  - 2 buttons (Daftar Sekarang, Hubungi Kami)

**Features:**
- Gradient background
- Glassmorphism effect
- Responsive layout

---

## Utilities & Hooks

### Custom Hooks (jika ada):
- None yet

### Custom Utils:
- None yet

## Styling

### Tailwind Configuration
**File:** `tailwind.config.js`

Custom theme extensions:
```javascript
colors: {
  primary: 'oklch(59.6% 0.145 163.225)',
  secondary: '#D4A017',
  dark: '#0F172A',
  light: '#F8FAFC'
},
fontFamily: {
  poppins: ['Poppins', 'sans-serif']
},
boxShadow: {
  premium: '0 15px 35px rgba(0,0,0,.12)'
},
borderRadius: {
  xl2: '20px'
}
```

### Global Styles
**File:** `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Poppins', sans-serif;
}
```

---

## Icons

### Font Awesome (via CDN)
Used in:
- Header/Footer navigation icons
- Social media icons
- Checkmarks & bullets

### Lucide React (npm package)
Used in:
- Header: Menu, X icons
- Sections: Target, BookOpen, Heart, CheckCircle2, etc.
- Footer: MapPin, Phone, MessageCircle, Clock

### Usage:
```jsx
import { Heart, Menu, CheckCircle2 } from 'lucide-react'

<Heart size={24} className="text-primary" />
```

---

## Component Usage Examples

### Basic Import & Use
```jsx
import HeroTentang from './components/sections/HeroTentang'

export default function App() {
  return (
    <div>
      <HeroTentang />
    </div>
  )
}
```

### With Props (future use)
```jsx
// If component accepts props
<StatisticCard number="25+" label="Tahun Berdiri" />
```

### With State
```jsx
const [counter, setCounter] = useState(0)

// Use in render
<div>{counter}</div>
```

---

## Performance Tips

1. **Image Optimization**
   - Use WebP format jika possible
   - Compress images dengan TinyPNG
   - Use `object-cover` untuk proper aspect ratio

2. **CSS Optimization**
   - Tailwind CSS auto-purges unused styles
   - PurgeCSS adalah default di production

3. **Component Optimization**
   - Use React.memo() jika component besar dan tidak perlu re-render
   - Use useCallback() untuk event handlers

4. **Bundle Size**
   - Lucide React: ~50KB
   - Tailwind CSS: ~10KB (purged)
   - React: ~40KB

---

## Future Enhancements

- [ ] Add React Router untuk multi-page
- [ ] Add Context API untuk state management
- [ ] Add forms untuk registrasi
- [ ] Add API integration untuk data dinamis
- [ ] Add SEO optimization (React Helmet)
- [ ] Add loading states & error boundaries
- [ ] Add animations dengan Framer Motion
- [ ] Add dark mode support

---

## Testing

Testing setup belum ada. Untuk testing:
- Install: `npm install --save-dev vitest @testing-library/react`
- Create test files: `*.test.jsx`
- Run: `npm run test`

---

## Deployment Checklist

- [ ] npm run build (check for errors)
- [ ] Test di preview: npm run preview
- [ ] Check responsive design
- [ ] Test all links
- [ ] Optimize images
- [ ] Set environment variables
- [ ] Deploy ke hosting

---

Generated: 2026-07-14
