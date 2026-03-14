import gsap from 'gsap'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
    
    gsap.from('#about-content h2', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
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

    gsap.from('#certifications h2', {
        scrollTrigger: {
            trigger: '#certifications',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from('.cert-card', {
        scrollTrigger: {
            trigger: '#cert-grid',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
    })

    gsap.from('#projects h2', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects-grid',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
    })

    gsap.from('#contact h2', {
        scrollTrigger: {
            trigger: 'contact',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })


    gsap.from('#contact-subtext', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    })

    gsap.from('#contact-links a', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
    })
}