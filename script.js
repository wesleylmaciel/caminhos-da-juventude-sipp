// O CONTEÚDO DAS CARTAS: Suas cartas de Desafio e Oportunidade
const cards = [
    // --- CARTAS DE OPORTUNIDADE (Positivas - Avança casas) ---
    // Cartas originais
    { type: 'oportunidade', title: 'Curso Técnico Gratuito', description: 'Você conseguiu uma bolsa em um curso técnico gratuito.', move: 2, imageFile: 'oportunidade-1.jpg' },
    { type: 'oportunidade', title: 'Fortalecimento Escolar', description: 'A escola abriu um projeto de leitura e escrita que fortaleceu suas habilidades.', move: 1, imageFile: 'oportunidade-2.jpg' },
    { type: 'oportunidade', title: 'Apoio Familiar', description: 'Um parente ajudou você a pagar o cursinho preparatório.', move: 3, imageFile: 'oportunidade-3.jpg' },
    { type: 'oportunidade', title: 'Oficina Profissionalizante', description: 'Participou de uma oficina e recebeu certificado.', move: 2, imageFile: 'oportunidade-4.jpg' },
    { type: 'oportunidade', title: 'Mentoria Docente', description: 'Um professor se tornou seu mentor e ajudou a melhorar seu rendimento escolar.', move: 1, imageFile: 'oportunidade-5.jpg' },
    { type: 'oportunidade', title: 'Estágio na Área', description: 'Você conseguiu um estágio na área que gosta.', move: 2, imageFile: 'oportunidade-6.jpg' },
    { type: 'oportunidade', title: 'Reforço Escolar', description: 'A escola ofereceu reforço escolar gratuito e você aproveitou bem.', move: 1, imageFile: 'oportunidade-7.jpg' },
    { type: 'oportunidade', title: 'Projeto Cultural', description: 'Participou de um projeto cultural e ampliou suas experiências.', move: 2, imageFile: 'oportunidade-8.jpg' },
    
    // Novas Cartas de Oportunidade Adicionadas
    { type: 'oportunidade', title: 'Bolsa de Estudos Parcial', description: 'Você conseguiu uma bolsa de estudos parcial, aliviando o custo dos estudos.', move: 2, imageFile: 'oportunidade-9.jpg' },
    { type: 'oportunidade', title: 'Vestibular Aprovado!', description: 'Você passou no vestibular para o curso dos seus sonhos!', move: 3, imageFile: 'oportunidade-10.jpg' },
    { type: 'oportunidade', title: 'Qualificação Profissional', description: 'Você participou de um curso de qualificação profissional gratuito.', move: 2, imageFile: 'oportunidade-11.jpg' },
    { type: 'oportunidade', title: 'Primeiro Emprego', description: 'Foi chamado para a primeira entrevista de emprego e conseguiu a vaga!', move: 3, imageFile: 'oportunidade-12.jpg' },
    { type: 'oportunidade', title: 'Suporte Familiar', description: 'Sua família te apoiou em uma decisão difícil, dando a segurança necessária para avançar.', move: 2, imageFile: 'oportunidade-13.jpg' },
    { type: 'oportunidade', title: 'Melhora da Autoestima', description: 'Você começou a praticar um esporte e melhorou sua autoestima e concentração.', move: 1, imageFile: 'oportunidade-14.jpg' },
    { type: 'oportunidade', title: 'Ações Sociais', description: 'Participou de um projeto social e aprendeu novas habilidades de liderança e comunicação.', move: 2, imageFile: 'oportunidade-15.jpg' },
    { type: 'oportunidade', title: 'Acesso à Tecnologia', description: 'Você ganhou acesso à internet de qualidade e pôde estudar melhor e com mais recursos.', move: 2, imageFile: 'oportunidade-16.jpg' },
    { type: 'oportunidade', title: 'Reconhecimento Online', description: 'Usou redes sociais para divulgar um projeto e recebeu apoio inesperado.', move: 3, imageFile: 'oportunidade-17.jpg' },
    { type: 'oportunidade', title: 'Saúde Mental', description: 'Você começou a cuidar da saúde mental com acompanhamento psicológico, melhorando seu foco.', move: 2, imageFile: 'oportunidade-18.jpg' },
    { type: 'oportunidade', title: 'Rotina Saudável', description: 'Adotou uma rotina saudável que aumentou sua disposição e energia para os estudos e trabalho.', move: 1, imageFile: 'oportunidade-19.jpg' },
    
    // --- NOVAS CARTAS DE OPORTUNIDADE (AVANÇO DE 2 CASAS) ---
    { type: 'oportunidade', title: 'Aprovação em Curso Extracurricular', description: 'Você se destacou em um curso de idioma ou tecnologia.', move: 2, imageFile: 'oportunidade-20.jpg' },
    { type: 'oportunidade', title: 'Bolsa de Iniciação Científica', description: 'Você conseguiu uma bolsa de estudos para participar de um projeto de pesquisa na escola.', move: 2, imageFile: 'oportunidade-21.jpg' },
    { type: 'oportunidade', title: 'Reconhecimento Comunitário', description: 'Seu esforço em um projeto social foi reconhecido, abrindo portas para novas parcerias.', move: 2, imageFile: 'oportunidade-22.jpg' },
    { type: 'oportunidade', title: 'Melhora no Transporte Público', description: 'A linha de ônibus foi otimizada, permitindo que você ganhe mais tempo de estudo ou descanso.', move: 2, imageFile: 'oportunidade-23.jpg' },
    { type: 'oportunidade', title: 'Organização Financeira', description: 'Você fez um planejamento financeiro e conseguiu guardar dinheiro para investir em material didático.', move: 2, imageFile: 'oportunidade-24.jpg' },
    { type: 'oportunidade', title: 'Reorganização Pessoal', description: 'Você tirou um período de férias para descanso e reorganização, voltando aos estudos com foco renovado. Avance 1 casa.', move: 1, imageFile: 'oportunidade-25.jpg' },


    // --- CARTAS DE DESAFIO (Negativas - Retrocede casas) ---
    { type: 'desafio', title: 'Cansaço Noturno', description: 'Você precisa trabalhar à noite e chega cansado para a escola.', move: -2, imageFile: 'desafio-1.jpg' },
    { type: 'desafio', title: 'Perda de Prova', description: 'O ônibus atrasou e você perdeu a prova. Retroceda uma casa para recuperar o prejuízo.', move: -1, imageFile: 'desafio-2.jpg' }, 
    { type: 'desafio', title: 'Dificuldades FinanCeiras', description: 'Sua família passa por dificuldades financeiras e você precisa trancar os estudos.', move: -3, imageFile: 'desafio-3.jpg' },
    { type: 'desafio', title: 'Cuidado com Irmãos', description: 'Precisa cuidar dos irmãos menores e perde tempo de estudo. Retroceda uma casa para reorganizar seu tempo.', move: -1, imageFile: 'desafio-4.jpg' },
    { type: 'desafio', title: 'Falta de Material', description: 'Faltou dinheiro para o material escolar.', move: -1, imageFile: 'desafio-5.jpg' },
    { type: 'desafio', title: 'Hora Extra', description: 'Você foi chamado para fazer hora extra no trabalho e não conseguiu estudar para a prova.', move: -2, imageFile: 'desafio-6.jpg' },
    { type: 'desafio', title: 'Doença Inesperada', description: 'Uma doença inesperada o afastou da escola por alguns dias. Retroceda uma casa para se recuperar totalmente.', move: -1, imageFile: 'desafio-7.jpg' },
    
    // --- NOVAS CARTAS DE DESAFIO (RETROCESSO DE 1 CASA) ---
    { type: 'desafio', title: 'Reforma Escolar Atrasada', description: 'A reforma na escola atrasou, causando desorganização e impactando temporariamente seu foco.', move: -1, imageFile: 'desafio-8.jpg' },
    { type: 'desafio', title: 'Problemas com Documentação', description: 'Houve um problema com sua documentação acadêmica ou profissional. Retroceda uma casa para resolver a situação.', move: -1, imageFile: 'desafio-9.jpg' }
];

// VARIÁVEIS DE ESTADO DO JOGO
const totalHouses = document.querySelectorAll('.house').length;
const houses = document.querySelectorAll('.house');
const drawCardBtn = document.getElementById('draw-card-btn');
const diceResult = document.getElementById('dice-result');
const cardDisplay = document.getElementById('card-display');
const currentTurnDisplay = document.getElementById('current-turn');
const activePlayerInfo = document.getElementById('active-player-info');
const playerListDisplay = document.getElementById('player-list');

const playerPositions = {
    'red': 0,
    'blue': 0,
    'green': 0,
    'yellow': 0
};

const allPlayers = ['red', 'blue', 'green', 'yellow'];

// ORDEM DE JOGO FIXA: Blue, Red, Green, Yellow
let turnOrder = ['blue', 'red', 'green', 'yellow']; 
let missTurnCount = {}; 
let currentPlayerIndex = 0;
let playerToMove = turnOrder[currentPlayerIndex]; // O primeiro jogador é definido
let gameFinished = false; 
let lastDrawnCardIndex = -1;

const tokenOffsets = {
    'red': { x: 5, y: -5 }, // Ajuste para melhor visualização na Casa Início
    'blue': { x: -5, y: -5 },
    'green': { x: 5, y: 5 },
    'yellow': { x: -5, y: 5 }
};

// --- FUNÇÕES DE LÓGICA DE TURNO ---

function updateTurnDisplay() {
    let listHtml = '';
    turnOrder.forEach((playerColor, index) => {
        let classes = '';
        if (index === currentPlayerIndex) {
            classes += 'is-active';
            activePlayerInfo.textContent = `Turno: Grupo ${playerColor.toUpperCase()}`;
        }
        listHtml += `<p class="${classes}" style="color: ${playerColor};">Grupo ${playerColor.toUpperCase()}</p>`;
    });
    playerListDisplay.innerHTML = listHtml;
}

function advanceTurn() {
    if (gameFinished) return;
    
    // Desabilita o botão para evitar cliques múltiplos durante a transição
    drawCardBtn.disabled = true;

    // Avança para o próximo jogador
    currentPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;
    let nextPlayerColor = turnOrder[currentPlayerIndex];

    if (missTurnCount[nextPlayerColor] > 0) {
        missTurnCount[nextPlayerColor]--;
        currentTurnDisplay.textContent = `Turno de ${nextPlayerColor.toUpperCase()} - PULA VEZ! Faltam ${missTurnCount[nextPlayerColor]} turnos.`;
        
        // Se ainda tiver que pular, avança o turno automaticamente
        setTimeout(advanceTurn, 2000); 
    } else {
        // Habilita o botão para o novo jogador
        playerToMove = nextPlayerColor;
        drawCardBtn.disabled = false; 
        updateTurnDisplay();
    }
}

function getRandomCardIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === lastDrawnCardIndex && cards.length > 1);
    lastDrawnCardIndex = newIndex;
    return newIndex;
}

// Lógica principal do jogo: Sortear carta, exibir e mover o peão.
function drawCardAndMove() {
    if (gameFinished || !playerToMove) return;

    drawCardBtn.disabled = true;

    const cardIndex = getRandomCardIndex();
    const card = cards[cardIndex];
    const playerColor = playerToMove;
    let moveDistance = card.move;

    // EXIBIR A CARTA
    cardDisplay.classList.remove('oportunidade', 'desafio');
    cardDisplay.classList.add(card.type);

    const cardImagePlaceholder = document.querySelector('.card-image-placeholder');
    if(cardImagePlaceholder) {
        cardImagePlaceholder.style.backgroundImage = `url('img/${card.imageFile}')`;
    }

    cardDisplay.innerHTML = `
        <div class="card-image-placeholder" style="background-image: url('img/${card.imageFile}')"></div>
        <h2 style="color: ${card.type === 'oportunidade' ? '#28a745' : '#dc3545'};">${card.title.toUpperCase()}</h2>
        <h3>${card.type === 'oportunidade' ? 'OPORTUNIDADE' : 'DESAFIO'}</h3>
        <p>${card.description}</p>
        <p class="move-info"><strong>Movimento: ${moveDistance > 0 ? `AVANÇA ${moveDistance} CASAS` : `RETROCEDE ${Math.abs(moveDistance)} CASAS`}</strong></p>
        <div class="reflection-prompt">
            <p>Ponto de Reflexão:</p>
            <p>${card.type === 'oportunidade' ? 'Como você pode aproveitar ou potencializar essa oportunidade em sua vida real?' : 'Como você pode se preparar ou superar um desafio como este?'}</p>
        </div>
    `;


    // Ação de movimento após um pequeno atraso para o jogador ler a carta
    setTimeout(() => {
        // MOVIMENTO
        let newPosition = playerPositions[playerColor] + moveDistance;
        
        // Garante que a posição esteja dentro dos limites do tabuleiro (0 a totalHouses - 1)
        newPosition = Math.max(0, Math.min(totalHouses - 1, newPosition));

        playerPositions[playerColor] = newPosition;

        const targetHouse = houses[newPosition];
        centerTokenOnHouse(playerColor, targetHouse);

        diceResult.textContent = `Ação: ${card.type === 'oportunidade' ? 'AVANÇOU' : 'RETROCEDEU'} ${Math.abs(moveDistance)} casas.`;

        // Verifica se o jogo acabou
        if (newPosition === totalHouses - 1) {
            alert(`FIM DE JOGO! O grupo ${playerColor.toUpperCase()} chegou à VITÓRIA!`);
            gameFinished = true;
            currentTurnDisplay.textContent = 'FIM DE JOGO!';
            drawCardBtn.disabled = true;
            return;
        }

        // Passa para o próximo turno
        advanceTurn();

    }, 2500); // 2.5 segundos para a leitura da carta
}

// --- FUNÇÃO VISUAL: Posiciona o Peão ---

function centerTokenOnHouse(playerColor, houseElement) {
    const token = document.getElementById(`player-token-${playerColor}`);
    const rect = houseElement.getBoundingClientRect();
    const boardRect = document.querySelector('.game-board').getBoundingClientRect();
    const offsetX = tokenOffsets[playerColor].x;
    const offsetY = tokenOffsets[playerColor].y;
    
    // Calcula a posição absoluta no board
    const x = (rect.left - boardRect.left) + (rect.width / 2) - (token.offsetWidth / 2) + offsetX;
    const y = (rect.top - boardRect.top) + (rect.height / 2) - (token.offsetHeight / 2) + offsetY;

    token.style.transform = `translate(${x}px, ${y}px)`;
}

// --- INICIALIZAÇÃO E LISTENERS ---

drawCardBtn.addEventListener('click', drawCardAndMove);

window.onload = function() {
    const startHouse = houses[0];
    
    // 1. Posiciona os peões na casa inicial
    centerTokenOnHouse('red', startHouse);
    centerTokenOnHouse('blue', startHouse);
    centerTokenOnHouse('green', startHouse);
    centerTokenOnHouse('yellow', startHouse);
    
    // 2. Adiciona a div placeholder para a imagem (se não estiver no HTML)
    if (!document.querySelector('.card-image-placeholder')) {
        cardDisplay.insertAdjacentHTML('afterbegin', '<div class="card-image-placeholder"></div>');
    }
    
    // 3. Inicializa o painel de ordem
    updateTurnDisplay(); 

    // 4. Habilita o botão para o primeiro jogador
    drawCardBtn.disabled = false;
};
