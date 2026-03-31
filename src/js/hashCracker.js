export function initHashCracker() {
    const modal = document.getElementById('hashcracker-modal');
    const openBtn = document.getElementById('hashcracker-btn');
    const closeBtn = document.getElementById('hashcracker-close');
    const crackBtn = document.getElementById('hashcracker-submit');
    const hashInput = document.getElementById('hashcracker-input');
    const algoSelect = document.getElementById('hashcracker-algo');
    const modeSelect = document.getElementById('hashcracker-mode');
    const result = document.getElementById('hashcracker-result');

    let wasmReady = false;
    let crackHash = null;

    // Load the WASM module
    const script = document.createElement('script');
    script.src = '/hashcracker.js';
    script.onload = () => {
        Module.onRuntimeInitialized = () => {
            crackHash = Module.cwrap('crackHash', 'string', ['string', 'string', 'string', 'string', 'number']);
            wasmReady = true;
        };
    };
    document.head.appendChild(script);

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        result.textContent = '';
        hashInput.value = '';
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            result.textContent = '';
            hashInput.value = '';
        }
    });

    // Crack button
    crackBtn.addEventListener('click', () => {
        if (!wasmReady) {
            result.textContent = 'LOADING...';
            result.className = '';
            return;
        }

        const hash = hashInput.value.trim();
        const algo = algoSelect.value;
        const mode = modeSelect.value;

        if (!hash) {
            result.textContent = 'ENTER A HASH';
            result.className = '';
            return;
        }

        result.textContent = 'CRACKING...';
        result.className = '';

        // Run in setTimeout so UI updates before blocking
        setTimeout(() => {
            const found = crackHash(hash, algo, mode, 'rockyou_mini.txt', 4);
            if (found === 'NOT_FOUND') {
                result.textContent = 'NOT FOUND';
                result.className = 'not-found';
            } else {
                result.textContent = 'CRACKED: ' + found;
                result.className = 'found';
            }
        }, 50);
    });
}