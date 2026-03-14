//Handles all Navbar Behavior

export function initNav() {
    const navbar = document.querySelector('#navbar')
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('#nav-links a')


// Scroll listener for navbar background to adjust accordingly
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 6, 15, 0.95)'
    } else {
        navbar.style.backgroundColor = 'transparent'
    }
})

const hamburger = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#mobile-menu')
const mobileLinks = document.querySelectorAll('#mobile-links a')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('open')
})

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open')
        mobileMenu.classList.remove('open')
    })
})
}