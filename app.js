// Project data
const projectsData = {
    1: {
        title: "Unreal Puzzle Game",
        description: "A comprehensive puzzle game developed in Unreal Engine 4 showcasing advanced C++ programming and Blueprint integration. The project demonstrates expertise in game engine development, optimization, and debugging.",
        videoUrl: "https://www.youtube.com/embed/qxAU1XQOO1o",
        technologies: ["Unreal Engine 4", "C++", "Blueprint"],
        achievements: [
            "Design and C++ implementation of QTE (Quick Time Event) system",
            "Development of outline rendering system for interactive objects",
            "30% improvement in game stability",
            "Performance profiling and memory leak debugging"
        ],
        challenges: [
            "Implementing efficient QTE system with precise timing",
            "Optimizing rendering pipeline for outline effects",
            "Debugging complex memory leaks in C++ code"
        ],
        solutions: [
            "Developed custom timer system with millisecond precision",
            "Created optimized shader for outline rendering",
            "Implemented comprehensive memory management system"
        ],
        technicalDetails: [
            "Custom QTE system with precise timing mechanisms",
            "Optimized outline rendering using custom shaders",
            "Memory management system reducing leaks by 95%",
            "Blueprint-C++ integration for rapid prototyping"
        ]
    },
    2: {
        title: "MegaRogue Project",
        description: "A roguelike game developed in C featuring advanced physics systems, AI patterns, and level design tools. The project showcases low-level programming skills and game architecture design.",
        videoUrl: "https://www.youtube.com/embed/dd0ZqgdRN5Y",
        technologies: ["C", "CProcessing"],
        achievements: [
            "Implementation of real-time platform collision detection and physics system",
            "Implementation of projectile and effect systems",
            "Design and implementation of boss AI patterns",
            "Achieved 50% reduction in map creation time"
        ],
        challenges: [
            "Implementing precise collision detection in C",
            "Creating complex boss AI behavior patterns",
            "Developing efficient level design tools"
        ],
        solutions: [
            "Optimized collision detection using spatial partitioning",
            "Implemented state machine for AI behaviors",
            "Created visual level editor with drag-and-drop interface"
        ],
        downloadLink: "assets/downloads/MEGA_ROGUE_Setup.exe",
        downloadSize: "28MB",
        technicalDetails: [
            "Real-time collision detection with spatial optimization",
            "State machine-based AI system for complex behaviors",
            "Custom level editor reducing creation time by 50%",
            "Efficient memory management in pure C"
        ]
    },
    3: {
        title: "Huntress Game Jam Project",
        description: "A game jam project developed under tight time constraints, showcasing rapid prototyping skills and efficient implementation of core game systems.",
        videoUrl: "https://www.youtube.com/embed/I_cFyhu3i0E",
        technologies: ["C++", "AlphaEngine", "ImGui"],
        achievements: [
            "Real-time player status HUD system",
            "Shop system implementation"
        ],
        challenges: [
            "Implementing complex systems under time pressure",
            "Creating intuitive UI/UX for game systems"
        ],
        solutions: [
            "Utilized efficient development patterns",
            "Implemented modular system architecture"
        ],
        downloadLink: "assets/downloads/Huntress_setup.exe",
        downloadSize: "32MB",
        technicalDetails: [
            "Real-time HUD system with dynamic updates",
            "Modular shop system with extensible item types",
            "Efficient UI rendering with ImGui integration",
            "Rapid prototyping architecture for game jams"
        ]
    },
    4: {
        title: "BomberMan Project",
        description: "A complete game engine development project featuring component-based architecture, advanced AI systems, and comprehensive debugging tools.",
        videoUrl: null,
        technologies: ["C++", "OpenGL 4.6", "ImGui", "GLFW"],
        achievements: [
            "Design and implementation of component-based architecture",
            "Development of real-time debugging and profiling tools",
            "Integration of GLFW window system with OpenGL 4.6",
            "Implementation of enemy AI using A* pathfinding algorithm",
            "Bomb placement and chain explosion systems",
            "JSON-based game data serialization"
        ],
        challenges: [
            "Implementing efficient component system",
            "Creating real-time debugging tools",
            "Optimizing OpenGL rendering pipeline"
        ],
        solutions: [
            "Developed custom ECS (Entity Component System)",
            "Implemented ImGui-based debugging interface",
            "Optimized draw calls and state management"
        ],
        technicalDetails: [
            "Custom Entity Component System architecture",
            "A* pathfinding algorithm for intelligent AI",
            "Real-time debugging with ImGui interface",
            "OpenGL 4.6 rendering optimization",
            "JSON serialization for game data management"
        ]
    }
};

// Global variables
let currentTheme = 'light';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    const themeToggle = document.getElementById('themeToggle');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const backToProjects = document.getElementById('backToProjects');
    const contactForm = document.getElementById('contactForm');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Initialize theme
    initTheme();
    
    // Initialize animations
    initAnimations();
    
    // Event listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Navigation links with smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 60;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile nav
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Modal controls
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    if (backToProjects) {
        backToProjects.addEventListener('click', function(e) {
            e.preventDefault();
            closeProjectModal();
        });
    }
    
    // Close modal on backdrop click
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Scroll events
    window.addEventListener('scroll', throttle(handleScroll, 16));
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    // Initial scroll check
    handleScroll();
}

// Theme management
function initTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        }
    }
    
    setTheme(currentTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggle();
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        }
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Scroll handling
function handleScroll() {
    updateActiveNavLink();
    toggleBackToTop();
    animateOnScroll();
    handleNavbarScroll();
}

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function toggleBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .education-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = currentTheme === 'light' 
                ? 'rgba(255, 255, 253, 0.98)' 
                : 'rgba(38, 40, 40, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = currentTheme === 'light' 
                ? 'rgba(255, 255, 253, 0.95)' 
                : 'rgba(38, 40, 40, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}

// Project modal functionality
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    showLoading();
    
    setTimeout(() => {
        renderProjectDetail(project);
        const projectModal = document.getElementById('projectModal');
        if (projectModal) {
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        hideLoading();
    }, 500);
}

function closeProjectModal() {
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function renderProjectDetail(project) {
    const projectDetailContent = document.getElementById('projectDetailContent');
    if (!projectDetailContent) return;

    const videoSection = project.videoUrl ? `
        <div class="project-detail-video">
            <iframe 
                title="${project.title} Demo"
                src="${project.videoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    ` : '';

    const downloadSection = project.downloadLink ? `
        <div class="project-detail-section">
            <h3>Download</h3>
            <a href="${project.downloadLink}" class="download-btn">
                📥 Download Demo (${project.downloadSize})
            </a>
        </div>
    ` : '';

    const technicalDetailsSection = project.technicalDetails ? `
        <div class="project-detail-section">
            <h3>Technical Implementation</h3>
            <ul>
                ${project.technicalDetails.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    projectDetailContent.innerHTML = `
        <h1>${project.title}</h1>
        ${videoSection}
        
        <div class="project-detail-section">
            <h3>Overview</h3>
            <p>${project.description}</p>
        </div>

        <div class="project-detail-section">
            <h3>Technologies Used</h3>
            <div class="tech-stack">
                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>

        <div class="project-detail-section">
            <h3>Key Achievements</h3>
            <ul>
                ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>

        ${technicalDetailsSection}

        <div class="project-detail-section">
            <h3>Challenges</h3>
            <ul>
                ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
            </ul>
        </div>

        <div class="project-detail-section">
            <h3>Solutions</h3>
            <ul>
                ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
            </ul>
        </div>

        ${downloadSection}
    `;
}

// Loading functionality
function showLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        loadingSpinner.classList.add('active');
    }
}

function hideLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        loadingSpinner.classList.remove('active');
    }
}

// Contact form functionality
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        
        // Create mailto link
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:sprtms9062@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.open(mailtoLink, '_blank');
        
        // Reset form
        e.target.reset();
        
        // Show success message
        alert('Thank you for your message! Your email client should open now.');
    }, 1000);
}

// Initialize animations
function initAnimations() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .education-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Hero section animations
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Performance optimization: Throttle function
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    // Tech badge hover effects
    const techBadges = document.querySelectorAll('.tech-badge');
    
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});