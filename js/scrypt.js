const btn = document.getElementById('confettiBtn');
const photo = document.getElementById('photoContainer');

btn.addEventListener('click', () => {
    // Dispara o confete
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#2f3542', '#ffffff', '#ffa502']
    });

    // Reinicia a animação de pulso
    photo.classList.remove('pulse-animation');
    void photo.offsetWidth; // Truque para forçar o reflow e reiniciar a animação
    photo.classList.add('pulse-animation');
});