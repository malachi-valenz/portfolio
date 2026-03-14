import './style.css'
import { initNav } from './js/nav.js'
import { initHero } from './js/hero.js'
import { initAnimations } from './js/animations.js'
import { initScrollProgress } from './js/scrollProgress.js'
import { initCursor } from './js/cursor.js'


// Initialize once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initHero()
    initAnimations()
    initScrollProgress()
    initCursor()

    document.querySelector('#footer-year').textContent = '©' + new Date().getFullYear()
})