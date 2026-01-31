// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// GitHub Projects Integration
async function loadGitHubProjects() {
    const username = 'yourusername'; // Replace with your GitHub username
    const projectsContainer = document.getElementById('projectsContainer');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            console.log('Using default projects');
            return; // Keep the default projects if API fails
        }
        
        const repos = await response.json();
        
        // Filter out forked repos and select featured projects
        const featuredRepos = repos.filter(repo => !repo.fork).slice(0, 6);
        
        if (featuredRepos.length > 0) {
            // Clear existing projects
            projectsContainer.innerHTML = '';
            
            // Create project cards from GitHub repos
            featuredRepos.forEach(repo => {
                const card = createProjectCard(repo);
                projectsContainer.innerHTML += card;
            });
        }
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        // Keep the default projects on error
    }
}

function createProjectCard(repo) {
    // Get language-specific icon
    const icons = {
        'Python': 'fa-python',
        'JavaScript': 'fa-js-square',
        'TypeScript': 'fa-code',
        'Java': 'fa-java',
        'C++': 'fa-code',
        'MATLAB': 'fa-calculator',
        'R': 'fa-chart-bar',
        'Jupyter Notebook': 'fa-book'
    };
    
    const icon = icons[repo.language] || 'fa-code';
    
    // Parse topics as tags
    const tags = repo.topics && repo.topics.length > 0 
        ? repo.topics.map(topic => `<span class="tag">${topic}</span>`).join('')
        : repo.language 
            ? `<span class="tag">${repo.language}</span>`
            : '';
    
    return `
        <div class="project-card">
            <div class="project-header">
                <i class="fas ${icon}"></i>
                <h3>${repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            </div>
            <p class="project-description">
                ${repo.description || 'A project showcasing computational mathematics and data science techniques.'}
            </p>
            <div class="project-tags">
                ${tags}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Load GitHub projects
    // Uncomment the line below once you've added your GitHub username
    // loadGitHubProjects();
});

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 50);
// });
