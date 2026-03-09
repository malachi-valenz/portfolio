// Three.js starfield background for hero section

import * as THREE from 'three' 


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

    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        sizeAttenuation: true
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate)
        stars.rotation.y += 0.0003
        stars.rotation.x += 0.0001
        renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    window.addEventListener('resize', () =>{
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })
}