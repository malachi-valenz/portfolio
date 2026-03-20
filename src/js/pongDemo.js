export function initPongDemo() {
    const btn = document.getElementById('pong-btn')
    const modal = document.getElementById('pong-modal')
    const close = document.getElementById('pong-close')

    btn.addEventListener('click', () => modal.classList.add('open'))
    close.addEventListener('click', () => modal.classList.remove('open'))
    modal.addEventListener('click', (e) => {
        if (e.target == modal) modal.classList.remove('open')
    })
}