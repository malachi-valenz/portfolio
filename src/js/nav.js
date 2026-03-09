//Handles all Navbar Behavior

export function initNav() {
    const navbar = document.querySelector('#navbar')
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('#nav-links a')


// Scroll listener for navbar background to adjust accordingly
window.addEventListener('scroll', () => {
    if (window.ScrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 6, 15, 0.95)'
    } else {
        navbar.style.backgroundColor = 'transparent'
    }
})

}