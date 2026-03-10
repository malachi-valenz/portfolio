import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export function initAbout () {
    gsap.from('#about-content h2', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    gsap.from('#about-content p', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
    })
}