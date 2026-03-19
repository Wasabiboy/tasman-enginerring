# GT Trailers Website Setup Guide

## Best Practice: Separate Repository ✅

**Why create a separate repository?**
- ✅ **Clean separation** - Each client/business has its own codebase
- ✅ **Independent version control** - Changes to one site don't affect the other
- ✅ **Easier maintenance** - Clear ownership and responsibility
- ✅ **Better organization** - Easier to find and manage projects
- ✅ **Professional approach** - Industry standard for multi-client work

## What Was Done

1. ✅ Created new directory: `GT-Trailers` (separate from `Tasman-Engineering`)
2. ✅ Initialized new Git repository
3. ✅ Copied HTML structure, CSS, and JavaScript from Tasman Engineering as a template
4. ✅ Preserved all functionality (slider, navigation, forms, etc.)

## Next Steps: Customization Checklist

### 1. Update Content & Branding
- [ ] Replace all "Tasman Engineering" references with "GT Trailers"
- [ ] Update company description and taglines
- [ ] Modify navigation menu items (Trailers, Boat Trailers, Hardware, etc.)
- [ ] Update contact information:
  - Phone: 09 636 7437
  - Location: Onehunga, Auckland
  - Email: (check GT Trailers website)

### 2. Replace Images
**Option A: Download from gttrailers.co.nz**
- Visit https://www.gttrailers.co.nz/
- Right-click images and save to `images/` folder
- Update image paths in HTML files

**Option B: Use Image URLs Directly**
- Reference images directly from gttrailers.co.nz (if they allow hotlinking)
- Example: `<img src="https://www.gttrailers.co.nz/path/to/image.jpg">`

**Images to Replace:**
- [ ] Header logo (`images/headerlogo1504.png`)
- [ ] Footer logo (`images/footerlogo07.png`)
- [ ] Hero slider banners (`images/Banners/`)
- [ ] Service/product images
- [ ] Feature icons

### 3. Update Color Scheme
Edit `css/style.css` - Update CSS variables:
```css
:root {
    --primary-color: #YOUR_COLOR;      /* Main brand color */
    --secondary-color: #YOUR_COLOR;    /* Secondary/accent color */
    /* ... */
}
```

### 4. Update Pages
Based on GT Trailers website structure, you may need:
- [ ] `index.html` - Homepage
- [ ] `trailers.html` - Handyman, Contractor, Digger, Specialised trailers
- [ ] `boat-trailers.html` - Small, Medium, Large Boats, Jetskis
- [ ] `hardware.html` - Hardware products
- [ ] `contact.html` - Contact page

### 5. Update JavaScript
- [ ] Update any hardcoded company names in `js/main.js`
- [ ] Modify form submission if needed

## File Structure

```
GT-Trailers/
├── index.html              # Main homepage
├── css/
│   └── style.css          # All styling (update colors/branding)
├── js/
│   └── main.js            # JavaScript functionality
├── images/                 # Replace with GT Trailers images
│   ├── headerlogo1504.png # GT Trailers logo
│   ├── footerlogo07.png   # Footer logo
│   └── Banners/           # Hero slider images
├── README.md              # Project documentation
└── SETUP_GUIDE.md        # This file
```

## Creating GitHub Repository

1. **Create new repo on GitHub:**
   - Go to GitHub.com
   - Create new repository (e.g., `gt-trailers-website`)
   - Don't initialize with README (we already have files)

2. **Push your code:**
   ```powershell
   git add .
   git commit -m "Initial commit - GT Trailers website template"
   git remote add origin https://github.com/YOUR_USERNAME/gt-trailers-website.git
   git push -u origin master
   ```

## Using Images from gttrailers.co.nz

### Method 1: Download Images (Recommended)
1. Visit https://www.gttrailers.co.nz/
2. Right-click images → "Save image as..."
3. Save to your `images/` folder
4. Update HTML to reference local images

### Method 2: Direct URL References
If images are publicly accessible:
```html
<img src="https://www.gttrailers.co.nz/images/logo.png" alt="GT Trailers">
```

**Note:** Direct linking may break if the source site changes URLs or restricts access.

## Key Differences from Tasman Engineering

| Tasman Engineering | GT Trailers |
|-------------------|-------------|
| Engineering services | Trailer manufacturing |
| U-Bolts & Plates | Trailers & Hardware |
| Manufacturing focus | Trailer types focus |
| Industrial products | Consumer/commercial trailers |

## Testing Checklist

Before going live:
- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Contact form functions
- [ ] Mobile responsive design works
- [ ] All text updated (no "Tasman Engineering" references)
- [ ] Colors match GT Trailers branding
- [ ] Logo appears correctly in header and footer

## Need Help?

- Check the original Tasman Engineering site for structure reference
- Review GT Trailers website (https://www.gttrailers.co.nz/) for content ideas
- Keep the same responsive design and functionality
- Maintain the professional look and feel

---

**Remember:** Keep this repository separate from Tasman Engineering. Each client deserves their own clean codebase! 🚀

