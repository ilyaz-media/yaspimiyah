# 📋 ACTION ITEMS - NEXT STEPS

## 🎯 Priority 1: URGENT (Do First)

### 1️⃣ Add Facility Images
**Location:** `Assets/fasilitas/`

Create/add these 6 images:
- [ ] `kelas.jpg` - Classroom/learning space
- [ ] `lab.jpg` - Computer lab
- [ ] `perpus.jpg` - Library
- [ ] `musholla.jpg` - Prayer room/mosque
- [ ] `lapangan.jpg` - Sports field
- [ ] `parkir.jpg` - Parking area

**How:** Save images to `Assets/fasilitas/` folder with exact filenames

---

### 2️⃣ Update Social Media Links in Footer
**File:** `src/components/Footer.jsx` (lines 28-47)

Find and replace:
```javascript
// FIND:
href="https://facebook.com"
// REPLACE WITH:
href="https://www.facebook.com/YOUR_PAGE" (or href="https://facebook.com/your-page-name")

// Same for:
href="https://instagram.com"  → href="https://instagram.com/your_username"
href="https://youtube.com"    → href="https://www.youtube.com/@YourChannel"
href="https://wa.me"          → href="https://wa.me/628123456789" (your actual WhatsApp number with country code)
```

**How:** 
1. Open `src/components/Footer.jsx`
2. Find the Social Links section
3. Replace placeholder URLs with actual social media profiles

---

### 3️⃣ Update Contact Information
**File:** `src/components/Footer.jsx` (lines 114-135)

Update these fields with actual information:
```javascript
// Current (placeholder):
<p>Jl. Contoh No.123, Kabupaten Bandung, Jawa Barat</p>
// Should be:
<p>Jl. [YOUR ACTUAL ADDRESS], [CITY], [PROVINCE]</p>

// Current (placeholder):
<p>+62 812-3456-7890</p>
// Should be:
<p>[YOUR ACTUAL PHONE NUMBER]</p>

// Current (placeholder):
<p>info@yaspimiyah.sch.id</p>
// Should be:
<p>[YOUR ACTUAL EMAIL]</p>

// Current (placeholder):
<p>Senin - Sabtu<br />07.00 - 16.00 WIB</p>
// Verify and update if different
```

---

## 🎯 Priority 2: HIGH (Do Next)

### 4️⃣ Set Up React Router (Optional but Recommended)
**For:** Multi-page navigation

If you want separate pages for `/tentang`, `/guru`, etc:

1. Install React Router:
```bash
npm install react-router-dom
```

2. Update `src/main.jsx` to use Router
3. Create page components in `src/pages/`
4. Update links from `href="/#tentang"` to `href="/tentang"`

**If NOT doing this:** Hash-based navigation (`/#tentang`, `/#galeri`) will work for sections on same page.

---

### 5️⃣ Verify Teacher Images
**File:** `src/components/sections/GuruSection.jsx`

Ensure these files exist in `Assets/yayasan/Guru/`:
- [ ] `1.jpeg` - Muhammad Aji Ismail Buchori
- [ ] `3.jpeg` - Siti ikrimah nurul alpiyah (was image #2, now using #3)
- [ ] `4.jpeg` - Neng siti khotimah zahroh
- [ ] `6.jpeg` - Ai Alwah Syamsiah

**Action:** If file `3.jpeg` doesn't exist, replace with correct image or update path

---

## 🎯 Priority 3: MEDIUM (Nice to Have)

### 6️⃣ Remove Empty Directories
**Cleanup Options:**

Remove these unused directories:
- [ ] `src/layouts/` - (unless you plan to create layout components)
- [ ] `src/pages/` - (unless you'll use them for React Router setup)

**Or:** Populate them if planning multi-page architecture

---

### 7️⃣ Archive Legacy Files
**Consider archiving:**
- `diniyah.html`, `ponpes.html`, `sma.html`, `smp.html`, `tentang.html`, `tkKober.html`
- `css/style.css`, `css/tentang.css`, `css/tkKober.css`

**Action:** Move to `_legacy/` folder or delete if migrated to React

---

## 📋 Verification Checklist

After completing above tasks, verify:

- [ ] All 6 facility images display correctly
- [ ] Social media links open to correct pages
- [ ] Contact info shows actual details (phone, email, address, hours)
- [ ] Teacher images display correctly
- [ ] All navigation links work
- [ ] No console errors in browser
- [ ] Website responsive on mobile
- [ ] Font displays properly (Poppins)

---

## 🔍 Testing

**Local Testing:**
```bash
npm run dev
```

Then visit: `http://localhost:5173` (or whatever port shown)

**Check:**
1. All images load without errors
2. Links navigate correctly
3. Responsive design works on mobile
4. Colors and fonts look correct

---

## 📞 Need Help?

If images won't load:
1. Check exact filename matches (case-sensitive)
2. Verify file is in correct folder: `Assets/fasilitas/`
3. Clear browser cache (Ctrl+Shift+Del)
4. Check browser console for error messages

---

**Last Updated:** 2026-07-14  
**Status:** ✅ Code fixes complete • ⏳ Content updates needed
