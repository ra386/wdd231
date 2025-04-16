// hamburger-menu.mjs
export function setupHamburgerMenu() {
    document.getElementById('ham').addEventListener('click', function() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
        this.classList.toggle('close-btn');
        
       
        this.style.transform = 'none';
    });
}