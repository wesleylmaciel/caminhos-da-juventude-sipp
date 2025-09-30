// O CONTEÚDO DAS CARTAS: Suas cartas de Desafio e Oportunidade
const cards = [
    // --- CARTAS DE OPORTUNIDADE (Positivas - Avança casas) ---
    { type: 'oportunidade', title: 'Curso Técnico Gratuito', description: 'Você conseguiu uma bolsa em um curso técnico gratuito.', move: 2 },
    { type: 'oportunidade', title: 'Fortalecimento Escolar', description: 'A escola abriu um projeto de leitura e escrita que fortaleceu suas habilidades.', move: 1 },
    { type: 'oportunidade', title: 'Apoio Familiar', description: 'Um parente ajudou você a pagar o cursinho preparatório.', move: 3 },
    { type: 'oportunidade', title: 'Oficina Profissionalizante', description: 'Participou de uma oficina e recebeu certificado.', move: 2 },
    { type: 'oportunidade', title: 'Mentoria Docente', description: 'Um professor se tornou seu mentor e ajudou a melhorar seu rendimento escolar.', move: 1 },
    { type: 'oportunidade', title: 'Estágio na Área', description: 'Você conseguiu um estágio na área que gosta.', move: 2 },
    { type: 'oportunidade', title: 'Reforço Escolar', description: 'A escola ofereceu reforço escolar gratuito e você aproveitou bem.', move: 1 },
    { type: 'oportunidade', title: 'Projeto Cultural', description: 'Participou de um projeto cultural e ampliou suas experiências.', move: 2 },
    
    // --- CARTAS DE DESAFIO (Negativas - Recua ou Fica Parado) ---
    { type: 'desafio', title: 'Perda de Foco', description: 'A distração com jogos e redes sociais fez você perder o foco nos estudos.', move: -1 },
    { type: 'desafio', title: 'Dificuldade Financeira', description: 'Uma dificuldade familiar fez você precisar trabalhar e reduzir seu tempo de estudo.', move: -2 },
    { type: 'desafio', title: 'Assédio ou Bullying', description: 'Sofreu assédio na escola ou bullying no caminho.', move: 0 },
    { type: 'desafio', title: 'Desistência Escolar', description: 'Colegas desistiram e você perdeu a motivação momentaneamente.', move: -1 },
    { type: 'desafio', title: 'Problema de Saúde', description: 'Um problema de saúde levou você a faltar algumas aulas importantes.', move: 0 },
    { type: 'desafio', title: 'Falta de Orientação', description: 'A falta de orientação profissional fez você se sentir perdido sobre o futuro.', move: -1 },
    { type: 'desafio', title: 'Influência Negativa', description: 'Uma má influência de um amigo desviou sua atenção da escola.', move: -2 },
    { type: 'desafio', title: 'Excesso de Faltas', description: 'Excesso de faltas comprometeu sua frequência e notas.', move: -1 }
];

// VARIÁVEIS DO JOGO E ESTADO DO TURNO
const drawCardBtn = document.getElementById('draw-card-btn');
const diceResultText = document.getElementById('dice-result');
const currentTurnText = document.getElementById('current-turn');
const activePlayerInfo = document.getElementById('active-player-info');
const cardDisplay = document.getElementById('card-display');

// Estado
let players = ['red', 'blue', 'green', 'yellow'];
let activePlayerIndex = 0;
let playerPositions = { 'red': 0, 'blue': 0, 'green': 0, 'yellow': 0 };
let cardDrawn = false; // Se a carta foi sorteada neste turno
let currentMove = 0; // O movimento da última carta sorteada
let tokenInDrag = null; // O peão que está sendo arrastado ou tocado
let tokenOffsetX = 0; // Usado para ajuste do toque no celular
let tokenOffsetY = 0; // Usado para ajuste do toque no celular


// --- LÓGICA DE TURNOS E BOTÃO ---

function updateTurnInfo() {
    const activePlayer = players[activePlayerIndex];
    currentTurnText.textContent = `Turno: Grupo ${activePlayer.toUpperCase()}`;
    activePlayerInfo.textContent = `Próximo Grupo: Arraste o peão ${activePlayer.toUpperCase()}`;

    // Mostra qual peão está ativo, se a carta já foi sorteada
    if (cardDrawn) {
        document.querySelectorAll('.player-token').forEach(token => {
            token.style.opacity = token.dataset.group === activePlayer ? '1' : '0.5';
        });
    } else {
         document.querySelectorAll('.player-token').forEach(token => {
            token.style.opacity = '1';
        });
        activePlayerInfo.textContent = `Próximo Grupo: Clique em "Sortear Carta"`;
    }
}

function endTurn() {
    // Esconde a carta
    cardDisplay.style.display = 'none';
    
    // Passa para o próximo jogador
    activePlayerIndex = (activePlayerIndex + 1) % players.length;
    cardDrawn = false;
    currentMove = 0;

    // Reabilita o botão para o próximo jogador
    drawCardBtn.disabled = false; 

    // Atualiza a informação do turno
    updateTurnInfo();
}

function drawCardAndMove() {
    if (cardDrawn) return; // Impede sorteio duplo
    
    const activePlayer = players[activePlayerIndex];

    // 1. Sorteia a carta
    const randomIndex = Math.floor(Math.random() * cards.length);
    const drawnCard = cards[randomIndex];
    currentMove = drawnCard.move;
    cardDrawn = true;
    drawCardBtn.disabled = true; // Desabilita o botão após sortear a carta

    // 2. Exibe a carta e a ação
    document.getElementById('card-title').textContent = drawnCard.title;
    document.getElementById('card-description').textContent = drawnCard.description;
    
    let moveText = '';
    if (currentMove > 0) {
        moveText = `AVANÇAR ${currentMove} CASO(S).`;
    } else if (currentMove < 0) {
        moveText = `RECUE ${Math.abs(currentMove)} CASO(S).`;
    } else {
        moveText = 'FICAR PARADO NESTE TURNO.';
    }
    
    document.getElementById('card-move-info').textContent = moveText;
    diceResultText.textContent = `Ação: ${drawnCard.type.toUpperCase()} - ${moveText}`;
    cardDisplay.style.display = 'block';

    // 3. Informa o jogador para mover
    updateTurnInfo();
}

// --- LÓGICA DE POSICIONAMENTO E DRAG/DROP ---

function moveTokenToHouse(playerToMove, targetIndex) {
    const token = document.getElementById(`player-token-${playerToMove}`);
    const targetHouse = document.querySelector(`.house[data-index="${targetIndex}"]`);
    
    if (token && targetHouse) {
        // Obtém a posição da casa alvo
        const houseRect = targetHouse.getBoundingClientRect();
        const boardRect = document.querySelector('.game-board').getBoundingClientRect();
        
        // Calcula a posição do token relativa ao tabuleiro
        let tokenX = houseRect.left - boardRect.left;
        let tokenY = houseRect.top - boardRect.top;
        
        // Ajusta a posição para centralizar o token e aplicar o offset para evitar sobreposição
        const tokenWidth = token.offsetWidth;
        const tokenHeight = token.offsetHeight;
        
        tokenX += (houseRect.width / 2) - (tokenWidth / 2);
        tokenY += (houseRect.height / 2) - (tokenHeight / 2);

        // Aplica um pequeno offset para que os peões não fiquem exatamente sobrepostos
        const offsetMultiplier = players.indexOf(playerToMove);
        const offset = offsetMultiplier * 5; // 5px de separação entre os peões

        token.style.left = `${tokenX + offset}px`;
        token.style.top = `${tokenY + offset}px`;

        // Atualiza a posição lógica
        playerPositions[playerToMove] = targetIndex;
    }
}

function handleDragStart(e) {
    const playerToMove = e.target.dataset.group;
    const activePlayer = players[activePlayerIndex];

    if (!cardDrawn || playerToMove !== activePlayer) {
        // Impede o arrasto se a carta não foi sorteada ou se não é o turno dele
        e.preventDefault();
        return; 
    }
    
    // Permite o drag
    e.dataTransfer.setData('text/plain', playerToMove);
    tokenInDrag = e.target;
}

function handleDragOver(e) {
    e.preventDefault(); // Permite o drop
}

function handleDrop(e) {
    e.preventDefault();
    const playerToMove = e.dataTransfer.getData('text/plain');
    const activePlayer = players[activePlayerIndex];
    
    if (!playerToMove || playerToMove !== activePlayer || !cardDrawn) {
        return; // Sai se não houver token ou não for o turno correto
    }

    const target = e.target.closest('.drop-target');
    if (target) {
        const targetIndex = parseInt(target.dataset.index);
        const currentIndex = playerPositions[activePlayer];

        // Calcula a posição esperada e a posição mínima/máxima permitida
        let expectedNewPosition = currentIndex + currentMove;
        
        // Limita a posição final ao máximo de casas (data-index 14)
        if (expectedNewPosition > 14) {
             expectedNewPosition = 14; 
        }

        // Limita a posição mínima (data-index 0)
        if (expectedNewPosition < 0) {
            expectedNewPosition = 0;
        }

        // Verifica se o jogador tentou mover para a posição correta (considerando o range)
        if (targetIndex === expectedNewPosition) {
            
            // Move o peão para a casa logicamente correta e atualiza o estado
            moveTokenToHouse(activePlayer, targetIndex);
            
            // Fim do turno (com movimento válido)
            endTurn();
        } else {
            alert(`Movimento inválido! Você deve ir para a casa ${expectedNewPosition}.`);
        }
    }
}

// --- ADAPTANDO DRAG/DROP PARA TOUCH (CELULAR) ---

function handleTouchStart(e) {
    const touch = e.touches[0];
    const token = touch.target.closest('.player-token');
    
    if (token) {
        const playerToMove = token.dataset.group;
        const activePlayer = players[activePlayerIndex];

        if (!cardDrawn || playerToMove !== activePlayer) {
            return; // Impede o toque se a carta não foi sorteada ou não é o turno
        }
        
        tokenInDrag = token;
        tokenInDrag.style.position = 'absolute';
        
        // Calcula o offset para que o token não salte quando começar o movimento
        const rect = token.getBoundingClientRect();
        tokenOffsetX = touch.clientX - rect.left;
        tokenOffsetY = touch.clientY - rect.top;
        
        e.preventDefault();
    }
}

function handleTouchMove(e) {
    if (tokenInDrag) {
        const touch = e.touches[0];
        const boardRect = document.querySelector('.game-board').getBoundingClientRect();
        
        // Calcula a nova posição relativa ao tabuleiro, ajustada pelo offset
        let newX = touch.clientX - boardRect.left - tokenOffsetX;
        let newY = touch.clientY - boardRect.top - tokenOffsetY;

        tokenInDrag.style.left = `${newX}px`;
        tokenInDrag.style.top = `${newY}px`;
        
        e.preventDefault();
    }
}

function handleTouchEnd(e) {
    if (tokenInDrag) {
        const activePlayer = players[activePlayerIndex];
        const token = tokenInDrag;
        
        // Acha o ponto de "drop" (onde o dedo foi levantado)
        const touchX = token.getBoundingClientRect().left + (token.offsetWidth / 2);
        const touchY = token.getBoundingClientRect().top + (token.offsetHeight / 2);

        // Encontra a casa sob o ponto de "drop"
        token.style.display = 'none'; // Temporariamente esconde para achar o elemento de baixo
        const targetElement = document.elementFromPoint(touchX, touchY);
        token.style.display = 'block';

        const target = targetElement ? targetElement.closest('.drop-target') : null;

        if (target) {
            const targetIndex = parseInt(target.dataset.index);
            const currentIndex = playerPositions[activePlayer];

            // A mesma lógica de validação de movimento que existe no handleDrop
            let expectedNewPosition = currentIndex + currentMove;
            if (expectedNewPosition > 14) { expectedNewPosition = 14; }
            if (expectedNewPosition < 0) { expectedNewPosition = 0; }

            if (targetIndex === expectedNewPosition) {
                // Move o peão para a casa logicamente correta e atualiza o estado
                moveTokenToHouse(activePlayer, targetIndex);
                // Fim do turno
                endTurn();
            } else {
                alert(`Movimento inválido! Você deve ir para a casa ${expectedNewPosition}.`);
                // Se inválido, o peão deve voltar para sua posição inicial (re-renderiza)
                moveTokenToHouse(activePlayer, currentIndex);
            }
        } else {
             // Se soltou fora de uma casa, volta para a posição inicial
             moveTokenToHouse(activePlayer, playerPositions[activePlayer]);
        }

        tokenInDrag = null;
    }
}


// --- INICIALIZAÇÃO E EVENT LISTENERS ---

// Evento de clique para o botão (funciona para mouse e touch)
drawCardBtn.addEventListener('click', drawCardAndMove);

// Adiciona eventos de Drag and Drop (Mouse)
document.addEventListener('dragstart', handleDragStart);
document.addEventListener('dragover', handleDragOver);
document.addEventListener('drop', handleDrop);

// Adiciona eventos de Touch (Celular)
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove, { passive: false });
document.addEventListener('touchend', handleTouchEnd);


// Posiciona os 4 peões inicialmente na casa 'Início'
window.onload = function() {
    
    // Reposiciona os peões na casa inicial, usando os offsets para evitar sobreposição
    moveTokenToHouse('red', 0);
    moveTokenToHouse('blue', 0);
    moveTokenToHouse('green', 0);
    moveTokenToHouse('yellow', 0);

    // Inicia a exibição do turno
    updateTurnInfo();
};
