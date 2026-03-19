export function initSpamDemo() {
    console.log('running');
    const demoBtn = document.getElementById('demo-btn');
    console.log('demoBtn:', demoBtn);
    const demoModal = document.getElementById('demo-modal');
    const demoClose = document.getElementById('demo-close');
    const demoSubmit = document.getElementById('demo-submit');
    const demoInput = document.getElementById('demo-input');
    const demoResult = document.getElementById('demo-result');

    demoBtn.addEventListener('click', () => {
        console.log('Clicked')
        demoModal.classList.add('open')
    });
    
    demoClose.addEventListener('click', () => {
        demoModal.classList.remove('open');
        demoInput.value = '';
        demoResult.textContent = '';
        demoResult.className = '';
    });

    demoSubmit.addEventListener('click', async () => {
        const text = demoInput.value.trim();
        if (!text) return;

        demoResult.textContent = 'Classifying...';
        demoResult.className = '';

        const response = await fetch('https://spam-classifier-basic.onrender.com/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        demoResult.textContent = data.result == 'spam' ? '⚠ Spam' : '✓ Ham';
        demoResult.className = data.result;
    });
}