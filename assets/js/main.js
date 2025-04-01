/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-links a')
function linkAction() {
    const navMenu = document.querySelector('.nav-links')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);
document.addEventListener('DOMContentLoaded', scrollActive);

/*===== SMOOTH SCROLL =====*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/*===== CHANGE NAVBAR COLOR ON SCROLL =====*/
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a252f';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
    }
});

/*===== LANGUAGE SWITCHER =====*/
const langToggle = document.getElementById('langToggle');
let currentLang = 'ar';
function initializeContent() {
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        element.textContent = translations[currentLang][key];
    });
    document.title = translations[currentLang].title;
    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;
    document.querySelector('#about h2').textContent = translations[currentLang].aboutTitle;
    document.querySelector('.about-text p').textContent = translations[currentLang].aboutText;
    document.querySelector('#skills h2').textContent = translations[currentLang].skillsTitle;
    document.querySelector('#projects h2').textContent = translations[currentLang].projectsTitle;
    document.querySelector('#discord h2').textContent = translations[currentLang].discordTitle;
    document.querySelector('footer p').innerHTML = `${translations[currentLang].copyright} &copy; ${new Date().getFullYear()} Akram AlJabari`;
    const aboutStats = document.querySelector('.about-stats');
    aboutStats.innerHTML = translations[currentLang].aboutStats.map(stat => `
        <div class="stat">
            <h3>${stat.title}</h3>
            <p>${stat.value}</p>
        </div>
    `).join('');
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = translations[currentLang].skillsCards.map(skill => `
        <div class="skill-card">
            <i class="fas ${skill.icon}"></i>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        </div>
    `).join('');
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = translations[currentLang].projectsCards.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a ${project.link ? `href="${project.link}" target="_blank"` : ``} class="project-link ${project.link ? `` : `dis-btn`}">${project.link ? translations[currentLang].projectLinkText : translations[currentLang].projectFixText}</a>
        </div>
    `).join('');
    const discordServers = document.querySelector('.discord-servers');
    discordServers.innerHTML = translations[currentLang].discordServersCards.map(server => `
        <div class="discord-server-card">
            <img src="${server.image}" alt="${server.title}">
            <h3>${server.title}</h3>
            <p>${server.description}</p>
            <div class="server-stats">
                <span><i class="fas fa-users"></i> ${server.members}+ ${translations[currentLang].memberText}</span>
                <span><i class="fas fa-shield-alt"></i> ${server.roleMe}</span>
            </div>
            <a href="${server.inviteLink}" target="_blank" class="discord-invite">${translations[currentLang].inviteText}</a>
        </div>
    `).join('');
    langToggle.innerHTML = `<i class="fas fa-globe"></i> ${currentLang === 'ar' ? 'EN' : 'عربي'}`;
}
document.addEventListener('DOMContentLoaded', initializeContent);
function updateLanguage() {
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = dir;
    initializeContent();
}
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
});

/*===== IMAGE MODAL =====*/
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <img src="" alt="Modal Image">
    </div>
`;
document.body.appendChild(modal);
document.addEventListener('click', function(e) {
    if (e.target.matches('.project-card img, .discord-server-card img')) {
        const img = e.target;
        modal.querySelector('img').src = img.src;
        modal.classList.add('active');
    }
});
modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('active');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});