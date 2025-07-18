// Project data
const projectsData = {
    1: {
        title: "Edge Drive",
        description: "A hybrid 3D action game inspired by Bayonetta, Dark Souls, and Paper Mario. As a DigiPen Busan Academy graduation project, this project enhanced my skills in implementing Unreal Engine 5's latest features and complex gameplay systems.",
        videoUrl: "https://www.youtube.com/embed/264Wfi25UOU",
        technologies: ["Unreal Engine 5.4", "C++", "Blueprint"],
        achievements: [
            "Modular Combat System: OOP-based architecture design improving weapon integration speed",
            "Advanced State Machine: Motion matching-based responsive character control implementation",
            "Dynamic Combo System: Developed scalable combo system adaptable to multiple weapons and attack patterns",
            "Responsive Health System: Damage type-specific visual feedback implementation",
            "Time Component System: Global/individual time scaling for cinematic effects"
        ],
        challenges: [
            "Implementing complex combat mechanics with multiple weapon types",
            "Optimizing performance while maintaining visual quality",
            "Creating scalable system architecture for easy expansion"
        ],
        solutions: [
            "Developed modular OOP-based combat system",
            "Implemented event-driven architecture for performance",
            "Created reusable component systems"
        ],
        performance: [
            "Stable 50~60FPS maintenance through event-driven architecture",
            "28% reduction in computational load using Unreal Insights",
            "Memory usage optimization through object pooling"
        ],
        problemSolving: [
            "Problem: Frame drops during complex combat scenarios",
            "Solution: Separated combat logic into event-driven system",
            "Result: 30% reduction in CPU usage while maintaining visual quality"
        ],
        downloadLink: "https://drive.google.com/file/d/1XqZQiWAvwnG1kajS_e9Vc4t5MeMhALR_/view?usp=sharing",
        downloadSize: "Google Drive",
        technicalDetails: [
            "Modular combat system improving weapon integration speed",
            "Motion matching-based advanced state machine",
            "Scalable dynamic combo system",
            "Time component system for cinematic effects"
        ]
    },
    2: {
        title: "MegaRogue Project",
        description: "A roguelike game developed in C featuring advanced physics systems, AI patterns, and level design tools. The project showcases low-level programming skills and game architecture design.",
        videoUrl: "https://www.youtube.com/embed/dd0ZqgdRN5Y",
        technologies: ["C", "CProcessing"],
        achievements: [
            "AI System: State pattern-based enemy AI with dynamic boss patterns",
            "Physics Engine: Real-time collision detection with 15% CPU usage optimization",
            "Audio System: Multi-channel processing for real-time effects",
            "Level Editor: In-game content creation tool"
        ],
        learning: [
            "Mastered C-level memory management and optimization",
            "Deep understanding of game engine fundamentals",
            "Appreciated the convenience of high-level engines"
        ],
        challenges: [
            "Implementing precise collision detection in C",
            "Creating complex boss AI behavior patterns",
            "Managing memory manually without garbage collection"
        ],
        solutions: [
            "Developed optimized collision detection algorithms",
            "Implemented state pattern for AI behavior management",
            "Created custom memory management system"
        ],
        downloadLink: "assets/downloads/MEGA_ROGUE_Setup.exe",
        downloadSize: "28MB",
        technicalDetails: [
            "State pattern-based AI system",
            "Real-time collision detection with 15% CPU optimization",
        ]
    },
    3: {
        title: "Huntress Game Jam Project",
        description: "A game jam project developed under tight time constraints, showcasing rapid prototyping skills and efficient implementation of core game systems.",
        videoUrl: "https://www.youtube.com/embed/I_cFyhu3i0E",
        technologies: ["C++", "AlphaEngine", "ImGui"],
        achievements: [
            "Real-time HUD system with intuitive status tracking",
            "Multi-resolution responsive inventory system",
            "40% improvement in UI response time",
            "Accessibility-focused dynamic layout system"
        ],
        challenges: [
            "Implementing complex systems under time pressure",
            "Creating intuitive UI/UX for game systems",
            "Optimizing performance on limited development time"
        ],
        solutions: [
            "Focused on core mechanics first, then polish",
            "Used rapid prototyping techniques",
            "Implemented efficient UI rendering system"
        ],
        downloadLink: "assets/downloads/Huntress_setup.exe",
        downloadSize: "32MB",
        technicalDetails: [
            "Real-time HUD system with intuitive status tracking",
            "Multi-resolution responsive inventory system",
            "40% improvement in UI response time",
            "Accessibility-focused dynamic layout system"
        ]
    },
    4: {
        title: "Redash",
        description: "Custom game engine development project. Focused on engine architecture design and implementation.",
        videoUrl: null,
        technologies: ["C++", "OpenGL 4.6", "ImGui", "GLFW"],
        achievements: [
            "Component-based Architecture: Design/implementation → Module replacement testing completed within 5 minutes",
            "Custom Performance Profiler: Development → 35% frame drop elimination",
            "ImGui Level Editor: Creation → Enhanced designer workflow efficiency"
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
            "Component-based architecture design",
            "Real-time performance profiling system",
            "ImGui-based level editor",
            "Module replacement testing completed within 5 minutes"
        ]
    },
    5: {
        title: "Rescue Simulator",
        description: "A comprehensive puzzle game developed in Unreal Engine 4 showcasing advanced C++ programming and Blueprint integration. The project demonstrates expertise in game engine development, optimization, and debugging.",
        videoUrl: "https://www.youtube.com/embed/qxAU1XQOO1o",
        technologies: ["Unreal Engine 4", "C++", "Blueprint"],
        achievements: [
            "Design and C++ implementation of QTE (Quick Time Event) system",
            "Development of outline rendering system for interactive objects",
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
            "Blueprint-C++ integration for rapid prototyping"
        ]
    }
};

// Global variables
let currentTheme = 'light';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
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
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navigation links with smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Modal controls
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    if (backToProjects) {
        backToProjects.addEventListener('click', function (e) {
            e.preventDefault();
            closeProjectModal();
        });
    }

    // Close modal on backdrop click
    if (projectModal) {
        projectModal.addEventListener('click', function (e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', function () {
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
    document.addEventListener('keydown', function (e) {
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
                ${(project.challenges || []).map(challenge => `<li>${challenge}</li>`).join('')}
            </ul>
        </div>

        <div class="project-detail-section">
            <h3>Solutions</h3>
            <ul>
                ${(project.solutions || []).map(solution => `<li>${solution}</li>`).join('')}
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
document.addEventListener('DOMContentLoaded', function () {
    // Tech badge hover effects
    const techBadges = document.querySelectorAll('.tech-badge');

    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        badge.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
