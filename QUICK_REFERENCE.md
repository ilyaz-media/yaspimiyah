# Developer Quick Reference

## 🚀 Start Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── App.jsx                      # Main app
├── main.jsx                     # Entry point
├── index.css                    # Global styles
├── components/
│   ├── Header.jsx              # Navigation
│   ├── Footer.jsx              # Footer
│   └── sections/               # 8 section components
├── pages/                       # (for routing)
└── layouts/                     # (for shared layouts)
```

## 🎨 Tailwind Colors

```javascript
text-primary      // oklch(59.6% 0.145 163.225)
text-secondary    // #D4A017
bg-primary
bg-secondary
```

## 🔥 Common Tasks

### Add New Section
1. Create `src/components/sections/NewSection.jsx`
2. Import in `App.jsx`
3. Add to render

### Change Text
Edit relevant component file directly

### Change Image
Replace file in `Assets/` folder

### Change Colors
Edit `tailwind.config.js`

### Add Icons
Use lucide-react or Font Awesome

## 📦 Main Dependencies

- **react** - UI library
- **vite** - Build tool
- **tailwindcss** - Styling
- **lucide-react** - Icons

## 🎯 Component Overview

| Component | Purpose |
|-----------|---------|
| Header | Navigation & menu |
| Footer | Site footer |
| HeroTentang | Hero banner |
| AboutYayasan | About section |
| VisiMisi | Vision & mission |
| GuruSection | Teachers grid |
| FasilitasSection | Facilities grid |
| EMISSection | EMIS data with counters |
| NilaiSection | Values cards |
| CTASection | Call-to-action |

## 💻 Edit Component Example

```jsx
// src/components/sections/HeroTentang.jsx
export default function HeroTentang() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1>Edit me!</h1>
      </div>
    </section>
  )
}
```

## 🎨 Tailwind Classes

### Spacing
- p-6, m-4, gap-8, mt-10, etc.

### Layout
- flex, grid, gap-*, items-center, justify-between

### Sizing
- w-full, h-[500px], max-w-7xl

### Colors
- text-primary, bg-white, border-gray-200

### Effects
- rounded-3xl, shadow-lg, blur-3xl, opacity-50

### Responsive
- sm:, md:, lg:, xl: prefixes

### Hover/Interactive
- hover:scale-105, group-hover:scale-110, transition

## 🔍 Debugging

```javascript
// Console log
console.log('debug:', variable)

// React DevTools
// Install browser extension

// Tailwind DevTools
// Check if class is being applied
```

## 📝 Tips

1. **Hot reload** - changes auto-save
2. **Mobile first** - design for mobile first
3. **Components** - keep them small & reusable
4. **Images** - compress before adding
5. **Performance** - check bundle size

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Port taken | `npm run dev -- --port 3000` |
| Styling lost | Clear cache & reinstall |
| Build fails | Check imports & typos |
| Images missing | Verify path starts with / |

## 📚 Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Lucide: https://lucide.dev

## ⚡ Performance

- Production build: `npm run build`
- Bundle size: ~40KB
- Tree-shaking: Automatic
- CSS Purge: Automatic

## 🎯 Common Patterns

### Conditional Rendering
```jsx
{condition && <Component />}
```

### Loops
```jsx
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
```

### Styling
```jsx
className="flex gap-4 p-6 rounded-3xl hover:shadow-lg transition"
```

### Icons
```jsx
import { Heart, Menu } from 'lucide-react'
<Heart className="text-primary" size={24} />
```

## 🔄 Deployment

```bash
npm run build
# Output in dist/ folder

# Deploy to Vercel, Netlify, or host
```

---

**Keep this handy!** 🚀
