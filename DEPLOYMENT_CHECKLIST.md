# Portfolio Website Deployment Checklist

## Before You Deploy - Customization Steps

### 1. Update Personal Information in index.html
- [ ] Replace `your.email@example.com` with your email (3 locations)
- [ ] Update GitHub URL: `https://github.com/yourusername`
- [ ] Update LinkedIn URL: `https://linkedin.com/in/yourprofile`
- [ ] Review and customize the "About Me" text
- [ ] Add any additional achievements or details to Education section

### 2. Configure GitHub Integration in script.js
- [ ] Line 33: Replace `'yourusername'` with your GitHub username
- [ ] Line 131: Uncomment `loadGitHubProjects();` to enable auto-loading

### 3. Optional Customizations
- [ ] Change color scheme in styles.css (lines 9-18)
- [ ] Add a profile photo to the hero section
- [ ] Add your actual resume PDF and update download links
- [ ] Customize project descriptions if needed

## Deployment Steps

### Option 1: GitHub Pages (Recommended - Free & Easy)

#### Method A: Web Interface
1. [ ] Create new repository on GitHub named `yourusername.github.io`
2. [ ] Upload all 4 files (index.html, styles.css, script.js, README.md)
3. [ ] Go to Settings → Pages
4. [ ] Select "main" branch as source
5. [ ] Wait 2-3 minutes and visit `https://yourusername.github.io`

#### Method B: Command Line
```bash
# Navigate to your portfolio folder
cd /path/to/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Add remote (create empty repo on GitHub first)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option 2: Netlify (Alternative - Also Free)
1. [ ] Sign up at netlify.com
2. [ ] Drag and drop your portfolio folder
3. [ ] Get instant live URL
4. [ ] Optional: Connect custom domain

### Option 3: Vercel (Alternative - Great for React later)
1. [ ] Sign up at vercel.com
2. [ ] Import GitHub repository
3. [ ] Auto-deploy on every push

## After Deployment

### Immediate Tasks
- [ ] Test all links work correctly
- [ ] Verify mobile responsiveness
- [ ] Check that GitHub projects load (may take a few minutes)
- [ ] Share your portfolio URL on LinkedIn
- [ ] Add portfolio link to your resume

### Optional Enhancements
- [ ] Set up Google Analytics to track visitors
- [ ] Add a blog section for technical articles
- [ ] Connect a custom domain (e.g., rileymoen.com)
- [ ] Add more detailed project case studies
- [ ] Create video demos of your projects

### Maintenance
- [ ] Update projects as you complete new work
- [ ] Keep GitHub repositories organized with good descriptions
- [ ] Add topics/tags to GitHub repos (they'll show as tags on portfolio)
- [ ] Regularly update your skills section
- [ ] Add testimonials or recommendations if you receive them

## Testing Checklist

Before sharing your portfolio:
- [ ] All navigation links work
- [ ] Mobile menu opens and closes properly
- [ ] Social media links are correct
- [ ] Email link opens mail client
- [ ] Site loads quickly (< 3 seconds)
- [ ] No console errors (F12 → Console tab)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile device
- [ ] All project links work
- [ ] GitHub projects load automatically

## Future Additions

Consider adding these later:
- [ ] Blog section for technical writing
- [ ] Contact form (using Formspree or Netlify Forms)
- [ ] Dark mode toggle
- [ ] Project filters by technology
- [ ] Visitor counter or analytics dashboard
- [ ] Resume download button
- [ ] Certifications section
- [ ] Publications or research papers section

## Troubleshooting

### Projects Not Showing Up from GitHub
- Verify username is correct in script.js
- Check GitHub profile is public
- Look for errors in browser console (F12)
- GitHub API rate limit: 60 requests/hour

### Site Not Deploying on GitHub Pages
- Repository name must be `yourusername.github.io`
- Make sure GitHub Pages is enabled in Settings
- Wait 5-10 minutes after first deployment
- Check that index.html is in root directory

### Styling Looks Broken
- Verify all files are in same directory
- Check that CSS filename matches exactly (styles.css)
- Clear browser cache (Ctrl+Shift+R)
- Check for typos in HTML class names

## Resources

- GitHub Pages Documentation: https://pages.github.com/
- Netlify Documentation: https://docs.netlify.com/
- Font Awesome Icons: https://fontawesome.com/icons
- CSS Color Palette Generator: https://coolors.co/
- Free Stock Photos: https://unsplash.com/

---

✅ Once you complete this checklist, your portfolio will be live and ready to share with potential employers!
