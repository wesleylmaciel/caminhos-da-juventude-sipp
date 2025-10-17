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
let turnOrder = []; 
let missTurnCount = {}; 
let currentPlayerIndex = 0;
let setupPhase = true; 
let playerToMove = null;
let gameFinished = false; 
let lastDrawnCardIndex = -1;

const tokenOffsets = {
    'red': { x: -5, y: -5 },
    'blue': { x: 5, y: -5 },
    'green': { x: -5, y: 5 },
    'yellow': { x: 5, y: 5 }
};

// Variável para rastrear o peão que está sendo arrastado ou tocado
let draggedToken = null; 

// --- FUNÇÕES DE LÓGICA DE TURNO ---

function updateTurnDisplay() {
    if (turnOrder.length === 0) {
        playerListDisplay.innerHTML = '<p>Arraste os peões para o Início na ordem desejada.</p>';
        activePlayerInfo.textContent = 'Próximo Grupo: Nenhum (Defina a ordem)';
        return;
    }

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
    if (gameFinished || setupPhase) return;
    playerToMove = null;
    drawCardBtn.disabled = true;
    currentPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;
    let nextPlayerColor = turnOrder[currentPlayerIndex];

    if (missTurnCount[nextPlayerColor] > 0) {
        missTurnCount[nextPlayerColor]--;
        currentTurnDisplay.textContent = `Turno de ${nextPlayerColor.toUpperCase()} - PULA VEZ! Faltam ${missTurnCount[nextPlayerColor]} turnos.`;
        setTimeout(advanceTurn, 2000); 
    } else {
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
    if (gameFinished || setupPhase || !playerToMove) return;

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
        
        newPosition = Math.max(0, Math.min(totalHouses - 1, newPosition));

        playerPositions[playerColor] = newPosition;

        const targetHouse = houses[newPosition];
        centerTokenOnHouse(playerColor, targetHouse);

        diceResult.textContent = `Ação: ${card.type === 'oportunidade' ? 'AVANÇOU' : 'RETROCEDEU'} ${Math.abs(moveDistance)} casas.`;

        if (newPosition === totalHouses - 1) {
            alert(`FIM DE JOGO! O grupo ${playerColor.toUpperCase()} chegou à VITÓRIA!`);
            gameFinished = true;
            currentTurnDisplay.textContent = 'FIM DE JOGO!';
            drawCardBtn.disabled = true;
            return;
        }

        advanceTurn();

    }, 2500); // 2.5 segundos para a leitura da carta
}

// --- FUNÇÕES DE INTERAÇÃO E VISUAIS ---

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

// --- FUNÇÃO DE DROP (Usada por Drag e Touch) ---
function finalizeDrop(playerColor, dropTarget) {
    const startHouse = houses[0];

    // Verifica se o elemento de soltura (ou um de seus pais) é a casa de Início
    if (dropTarget && (dropTarget === startHouse || startHouse.contains(dropTarget))) {
        
        if (!turnOrder.includes(playerColor)) {
            turnOrder.push(playerColor);
        }

        centerTokenOnHouse(playerColor, houses[0]);

        updateTurnDisplay();
        
        if (turnOrder.length === allPlayers.length) {
            setupPhase = false;
            playerToMove = turnOrder[currentPlayerIndex];
            drawCardBtn.disabled = false;
            currentTurnDisplay.textContent = 'Turno: Jogo Iniciado';
            updateTurnDisplay();
        }
    } else {
        // Retorna o peão para a posição inicial se o drop falhar
        centerTokenOnHouse(playerColor, houses[0]);
    }
}

// --- DRAG and DROP (Desktop) ---

function handleDragStart(e) {
    if (!setupPhase) return;
    const playerColor = e.target.getAttribute('data-group');
    e.dataTransfer.setData('text/plain', playerColor);
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('dragging');
    draggedToken = e.target; // Define para que o handleDragEnd possa limpar
}

function handleDragOver(e) {
    if (!setupPhase) return;
    e.preventDefault(); 
    if (e.currentTarget.classList.contains('drop-target')) {
        e.dataTransfer.dropEffect = 'move';
    }
}

function handleDrop(e) {
    if (!setupPhase) return;
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    // A cor vem do dataTransfer para o Desktop
    const playerColor = e.dataTransfer.getData('text/plain');
    const token = document.getElementById(`player-token-${playerColor}`);
    
    finalizeDrop(playerColor, e.currentTarget);
    
    if (token) {
        token.classList.remove('dragging');
    }
}

// --- TOUCH EVENTS (Mobile) ---

function getTouchPos(e) {
    const touch = e.touches[0] || e.changedTouches[0];
    return { x: touch.clientX, y: touch.clientY };
}

function getCenterHousePosition(houseElement) {
    const rect = houseElement.getBoundingClientRect();
    const boardRect = document.querySelector('.game-board').getBoundingClientRect();
    const x = (rect.left - boardRect.left) + (rect.width / 2);
    const y = (rect.top - boardRect.top) + (rect.height / 2);
    return { x, y };
}

function handleTouchStart(e) {
    if (!setupPhase || !e.target.classList.contains('player-token')) return;

    e.preventDefault();
    draggedToken = e.target;
    draggedToken.classList.add('dragging');

    // Captura a posição de início do toque no peão
    const tokenRect = draggedToken.getBoundingClientRect();
    draggedToken.offsetX = getTouchPos(e).x - tokenRect.left;
    draggedToken.offsetY = getTouchPos(e).y - tokenRect.top;

    // Define a posição absoluta (necessário para o touchmove funcionar bem no mobile)
    draggedToken.style.position = 'absolute';
    draggedToken.style.top = '0px';
    draggedToken.style.left = '0px';
}

function handleTouchMove(e) {
    if (!setupPhase || !draggedToken) return;

    e.preventDefault();

    const touchPos = getTouchPos(e);
    const boardRect = document.querySelector('.game-board').getBoundingClientRect();

    // Calcula a nova posição relativa ao game-board
    let newX = touchPos.x - boardRect.left - draggedToken.offsetX;
    let newY = touchPos.y - boardRect.top - draggedToken.offsetY;
    
    // Aplica a transformação de posição
    draggedToken.style.transform = `translate(${newX}px, ${newY}px)`;
}

function handleTouchEnd(e) {
    if (!setupPhase || !draggedToken) return;

    e.preventDefault();

    const playerColor = draggedToken.getAttribute('data-group');
    const touch = e.changedTouches[0];
    
    // Usa document.elementFromPoint para ver onde o peão foi solto
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Finaliza o drop
    finalizeDrop(playerColor, dropTarget);
    
    // Limpeza
    draggedToken.classList.remove('dragging');
    draggedToken = null;
    
    // Reinicia a posição do peão para o esquema de transform original
    centerTokenOnHouse(playerColor, houses[0]); 
}

// --- INICIALIZAÇÃO E LISTENERS ---

drawCardBtn.addEventListener('click', drawCardAndMove);

window.onload = function() {
    const startHouse = houses[0];
    
    // Posição inicial dos peões
    centerTokenOnHouse('red', startHouse);
    centerTokenOnHouse('blue', startHouse);
    centerTokenOnHouse('green', startHouse);
    centerTokenOnHouse('yellow', startHouse);
    
    // Adiciona a div placeholder se ela não estiver no HTML (para que o JS possa manipulá-la)
    if (!document.querySelector('.card-image-placeholder')) {
        cardDisplay.insertAdjacentHTML('afterbegin', '<div class="card-image-placeholder"></div>');
    }
    
    updateTurnDisplay(); 

    // Adiciona LISTENERS para DESKTOP (Drag and Drop)
    document.querySelectorAll('.player-token').forEach(token => {
        token.addEventListener('dragstart', handleDragStart);
        token.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
            draggedToken = null;
        });
    });

    // Adiciona LISTENERS para o DROP TARGET (Casa Início)
    document.querySelectorAll('.drop-target').forEach(house => {
        house.addEventListener('dragover', handleDragOver);
        house.addEventListener('drop', handleDrop);
    });

    // Adiciona LISTENERS para TOUCH (Mobile)
    document.querySelectorAll('.player-token').forEach(token => {
        token.addEventListener('touchstart', handleTouchStart);
    });
    // Adiciona touchmove e touchend ao corpo para rastrear o movimento em qualquer lugar da tela
    document.body.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.body.addEventListener('touchend', handleTouchEnd);
};
