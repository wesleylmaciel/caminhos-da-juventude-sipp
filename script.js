// O CONTEÚDO DAS CARTAS: Suas cartas de Desafio e Oportunidade
const cards = [
    // --- CARTAS DE OPORTUNIDADE (Positivas - Avança casas) ---
    // Cartas originais
    { type: 'oportunidade', title: 'Curso Técnico Gratuito', description: 'Você conseguiu uma bolsa em um curso técnico gratuito.', move: 2 },
    { type: 'oportunidade', title: 'Fortalecimento Escolar', description: 'A escola abriu um projeto de leitura e escrita que fortaleceu suas habilidades.', move: 1 },
    { type: 'oportunidade', title: 'Apoio Familiar', description: 'Um parente ajudou você a pagar o cursinho preparatório.', move: 3 },
    { type: 'oportunidade', title: 'Oficina Profissionalizante', description: 'Participou de uma oficina e recebeu certificado.', move: 2 },
    { type: 'oportunidade', title: 'Mentoria Docente', description: 'Um professor se tornou seu mentor e ajudou a melhorar seu rendimento escolar.', move: 1 },
    { type: 'oportunidade', title: 'Estágio na Área', description: 'Você conseguiu um estágio na área que gosta.', move: 2 },
    { type: 'oportunidade', title: 'Reforço Escolar', description: 'A escola ofereceu reforço escolar gratuito e você aproveitou bem.', move: 1 },
    { type: 'oportunidade', title: 'Projeto Cultural', description: 'Participou de um projeto cultural e ampliou suas experiências.', move: 2 },
    
    // Novas Cartas de Oportunidade Adicionadas
    { type: 'oportunidade', title: 'Bolsa de Estudos Parcial', description: 'Você conseguiu uma bolsa de estudos parcial, aliviando o custo dos estudos.', move: 2 },
    { type: 'oportunidade', title: 'Vestibular Aprovado!', description: 'Você passou no vestibular para o curso dos seus sonhos!', move: 3 },
    { type: 'oportunidade', title: 'Qualificação Profissional', description: 'Você participou de um curso de qualificação profissional gratuito.', move: 2 },
    { type: 'oportunidade', title: 'Primeiro Emprego', description: 'Foi chamado para a primeira entrevista de emprego e conseguiu a vaga!', move: 3 },
    { type: 'oportunidade', title: 'Suporte Familiar', description: 'Sua família te apoiou em uma decisão difícil, dando a segurança necessária para avançar.', move: 2 },
    { type: 'oportunidade', title: 'Melhora da Autoestima', description: 'Você começou a praticar um esporte e melhorou sua autoestima e concentração.', move: 1 },
    { type: 'oportunidade', title: 'Ações Sociais', description: 'Participou de um projeto social e aprendeu novas habilidades de liderança e comunicação.', move: 2 },
    { type: 'oportunidade', title: 'Acesso à Tecnologia', description: 'Você ganhou acesso à internet de qualidade e pôde estudar melhor e com mais recursos.', move: 2 },
    { type: 'oportunidade', title: 'Reconhecimento Online', description: 'Usou redes sociais para divulgar um projeto e recebeu apoio inesperado.', move: 3 },
    { type: 'oportunidade', title: 'Saúde Mental', description: 'Você começou a cuidar da saúde mental com acompanhamento psicológico, melhorando seu foco.', move: 2 },
    { type: 'oportunidade', title: 'Rotina Saudável', description: 'Adotou uma rotina saudável que aumentou sua disposição e energia para os estudos e trabalho.', move: 1 },
    
    // --- NOVAS CARTAS DE OPORTUNIDADE (AVANÇO DE 2 CASAS) ---
    { type: 'oportunidade', title: 'Aprovação em Curso Extracurricular', description: 'Você se destacou em um curso de idioma ou tecnologia.', move: 2 },
    { type: 'oportunidade', title: 'Bolsa de Iniciação Científica', description: 'Você conseguiu uma bolsa de estudos para participar de um projeto de pesquisa na escola.', move: 2 },
    { type: 'oportunidade', title: 'Reconhecimento Comunitário', description: 'Seu esforço em um projeto social foi reconhecido, abrindo portas para novas parcerias.', move: 2 },
    { type: 'oportunidade', title: 'Melhora no Transporte Público', description: 'A linha de ônibus foi otimizada, permitindo que você ganhe mais tempo de estudo ou descanso.', move: 2 },
    { type: 'oportunidade', title: 'Organização Financeira', description: 'Você fez um planejamento financeiro e conseguiu guardar dinheiro para investir em material didático.', move: 2 },


    // --- CARTAS DE DESAFIO (Negativas - Retrocede casas) ---
    { type: 'desafio', title: 'Cansaço Noturno', description: 'Você precisa trabalhar à noite e chega cansado para a escola.', move: -2 },
    { type: 'desafio', title: 'Perda de Prova', description: 'O ônibus atrasou e você perdeu a prova. Retroceda uma casa para recuperar o prejuízo.', move: -1 }, 
    { type: 'desafio', title: 'Dificuldades FinanCeiras', description: 'Sua família passa por dificuldades financeiras e você precisa trancar os estudos.', move: -3 },
    { type: 'desafio', title: 'Cuidado com Irmãos', description: 'Precisa cuidar dos irmãos menores e perde tempo de estudo. Retroceda uma casa para reorganizar seu tempo.', move: -1 },
    { type: 'desafio', title: 'Falta de Material', description: 'Faltou dinheiro para o material escolar.', move: -1 },
    { type: 'desafio', title: 'Hora Extra', description: 'Você foi chamado para fazer hora extra no trabalho e não conseguiu estudar para a prova.', move: -2 },
    { type: 'desafio', title: 'Doença Inesperada', description: 'Uma doença inesperada o afastou da escola por alguns dias. Retroceda uma casa para se recuperar totalmente.', move: -1 },
    
    // --- NOVAS CARTAS DE DESAFIO (RETROCESSO DE 1 CASA) ---
    { type: 'desafio', title: 'Reforma Escolar Atrasada', description: 'A reforma na escola atrasou, causando desorganização e impactando temporariamente seu foco.', move: -1 },
    { type: 'desafio', title: 'Problemas com Documentação', description: 'Houve um problema com sua documentação acadêmica ou profissional. Retroceda uma casa para resolver a situação.', move: -1 }
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

// Variáveis de Gerenciamento de Turno
const allPlayers = ['red', 'blue', 'green', 'yellow'];
let turnOrder = []; 
let missTurnCount = {}; 
let currentPlayerIndex = 0;
let setupPhase = true; 
let playerToMove = null;
let gameFinished = false; 

// VARIÁVEL ADICIONADA: Armazena o índice da última carta sorteada para evitar repetição imediata
let lastDrawnCardIndex = -1;

const tokenOffsets = {
    'red': { x: -5, y: -5 },
    'blue': { x: 5, y: -5 },
    'green': { x: -5, y: 5 },
    'yellow': { x: 5, y: 5 }
};

// Variável para armazenar o token arrastado (usado no Touch)
let draggedToken = null; 

// --- FUNÇÕES DE LÓGICA DE TURNO ---

// Atualiza o display da ordem de jogo
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

// Passa o turno para o próximo jogador.
function advanceTurn() {
    if (gameFinished || setupPhase) return;

    // 1. Reinicializa o display para o próximo jogador
    playerToMove = null; 
    drawCardBtn.disabled = true;

    // 2. Avança o índice do jogador
    currentPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;
    let nextPlayerColor = turnOrder[currentPlayerIndex];

    // 3. Define o próximo jogador que deve iniciar o turno
    playerToMove = nextPlayerColor; 
    updateTurnDisplay();
    currentTurnDisplay.textContent = `Turno: Grupo ${playerToMove.toUpperCase()}`;
    activePlayerInfo.textContent = `Próximo Grupo: Arraste o peão de ${playerToMove.toUpperCase()} para iniciar!`;
}


// --- FUNÇÃO PARA CENTRALIZAR O PEÃO EM UMA CASA (COM CORREÇÃO DE SCROLL) ---

function centerTokenOnHouse(tokenColor, targetHouse) {
    const token = document.getElementById(`player-token-${tokenColor}`);
    
    if (!token || !targetHouse) return; 

    const gameBoard = document.querySelector('.game-board');
    const houseRect = targetHouse.getBoundingClientRect();
    const boardRect = gameBoard.getBoundingClientRect();
    
    // POSIÇÃO CORRIGIDA: Inclui o scrollLeft do gameBoard no cálculo horizontal (X)
    const centerX = (houseRect.left - boardRect.left) + gameBoard.scrollLeft + (houseRect.width / 2); 
    const centerY = houseRect.top - boardRect.top + (houseRect.height / 2);
    
    const offsetX = tokenOffsets[tokenColor].x;
    const offsetY = tokenOffsets[tokenColor].y;

    token.style.left = `${centerX + offsetX - (token.offsetWidth / 2)}px`;
    token.style.top = `${centerY + offsetY - (token.offsetHeight / 2)}px`;
}


// --- FUNÇÃO ÚNICA DE LÓGICA DO JOGO ---

function drawCardAndMove() {
    if (gameFinished) {
        cardDisplay.innerHTML = `<h2>O JOGO ACABOU!</h2><p>O grupo vencedor já foi determinado.</p>`;
        return;
    }
    
    const playerColor = turnOrder[currentPlayerIndex];
    
    if (playerToMove !== playerColor || drawCardBtn.disabled) {
        cardDisplay.innerHTML = `<h2>Atenção!</h2><p>É a vez do **Grupo ${playerColor.toUpperCase()}**. Arraste o peão dele para a casa atual e clique em "Sortear Carta".</p>`;
        return;
    }

    drawCardBtn.disabled = true;
    currentTurnDisplay.textContent = `Turno do Grupo ${playerColor.toUpperCase()}: Sorteando Carta...`;
    diceResult.textContent = 'Ação: Carta Sorteada';
    
    // --- LÓGICA DE SORTEIO DE CARTA (COM PREVENÇÃO DE REPETIÇÃO) ---
    let randomIndex;
    let attempts = 0;
    
    // Sorteia até encontrar um índice que não seja o da última carta
    do {
        randomIndex = Math.floor(Math.random() * cards.length);
        attempts++;
        if (attempts > 50) break; // Prevenção de loop infinito em cenários improváveis
    } while (randomIndex === lastDrawnCardIndex);

    // Atualiza o índice da última carta sorteada
    lastDrawnCardIndex = randomIndex;
    
    const selectedCard = cards[randomIndex];
    let movementText = '';
    
    // --- LÓGICA DE MOVIMENTO AUTOMÁTICO ---
    
    if (selectedCard.move !== undefined) {
        let currentPosition = playerPositions[playerColor];
        let newPosition = currentPosition + selectedCard.move;

        if (newPosition < 0) newPosition = 0;
        
        if (newPosition >= totalHouses - 1) newPosition = totalHouses - 1; 

        playerPositions[playerColor] = newPosition;
        
        const targetHouse = houses[newPosition];
        centerTokenOnHouse(playerColor, targetHouse);
        
        if (selectedCard.move > 0) {
            movementText = `<br><strong>Ação do Movimento: AVANÇO DE ${selectedCard.move} casas!</strong>`;
        } else if (selectedCard.move < 0) {
            movementText = `<br><strong>Ação do Movimento: RETROCESSO DE ${Math.abs(selectedCard.move)} casas!</strong>`;
        }
    } 
    
    // Lógica de Perder a Vez (MissTurn foi removido, então este bloco fica vazio)
    let missTurnText = '';
    
    // Aplica o estilo de borda da carta e preenche o conteúdo
    cardDisplay.className = `card-display ${selectedCard.type}`;
    cardDisplay.innerHTML = `
        <h3>[Carta de ${selectedCard.type.toUpperCase()} - Grupo ${playerColor.toUpperCase()}]</h3>
        <h4>${selectedCard.title}</h4>
        <p>${selectedCard.description}</p>
        ${movementText}
        ${missTurnText}
        <p class="reflection-prompt"><strong>Discussão:</strong> O que esta carta revela sobre a realidade da juventude, trabalho e escola?</p>
    `;

    // VERIFICAÇÃO DE VITÓRIA
    if (playerPositions[playerColor] === totalHouses - 1) {
        gameFinished = true;
        cardDisplay.innerHTML = `<h2 class="oportunidade">🏆 VITÓRIA DO GRUPO ${playerColor.toUpperCase()}! 🏆</h2><p>O grupo completou a jornada. Parabéns!</p>`;
        drawCardBtn.disabled = true; 
        currentTurnDisplay.textContent = 'FIM DE JOGO';
        activePlayerInfo.textContent = 'Parabéns ao Grupo Vencedor!';
        updateTurnDisplay();
        return;
    }
    
    // Finalização normal do turno: passa a vez
    advanceTurn();
}


// --- FUNÇÕES DRAG AND DROP (PARA DEFINIR ORDEM E CONFIRMAR TURNO) ---

function handleDragStart(e) {
    if (gameFinished) return;
    
    const draggedPlayer = e.target.getAttribute('data-group');
    e.dataTransfer.setData('text/plain', e.target.id);
    
    if (setupPhase) {
        // Lógica da fase de configuração
        if (turnOrder.includes(draggedPlayer)) return;
        playerToMove = draggedPlayer;
        
        if (playerPositions[draggedPlayer] === 0) {
            turnOrder.push(draggedPlayer);
            // missTurnCount[draggedPlayer] = 0; // Não precisa mais inicializar
            updateTurnDisplay();
        }

        if (turnOrder.length === allPlayers.length) {
            setupPhase = false;
            currentPlayerIndex = 0;
            playerToMove = turnOrder[currentPlayerIndex]; 
            updateTurnDisplay();
            currentTurnDisplay.textContent = `Turno: Grupo ${playerToMove.toUpperCase()}`;
            activePlayerInfo.textContent = `Turno: Grupo ${playerToMove.toUpperCase()}`;
            drawCardBtn.disabled = false;
        }

    } else {
        // Lógica da fase de jogo (apenas confirma o turno)
        const activePlayer = turnOrder[currentPlayerIndex];
        
        // Somente permite o arrasto se for o peão do jogador da vez
        if (draggedPlayer === activePlayer) {
            playerToMove = draggedPlayer;
            drawCardBtn.disabled = false;
            currentTurnDisplay.textContent = `Turno: Grupo ${playerToMove.toUpperCase()} - PRONTO!`;
        } else {
            // Se um jogador errado tentou arrastar:
            cardDisplay.innerHTML = `<h2>Atenção!</h2><p>É a vez do **Grupo ${activePlayer.toUpperCase()}**, não do Grupo ${draggedPlayer.toUpperCase()}.</p>`;
            drawCardBtn.disabled = true; 
        }
    }
}

function handleDragOver(e) {
    e.preventDefault(); 
}

function handleDrop(e) {
    e.preventDefault();
    // Permite o drop apenas se for para confirmar a posição ou na fase inicial
    if (e.target.classList.contains('drop-target') && playerToMove) {
        const targetHouse = e.target;
        const targetIndex = parseInt(targetHouse.getAttribute('data-index'));
        
        centerTokenOnHouse(playerToMove, targetHouse);
        playerPositions[playerToMove] = targetIndex;
    }
}


// --- FUNÇÕES TOUCH (PARA CELULAR) ---

function handleTouchStart(e) {
    if (gameFinished) return;
    // O evento touchstart deve ser ignorado para rolagem vertical
    if (e.touches.length > 1) return; // Ignora multi-touch
    
    const touch = e.touches[0];
    const target = touch.target;

    // Apenas se o toque for em um peão
    if (target.classList.contains('player-token')) {
        // Previne a rolagem da página quando o peão é tocado, para permitir o "arrasto" dele
        e.preventDefault(); 
        draggedToken = target;

        const draggedPlayer = draggedToken.getAttribute('data-group');
        
        // Replicar a lógica de handleDragStart
        if (setupPhase) {
            if (turnOrder.includes(draggedPlayer)) return;
            playerToMove = draggedPlayer;
            
            if (playerPositions[draggedPlayer] === 0) {
                turnOrder.push(draggedPlayer);
                updateTurnDisplay();
            }

            if (turnOrder.length === allPlayers.length) {
                setupPhase = false;
                currentPlayerIndex = 0;
                playerToMove = turnOrder[currentPlayerIndex]; 
                updateTurnDisplay();
                currentTurnDisplay.textContent = `Turno: Grupo ${playerToMove.toUpperCase()}`;
                activePlayerInfo.textContent = `Turno: Grupo ${playerToMove.toUpperCase()}`;
                drawCardBtn.disabled = false;
            }

        } else {
            const activePlayer = turnOrder[currentPlayerIndex];
            
            if (draggedPlayer === activePlayer) {
                playerToMove = draggedPlayer;
                drawCardBtn.disabled = false;
                currentTurnDisplay.textContent = `Turno: Grupo ${playerToMove.toUpperCase()} - PRONTO!`;
            } else {
                cardDisplay.innerHTML = `<h2>Atenção!</h2><p>É a vez do **Grupo ${activePlayer.toUpperCase()}**, não do Grupo ${draggedPlayer.toUpperCase()}.</p>`;
                drawCardBtn.disabled = true; 
                draggedToken = null; // Impede que continue o movimento de um peão errado
            }
        }
    } else {
        // Se o toque não é no peão, permitir rolagem (mas o default já é permitir, então nada a fazer aqui)
    }
}

function handleTouchMove(e) {
    if (!draggedToken) return;
    
    // Previne a rolagem da página ENQUANTO o peão está sendo movido
    e.preventDefault(); 
    
    const touch = e.touches[0];
    const token = draggedToken;
    const houseRect = houses[playerPositions[playerToMove]].getBoundingClientRect();

    // Move o token seguindo o dedo, mas restrito ao centro da casa atual para evitar que saia muito longe
    // O token não precisa se mover suavemente na tela, apenas precisa disparar o drop no final.
    // Manteremos a posição do token baseada na casa atual, mas daremos um feedback visual de "pego"
    
    // Estilo temporário para dar feedback visual de que o peão está sendo movido
    const gameBoard = document.querySelector('.game-board');
    const boardRect = gameBoard.getBoundingClientRect();

    const targetX = touch.clientX - boardRect.left + gameBoard.scrollLeft;
    const targetY = touch.clientY - boardRect.top;

    // Atualiza a posição visual temporária (opcional, para feedback de arrasto)
    // token.style.left = `${targetX - (token.offsetWidth / 2)}px`;
    // token.style.top = `${targetY - (token.offsetHeight / 2)}px`;
}

function handleTouchEnd(e) {
    if (!draggedToken) return;
    
    // Pegar a última posição do toque (ou o que sobrou, no caso de um touchend)
    const touch = e.changedTouches[0];
    
    // Encontrar o elemento (casa) onde o toque finalizou
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

    // Se o elemento final for uma casa (drop-target)
    if (targetElement && targetElement.classList.contains('drop-target')) {
        const targetHouse = targetElement;
        
        // Replicar a lógica de handleDrop
        if (playerToMove) {
            const targetIndex = parseInt(targetHouse.getAttribute('data-index'));
            
            centerTokenOnHouse(playerToMove, targetHouse);
            playerPositions[playerToMove] = targetIndex;
            
            // O botão de sortear carta já foi ativado no handleTouchStart (se for o jogador certo)
        }
    } else if (playerToMove) {
        // Se soltou fora de uma casa, centraliza de volta na casa atual para o peão correto
        const targetHouse = houses[playerPositions[playerToMove]];
        centerTokenOnHouse(playerToMove, targetHouse);
    }
    
    // Limpar o token arrastado
    draggedToken = null;
}


// --- INICIALIZAÇÃO E EVENT LISTENERS ---

drawCardBtn.addEventListener('click', drawCardAndMove);

document.addEventListener('dragstart', handleDragStart);
document.addEventListener('dragover', handleDragOver);
document.addEventListener('drop', handleDrop);


window.onload = function() {
    
    // Posiciona os peões na casa inicial, usando a função de centralização para alinhamento perfeito
    const startHouse = houses[0];
    centerTokenOnHouse('red', startHouse);
    centerTokenOnHouse('blue', startHouse);
    centerTokenOnHouse('green', startHouse);
    centerTokenOnHouse('yellow', startHouse);
    
    updateTurnDisplay(); // Inicializa o painel de ordem

    document.querySelectorAll('.drop-target').forEach(house => {
        house.addEventListener('dragover', handleDragOver);
        house.addEventListener('drop', handleDrop);
        
        // Adicionar eventos de toque para o drop-target também (para reconhecer o final do arrasto)
        house.addEventListener('touchmove', handleTouchMove);
        house.addEventListener('touchend', handleTouchEnd);
    });

    // Adicionar eventos de toque para os peões
    document.querySelectorAll('.player-token').forEach(token => {
        token.addEventListener('touchstart', handleTouchStart, { passive: false });
        // O move e end são globais ou adicionados na casa. Adicionamos o end e move no body
    });

    // Adicionar listeners de move e end ao body para capturar a soltura em qualquer lugar
    document.body.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.body.addEventListener('touchend', handleTouchEnd);
};
