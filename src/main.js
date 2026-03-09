import './style.css'
import { initNav } from './js/nav.js'
import { initHero } from './js/hero.js'


// Initialize once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initHero()
})