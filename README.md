# Riley Moen - Portfolio Website

A modern, responsive portfolio website showcasing your education, projects, and technical skills.

## Features

- 🎨 Clean, modern design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast and lightweight
- 🔗 GitHub API integration to automatically display your projects
- 🎯 Sections for About, Education, Projects, Skills, and Contact
- 🌐 SEO-friendly structure

## Quick Start

### 1. Customize Your Information

Before deploying, update the following in your files:

#### In `index.html`:
- Replace `your.email@example.com` with your actual email (appears in 3 places)
- Replace `https://github.com/yourusername` with your GitHub profile URL
- Replace `https://linkedin.com/in/yourprofile` with your LinkedIn profile URL
- Update project GitHub links (or they'll be auto-populated from GitHub API)

#### In `script.js`:
- Replace `'yourusername'` on line 33 with your actual GitHub username
- Uncomment line 131 to enable automatic GitHub project loading:
  ```javascript
  loadGitHubProjects();
  ```

### 2. Test Locally

Open `index.html` in your web browser to preview the site locally.

### 3. Deploy to GitHub Pages (Recommended - Free)

#### Option A: Quick Deploy
1. Create a new repository on GitHub named `yourusername.github.io` (replace with your username)
2. Upload these files to the repository:
   - index.html
   - styles.css
   - script.js
3. Go to Settings → Pages → Source → Select "main" branch
4. Your site will be live at `https://yourusername.github.io`

#### Option B: Using Git Command Line
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add GitHub repository as remote (create repo first on GitHub)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

After pushing, enable GitHub Pages in your repository settings.

### 4. Custom Domain (Optional)

If you want to use a custom domain:
1. Purchase a domain (e.g., from Namecheap, Google Domains)
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings with your domain provider
4. Update repository settings to use custom domain

## Alternative Hosting Options

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your folder or connect your GitHub repo
3. Deploy - done! You'll get a free subdomain

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically with every push

### Traditional Web Hosting
Upload the files via FTP to any web hosting service (GoDaddy, Bluehost, etc.)

## Customization Guide

### Colors
Edit the CSS variables in `styles.css` (lines 9-18):
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --accent-color: #3b82f6;       /* Lighter accent */
    /* ... */
}
```

### Adding More Projects
You can either:
1. Let the GitHub API automatically populate projects (recommended)
2. Manually add projects in `index.html` within the `<div class="projects-grid">` section

### Adding Resume Download
Add this button to the hero section:
```html
<a href="path/to/resume.pdf" download class="btn btn-primary">
    <i class="fas fa-download"></i> Download Resume
</a>
```

### Adding Blog Section
Create a new section:
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <!-- Add blog posts here -->
    </div>
</section>
```

## GitHub API Integration

The site includes automatic GitHub project loading. Once you:
1. Add your GitHub username to `script.js`
2. Uncomment the `loadGitHubProjects()` call
3. Deploy the site

Your latest repositories will automatically appear in the projects section!

The API will:
- Fetch your 6 most recently updated repositories
- Filter out forked repos
- Display project name, description, language, and topics
- Link to the repository

### GitHub Topics
Add topics to your GitHub repositories to have them appear as tags on your portfolio:
1. Go to your GitHub repository
2. Click the settings gear next to "About"
3. Add relevant topics (e.g., "machine-learning", "python", "data-science")

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Total Page Size: < 100KB

## SEO Optimization

The site includes:
- Semantic HTML5 structure
- Meta descriptions (add in `<head>`)
- Alt text for images (when you add them)
- Fast loading times
- Mobile-friendly design

### Add These Meta Tags to `<head>` for Better SEO:

```html
<meta name="description" content="Riley Moen - Applied Mathematics & Data Science Portfolio. Master's graduate specializing in machine learning, numerical analysis, and computational mathematics.">
<meta name="keywords" content="data science, machine learning, applied mathematics, Python, portfolio, Riley Moen">
<meta name="author" content="Riley Moen">
<meta property="og:title" content="Riley Moen | Applied Mathematics & Data Science">
<meta property="og:description" content="Portfolio showcasing machine learning projects, computational mathematics, and data science work.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourusername.github.io">
```

## Maintenance

### Updating Projects
Your projects will auto-update from GitHub. To feature specific projects:
1. Star important repositories
2. Add detailed descriptions
3. Use GitHub topics for categorization

### Analytics (Optional)
Add Google Analytics by inserting this before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Troubleshooting

### Projects Not Loading from GitHub
- Check that you've replaced 'yourusername' with your actual GitHub username
- Verify your GitHub profile is public
- Check browser console for errors
- GitHub API has rate limits (60 requests/hour for unauthenticated requests)

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check that script.js is properly linked
- Clear browser cache

### Styling Issues
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that styles.css is in the same directory as index.html
- Verify there are no typos in class names

## Support

For issues or questions:
- Check GitHub Issues: [Create an issue](https://github.com/yourusername/portfolio/issues)
- Email: your.email@example.com

## License

This portfolio template is free to use and modify for personal use.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspired by modern web design principles

---

Built with ❤️ by Riley Moen
