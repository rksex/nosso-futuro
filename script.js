let currentPage = 1;
const totalPages = 8;

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

// Função para exibir confetes
function createConfetti() {
  confetti({
    particleCount: 100, // Número de confetes
    spread: 100, // Abertura do efeito
    origin: { y: 0.6 }, // Origem vertical dos confetes
    colors: ['#FF0', '#0F0', '#00F', '#F00'], // Cores dos confetes
  });
}