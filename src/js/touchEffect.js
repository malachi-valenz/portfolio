import gsap from 'gsap'

export function initTouchEffect() {
    if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) return

    document.addEventListener('touchstart', (e) => {
        alert('tap detected')
    })

    document.addEventListener('touchstart', (e) => {
        e.preventDefault()

        const touch = e.changedTouches[0]
        const ripple = document.createElement('div')
        ripple.classList.add('touch-ripple')

        document.body.appendChild(ripple)

        gsap.set(ripple, {
            x: touch.clientX,
            y: touch.clientY
        })

        gsap.to(ripple, {
            scale: 6,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        })
    })
}