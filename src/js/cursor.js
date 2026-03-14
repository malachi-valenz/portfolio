import gsap from 'gsap'


export function initCursor() {
    const dot = document.querySelector('#cursor-dot')
    const ring = document.querySelector('#cursor-ring')

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY

        gsap.set(dot, {
            x: mouseX,
            y: mouseY
        })
    })

    function animateRing() {
        ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12

        gsap.set(ring, {
            x: ringX,
            y: ringY
        })

        requestAnimationFrame(animateRing)
    }

    animateRing()


    const interactives = document.querySelectorAll('a, button')

    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.width = '60px'
            ring.style.height = '60px'
            ring.style.borderColor = 'var(--color-secondary)'
        })

        el.addEventListener('mouseleave', () => {
            ring.style.width = '35px'
            ring.style.height = '35px'
            ring.style.borderColor = 'var(--color-primary)'
        })
    })
}