import './style.css'
import { initNav } from './js/nav.js'
import { initHero } from './js/hero.js'
import { initAnimations } from './js/animations.js'
import { initScrollProgress } from './js/scrollProgress.js'
import { initCursor } from './js/cursor.js'
import { initTouchEffect } from './js/touchEffect.js'
import { initMusic } from './js/music.js'
import { initSpamDemo } from './js/spamDemo.js'
import { initPongDemo } from './js/pongDemo.js'

// Initialize once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initHero()
    initAnimations()
    initScrollProgress()
    initCursor()
    initTouchEffect()
    initMusic()
    initSpamDemo()
    initPongDemo()

    document.querySelector('#footer-year').textContent = '©' + new Date().getFullYear()
})