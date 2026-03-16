export function initMusic() {
    const btn = document.querySelector('#mute-btn')
    const audio = document.querySelector('#bg-music')
    const canvas = document.querySelector('#visualizer-canvas')
    const ctx = canvas.getContext('2d')


    canvas.width = 44
    canvas.height = 44

    let audioContext = null
    let analyser = null
    let dataArray = null
    let isPlaying = false
    let isInitialized = false

    function initAudio() {
        audioContext = new AudioContext()
        const source = audioContext.createMediaElementSource(audio)
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 64

        source.connect(analyser)
        analyser.connect(audioContext.destination)

        dataArray = new Uint8Array(analyser.frequencyBinCount)
        isInitialized = true
    }

    function draw() {
        requestAnimationFrame(draw)

        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const radius = 18

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        if (!isInitialized || !isPlaying) {
            const barCount = 16
            for (let i = 0; i < barCount; i++) {
                const angle = (i / barCount) * Math.PI * 2
                const x1 = centerX + Math.cos(angle) * (radius - 4)
                const y1 = centerY + Math.sin(angle) * (radius - 4)
                const x2 = centerX + Math.cos(angle) * (radius - 6)
                const y2 = centerY + Math.sin(angle) * (radius - 6)

                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.strokeStyle = 'rgba(108, 99, 255, 0.4)'
                ctx.lineWidth = 2
                ctx.stroke()
            }
            return
        }

        analyser.getByteFrequencyData(dataArray)

        const barCount = analyser.frequencyBinCount
        for (let i = 0; i < barCount; i++) {
            const value = dataArray[i] / 255
            const barHeight = value * 12

            const angle = (i / barCount) * Math.PI * 2
            const x1 = centerX + Math.cos(angle) * (radius - 4)
            const y1 = centerY + Math.sin(angle) * (radius - 4)
            const x2 = centerX + Math.cos(angle) * (radius - 4 - barHeight)
            const y2 = centerY + Math.sin(angle) * (radius - 4 - barHeight)

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)

            const intensity = Math.floor(value * 255)
            ctx.strokeStyle = 'rgb(${108 + intensity * 0.5}, ${99}, ${255})'
            ctx.lineWidth = 2
            ctx.lineCap = 'round'
            ctx.stroke()
        }
    }

    btn.addEventListener('click', () => {
        if (!isInitialized) {
            initAudio()
            audio.play()
            isPlaying = true
        } else if (isPlaying) {
            audio.pause()
            isPlaying = false
        } else {
            audio.play()
            isPlaying = true
        }
    })

    draw()
}