// Menu mobile responsivo
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    };

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);

        if (this.navList.classList.contains(this.activeClass)) {
            document.addEventListener('click', this.handleOutsideClick);
        } else {
            document.removeEventListener('click', this.handleOutsideClick);
        };
    };

    handleOutsideClick(event) {
        if (!this.navList.contains(event.target) && !this.mobileMenu.contains(event.target)) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            document.removeEventListener('click', this.handleOutsideClick);
        };
    };

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    };
    
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        };
        return this;
    };
};

const mobileNavbar = new MobileNavbar (
    ".menu-btn",
    ".menu-list", 
    ".menu-list li",
);
mobileNavbar.init();


// Scroll automatico
const sobre = document.querySelector('.sobremin');
function scrollSobre() {
    event.preventDefault();
    sobre.scrollIntoView({ behavior:'smooth' });
};

// Scroll projetos
const proje = document.querySelector('.projetos');
function scrollProjeto() {
    event.preventDefault();
    proje.scrollIntoView({ behavior:'smooth' });
};

// Scroll habilidades
const habi = document.querySelector('.habilidades');
function scrollHabilidade() {
    event.preventDefault();
    habi.scrollIntoView({ behavior:'smooth' });
};

// Scroll para voltar
const btnTopo = document.querySelector('#btn-topo');
window.onscroll = function ativarBotao() {
    // Ativando botão de voltar
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    };
};
btnTopo.addEventListener('click', function() {
    event.preventDefault();
    scrollTo({
        top: 0,
        behavior:'smooth'
    });
});