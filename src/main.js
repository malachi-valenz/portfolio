import './style.css'
import { initNav } from './js/nav.js'
import { initHero } from './js/hero.js'
import { initAnimations } from './js/animations.js'
import { initScrollProgress } from './js/scrollProgress.js'
import { initCursor } from './js/cursor.js'
import { initTouchEffect } from './js/touchEffect.js'


// Initialize once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initHero()
    initAnimations()
    initScrollProgress()
    initCursor()
    initTouchEffect()

    document.querySelector('#footer-year').textContent = '©' + new Date().getFullYear()
})