const wrapper = document.getElementById('confetti-wrapper');
const colors = ['#ff0000', '#ffd700', '#ff69b4', '#00ff00', '#00bfff', '#ffffff'];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        confetti.style.animationDelay = Math.random() * 5 + 's';
        
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        wrapper.appendChild(confetti);
    }
}

createConfetti();
