let currentPage = 1;
const totalPages = 10;

// Function to turn the page (show the first page)
function turnPage() {
  showPage(currentPage);
}

// Function to show a specific page
function showPage(pageNumber) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page-${i}`).style.display = i === pageNumber ? 'flex' : 'none';
  }
}

// Function for "Previous" button
function prevPage() {
  currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
  showPage(currentPage);
}

// Function for "Next" button
function nextPage() {
  currentPage = currentPage < totalPages ? currentPage + 1 : 1;
  showPage(currentPage);
}

// Initially show the first page
showPage(currentPage);


const btnNao = document.getElementById('btn-nao');
const btnSim = document.getElementById('btn-sim');

// Mudar texto do botão "Não"
btnNao.addEventListener('mouseover', () => {
  btnNao.textContent = 'Sim'; // Altera o texto para "Sim"
});

btnNao.addEventListener('mouseout', () => {
  btnNao.textContent = 'Não'; // Restaura o texto para "Não"
});

// Efeito de confete ao clicar no botão "Sim"
btnSim.addEventListener('click', () => {
  createConfetti(); // Chama a função de confete
});



// Função para alterar o texto
function alterarTexto() {
  // Alterando o texto da tag <h1>
  const texto = document.getElementById('texto');
  texto.innerHTML = "Continua";

  const texto2 = document.getElementById('texto2');
  texto2.innerHTML = "Que nossa história possa render muitos capítulos, e que cada capítulo seja marcado como uma história de amor, repleta de felicidade e carinho. Eu te amo pretinha!";

  // Criando partículas de corações
  gerarCoracoes();
}


  // Ajusta o tamanho do canvas para cobrir a tela toda
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  // Função para desenhar um coração
  function drawHeart(x, y, size, color, opacity) {
    ctx.fillStyle = `rgba(${color}, ${opacity})`; // Define a cor com opacidade
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size / 2, x, y + size, x, y + size + size / 2);
    ctx.bezierCurveTo(x, y + size, x + size, y + size / 2, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.fill();
  }

  // Função para gerar confetti em formato de coração
  function createConfetti() {
    const particleCount = 100;
    const colors = ['255,105,180', '255,20,147', '255,69,0', '255,0,0']; // Cores RGB para facilitar uso da opacidade

    for (let i = 0; i < particleCount; i++) {
      hearts.push({
        x: Math.random() * canvas.width, // Posição X aleatória em toda a tela
        y: Math.random() * canvas.height, // Posição Y aleatória em toda a tela
        size: Math.random() * 15 + 5, // Tamanho aleatório dos corações
        color: colors[Math.floor(Math.random() * colors.length)], // Cor aleatória
        opacity: 1, // Opacidade inicial
        speed: Math.random() * 2 + 1, // Velocidade de subida
        scaleReduction: 1 // Redução do tamanho progressivamente
      });
    }

    animateHearts(); // Inicia a animação
  }

  // Função para animar os corações
  function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    hearts = hearts.filter(heart => heart.opacity > 0); // Remove corações que desapareceram

    hearts.forEach(heart => {
      drawHeart(heart.x, heart.y, heart.size, heart.color, heart.opacity);
      heart.y -= heart.speed; // Faz o coração subir

      // Inicia o desaparecimento gradualmente quando o coração se aproxima do topo
      if (heart.y < canvas.height * 0.2) {
        heart.opacity -= 0.02; // Reduz a opacidade mais rapidamente perto do topo
      }

      heart.size *= heart.scaleReduction; // Reduz o tamanho gradualmente
    });

    if (hearts.length > 0) {
      requestAnimationFrame(animateHearts); // Continua a animação enquanto houver corações
    }
  }

// Adiciona um ouvinte de clique ao botão
document.getElementById('botao').addEventListener('click', createConfetti);

