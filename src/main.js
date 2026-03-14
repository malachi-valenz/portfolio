import './style.css'
import { initNav } from './js/nav.js'
import { initHero } from './js/hero.js'
import { initAbout } from './js/about.js'
import { initScrollProgress } from './js/scrollProgress.js'


// Initialize once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initHero()
    initAbout()
    initScrollProgress()
})