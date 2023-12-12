document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const emojiContainer = document.getElementById('emoji-container');

    // Função para escolher uma cor aleatória de roxo escuro
    function getRandomPurpleColor() {
        const purpleColors = ['#4B0082', '#800080', '#483D8B', '#9932CC', '#8A2BE2'];
        return purpleColors[Math.floor(Math.random() * purpleColors.length)];
    }

    // Função para escolher um emoji aleatório relacionado a sistemas operacionais
    function getRandomOSEmoji() {
        const osEmojis = ['💻', '🖥️', '📱', '⌚', '🕹️', '🖨️', '🔧'];
        return osEmojis[Math.floor(Math.random() * osEmojis.length)];
    }

    // Função para atualizar o título e o emoji
    function updateTitleAndEmoji() {
        // Atualiza a cor do título
        title.style.color = getRandomPurpleColor();

        // Atualiza o emoji
        emojiContainer.textContent = getRandomOSEmoji();
    }

    // Atualiza o título e o emoji a cada 1000 milissegundos (1 segundo)
    setInterval(updateTitleAndEmoji, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    
    // Função para criar o efeito de onda vertical
    function animateTitle() {
        const offsetY = 10 * Math.sin(Date.now() / 500); // Ajuste os valores conforme necessário
        title.style.transform = `translateY(${offsetY}px)`;
    }

    // Atualiza o deslocamento vertical do título a cada 20 milissegundos
    setInterval(animateTitle, 20);
});
