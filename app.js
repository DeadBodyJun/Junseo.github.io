
const projectsData = {
    1: {
        title: "Edge Drive",
        description: "A hybrid 3D action game inspired by Bayonetta, Dark Souls, and Paper Mario. As a DigiPen Busan Academy graduation project, this project enhanced my skills in implementing Unreal Engine 5's latest features and complex gameplay systems.",
        videoUrl: "https://www.youtube.com/embed/qxAU1XQOO1o",
        period: "2024-12 ~ 2025-02, 2025-06~",
        type: "3D Action Game",
        team: "Team of 4",
        role: "Game Director & Gameplay Programmer",
        technologies: ["Unreal Engine 5.4", "C++", "Blueprint"],
        achievements: [
            "Modular Combat System: OOP-based architecture design improving weapon integration speed by 50%",
            "Advanced State Machine: Motion matching-based responsive character control implementation",
            "Dynamic Combo System: Developed scalable combo system adaptable to multiple weapons and attack patterns",
            "Responsive Health System: Damage type-specific visual feedback implementation",
            "Time Component System: Global/individual time scaling for cinematic effects"
        ],
        performance: [
            "Stable 60FPS maintenance through event-driven architecture",
            "28% reduction in computational load using Unreal Insights",
            "Memory usage optimization through object pooling"
        ],
        problemSolving: [
            "Problem: Frame drops during complex combat scenarios",
            "Solution: Separated combat logic into event-driven system",
            "Result: 30% reduction in CPU usage while maintaining visual quality"
        ],
        technicalDetails: [
            "Modular combat system improving weapon integration speed by 50%",
            "Motion matching-based advanced state machine",
            "Scalable dynamic combo system",
            "Time component system for cinematic effects"
        ]
    },
    2: {
        title: "Huntress",
        description: "Turn-based artillery game developed during DigiPen's 2nd game jam. Development focused on user interface completeness and polish.",
        videoUrl: "https://www.youtube.com/embed/I_cFyhu3i0E",
        period: "2024-08 ~ 2024-09",
        type: "Artillery Game",
        team: "Team of 3",
        role: "UI/UX Developer",
        technologies: ["C++", "Alpha Engine", "ImGui"],
        achievements: [
            "Real-time HUD System: Intuitive status tracking with minimized cognitive load",
            "Responsive Inventory: Efficient item management across various resolutions",
            "40% improvement in UI response time through event optimization",
            "Accessibility Features: Multi-resolution support with dynamic layout rearrangement"
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
    3: {
        title: "MegaRogue",
        description: "2D platformer developed during the 1st game jam. This project strengthened my low-level programming capabilities.",
        videoUrl: "https://www.youtube.com/embed/dd0ZqgdRN5Y",
        period: "2024-07",
        type: "2D Metroidvania",
        team: "Team of 2",
        role: "Game Developer",
        technologies: ["C", "CProcessing Engine"],
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
        downloadLink: "assets/downloads/MEGA_ROGUE_Setup.exe",
        downloadSize: "28MB",
        technicalDetails: [
            "State pattern-based AI system",
            "Real-time collision detection with 15% CPU optimization",
            "Multi-channel audio system",
            "In-game level editor"
        ]
    },
    4: {
        title: "Rescue Simulator",
        description: "Patient rescue puzzle game developed as graduation project. Focused on system optimization and stability.",
        videoUrl: "https://www.youtube.com/embed/qxAU1XQOO1o",
        period: "2022-03 ~ 2022-06",
        type: "Puzzle·Simulation",
        team: "Team of 4",
        role: "System Programmer",
        technologies: ["Unreal Engine 4.27", "C++", "Blueprint"],
        achievements: [
            "QTE System: Precision timing-based interaction system",
            "Outline Rendering: Custom shader for object highlighting",
            "Performance Optimization: 30% overall performance improvement using Unreal Insights",
            "Memory Management: Complete elimination of memory leaks"
        ],
        performance: [
            "30% reduction in draw calls",
            "Memory usage optimization: 450MB → 320MB",
            "Player retention improvement: 88% → 95% through UX enhancements"
        ],
        technicalDetails: [
            "Precision timing-based QTE system",
            "Custom shader-based outline rendering",
            "Performance optimization using Unreal Insights",
            "Complete memory leak elimination"
        ]
    },
    5: {
        title: "Redash",
        description: "Custom game engine development project. Focused on engine architecture design and implementation.",
        videoUrl: null,
        period: "2025-06 ~ In Progress",
        type: "Custom Engine",
        team: "Solo Project",
        role: "Engine Developer",
        technologies: ["C++", "OpenGL", "ImGui"],
        achievements: [
            "Component-based Architecture: Design/implementation → Module replacement testing completed within 5 minutes",
            "Custom Performance Profiler: Development → 35% frame drop elimination",
            "ImGui Level Editor: Creation → Enhanced designer workflow efficiency"
        ],
        technicalDetails: [
            "Component-based architecture design",
            "Real-time performance profiling system",
            "ImGui-based level editor",
            "Module replacement testing completed within 5 minutes"
        ]
    }
};

// Rest of the JavaScript remains the same but with English labels
let currentTheme = 'light';

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
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

    initTheme();
    initAnimations();

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

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
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    if (backToProjects) {
        backToProjects.addEventListener('click', function(e) {
            e.preventDefault();
            closeProjectModal();
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    window.addEventListener('scroll', throttle(handleScroll, 16));

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    handleScroll();
}

function renderProjectDetail(project) {
    const projectDetailContent = document.getElementById('projectDetailContent');
    if (!projectDetailContent) return;

    const videoSection = project.videoUrl ? `
        <div class="project-detail-video">
            <iframe src="${project.videoUrl}" allowfullscreen></iframe>
        </div>
    ` : '';

    const downloadSection = project.downloadLink ? `
        <div class="project-detail-section">
            <h3>Download</h3>
            <a href="${project.downloadLink}" class="download-btn">
                <span>📥</span>
                Download (${project.downloadSize})
            </a>
        </div>
    ` : '';

    const performanceSection = project.performance ? `
        <div class="project-detail-section">
            <h3>Performance Metrics</h3>
            <ul>
                ${project.performance.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    const problemSolvingSection = project.problemSolving ? `
        <div class="project-detail-section">
            <h3>Problem Solving</h3>
            <ul>
                ${project.problemSolving.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    const learningSection = project.learning ? `
        <div class="project-detail-section">
            <h3>Learning Outcomes</h3>
            <ul>
                ${project.learning.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    projectDetailContent.innerHTML = `
        ${videoSection}
        
        <div class="project-detail-section">
            <h3>Project Overview</h3>
            <p><strong>Type:</strong> ${project.type}</p>
            <p><strong>Team:</strong> ${project.team}</p>
            <p><strong>Role:</strong> ${project.role}</p>
            <p><strong>Period:</strong> ${project.period}</p>
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

        ${performanceSection}
        ${problemSolvingSection}
        ${learningSection}

        <div class="project-detail-section">
            <h3>Technical Implementation</h3>
            <ul>
                ${project.technicalDetails.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>

        ${downloadSection}
    `;

    document.getElementById('projectTitle').textContent = project.title;
}
