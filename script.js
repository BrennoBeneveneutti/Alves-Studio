const logoCard = document.getElementById('logoCard');
const img = logoCard.querySelector('img');

logoCard.addEventListener('mousemove', (e) => {
    const rect = logoCard.getBoundingClientRect();
    
    // Calcula a posição do mouse em relação ao centro da imagem
    const x = e.clientX - rect.left - rect.width / 6;
    const y = e.clientY - rect.top - rect.height / 6;
    
    // Define a intensidade da rotação (dividir por um valor maior reduz a inclinação)
    const rotateX = -y / 4;
    const rotateY = x / 6;
    
    // Aplica a rotação 3D e um leve zoom
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
});

// Reseta a posição original da imagem quando o mouse sai de cima
logoCard.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});