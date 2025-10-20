# Brookwood Property Management - Georgia Rental Properties

A modern, production-ready real estate rental website built with Next.js 15, TypeScript, and Tailwind CSS. This site showcases 5 quality rental properties in Snellville and Lawrenceville, Georgia, with flexible payment options and professional property management.

## 🌟 Features

- **Modern Design**: Clean, responsive UI built with Shadcn/UI components
- **Property Listings**: Browse, search, and filter available rental properties
- **Dynamic Property Pages**: Individual pages for each property with full details
- **CMS Integration**: Decap CMS (formerly Netlify CMS) for easy property management
- **Static Site Generation**: Fast, SEO-friendly pages with Next.js SSG
- **Mobile Responsive**: Fully responsive design for all devices
- **Type Safety**: Built with TypeScript for robust code

## 📁 Project Structure

```
├── data/
│   └── properties/          # JSON files for each property
├── public/
│   └── admin/              # Decap CMS configuration
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── properties/    # Properties listing and detail pages
│   │   └── page.tsx       # Homepage
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── PropertyCard.tsx
│   │   └── SearchFilters.tsx
│   └── lib/
│       └── properties.ts  # Property data utilities
├── netlify.toml           # Netlify configuration
└── next.config.ts         # Next.js configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Export

Build the site for production:

```bash
npm run build
```

The static site will be generated in the `out` directory.

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will auto-detect the build settings from `netlify.toml`
   - Click "Deploy site"

3. **Enable Decap CMS (Optional)**
   
   To use the admin panel for managing properties:
   
   - Go to your Netlify site settings
   - Navigate to "Identity" and click "Enable Identity"
   - Under "Registration preferences", select "Invite only"
   - Go to "Services" → "Git Gateway" and click "Enable Git Gateway"
   - Invite users via "Identity" → "Invite users"
   - Access the CMS at: `https://your-site.netlify.app/admin`

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

### Deploy to GitHub Pages

1. Update `next.config.ts` with your repository name:
   ```typescript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: { unoptimized: true }
   };
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Push the 'out' directory to gh-pages branch
   ```

## 📝 Managing Properties

### Using Decap CMS (Recommended)

1. Access the admin panel at `/admin` (after enabling Git Gateway on Netlify)
2. Log in with your Netlify Identity credentials
3. Add, edit, or delete properties through the visual interface
4. Changes are automatically committed to your Git repository

### Manual JSON Editing

Properties are stored as JSON files in `data/properties/`. To add a new property:

1. Create a new file: `data/properties/property-12.json`
2. Copy the structure from existing properties
3. Update `src/lib/properties.ts` to import the new property
4. Add the property to the `allProperties` array

Example property JSON:
```json
{
  "id": "prop-012",
  "title": "Property Title",
  "address": "123 Main St",
  "city": "Snellville",
  "state": "GA",
  "zipCode": "30078",
  "price": 1500,
  "bedrooms": 3,
  "bathrooms": 2,
  "sqft": 1200,
  "type": "house",
  "status": "available",
  "featured": true,
  "description": "Property description...",
  "amenities": ["Amenity 1", "Amenity 2"],
  "images": ["image-url-1", "image-url-2"],
  "yearBuilt": 2000,
  "parking": "2-car garage",
  "petsAllowed": true,
  "laundry": "In-unit"
}
```

## 🎨 Customization

### Company Branding

Update the following files:

- **Site Name**: `src/components/Navigation.tsx` and `src/components/Footer.tsx`
- **Contact Info**: `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- **About Page**: `src/app/about/page.tsx`
- **Metadata**: `src/app/layout.tsx`

### Styling

- **Colors**: Edit `src/app/globals.css` (see the `:root` and `.dark` sections)
- **Components**: All components are in `src/components/`

## 🖼️ Adding Property Images

### Option 1: External URLs (Current Setup)
Use Unsplash or other image CDN URLs in your property JSON files.

### Option 2: Local Images
1. Add images to `public/images/properties/`
2. Reference them in JSON as `/images/properties/your-image.jpg`
3. Rebuild the site

### Option 3: Decap CMS Upload
When using Decap CMS, images are automatically uploaded to your repository.

## 📱 Pages Overview

- **/** - Homepage with hero section, featured properties, and company info
- **/properties** - Full property listing with search and filters
- **/properties/[id]** - Individual property detail pages
- **/about** - Company information and values
- **/contact** - Contact form and information
- **/admin** - Decap CMS admin interface (requires setup)

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **CMS**: Decap CMS
- **Icons**: Lucide React
- **Hosting**: Netlify (recommended), Vercel, or GitHub Pages

## 🐛 Troubleshooting

### Images not loading
- Ensure image URLs are accessible
- For local images, check they're in the `public` directory
- Verify `next.config.ts` has `images: { unoptimized: true }`

### Decap CMS not working
- Ensure Git Gateway is enabled in Netlify
- Check that you're logged in with Netlify Identity
- Verify `public/admin/config.yml` is configured correctly

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

## 📄 License

This project is open source and available for use.

## 🤝 Support

For questions or issues, please contact the development team or open an issue in the repository.

---

**Built with ❤️ for Brookwood Property Management**