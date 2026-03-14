export function initScrollProgress() {
    const bar = document.querySelector('#scroll-progress')

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrollTop / docHeight) * 100
        bar.style.width = progress + '%'
    })
}