// Three.js starfield background for hero section

import * as THREE from 'three' 
import gsap from 'gsap'


export function initHero() {
    const canvas = document.querySelector('#hero-canvas')


    // Scene Setup
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 300

    const positions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100
    }

    starGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    )

    const canvas2d = document.createElement('canvas')
    canvas2d.width = 32
    canvas2d.height = 32
    const ctx = canvas2d.getContext('2d')
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(16, 16, 16, 0, Math.PI * 2)
    ctx.fill()

    const starTexture = new THREE.CanvasTexture(canvas2d)

    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.95,
        sizeAttenuation: true,
        map: starTexture,
        transparent: true,
        alphaTest: 0.01
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate)
        stars.rotation.y += 0.0007
        stars.rotation.x += 0.001
        renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    window.addEventListener('resize', () =>{
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    const tl = gsap.timeline({ delay: 0.3})

    tl.from('#hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('#hero-name', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.6')
    .from('#hero-cta', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.6')
}