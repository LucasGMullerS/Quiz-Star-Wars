// ===== CONFIGURAÇÃO DAS PERGUNTAS =====
const questions = [
    {
        question: "Um amigo seu está em perigo. O que você faz?",
        answers: [
            { text: "Arrisco minha vida para salvá-lo, sem hesitar.", side: "jedi", label: "A" },
            { text: "Ajudo, mas priorizo minha segurança.", side: "jedi", label: "B" },
            { text: "Só ajudo se tiver algo a ganhar.", side: "sith", label: "C" },
            { text: "Deixo ele se virar sozinho. Cada um por si.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Qual dessas frases mais combina com você?",
        answers: [
            { text: "O verdadeiro poder vem da paz interior.", side: "jedi", label: "A" },
            { text: "A justiça deve ser feita, custe o que custar.", side: "jedi", label: "B" },
            { text: "O poder é tudo o que importa.", side: "sith", label: "C" },
            { text: "A ordem só existe através do medo.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Você encontra um artefato antigo e poderoso. Qual sua reação?",
        answers: [
            { text: "Mantenho seguro e busco sabedoria sobre ele.", side: "jedi", label: "A" },
            { text: "Compartilho o conhecimento com outros.", side: "jedi", label: "B" },
            { text: "Uso seu poder para conquistar vantagem.", side: "sith", label: "C" },
            { text: "Escondo para que ninguém mais o use.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Como você lida com pessoas que discordam de você?",
        answers: [
            { text: "Ouço com atenção e tento entender o ponto delas.", side: "jedi", label: "A" },
            { text: "Debato com calma para chegar a um consenso.", side: "jedi", label: "B" },
            { text: "Imponho meu ponto de vista com firmeza.", side: "sith", label: "C" },
            { text: "Ignoro completamente e sigo meu caminho.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Um inimigo implacável está prestes a atacar inocentes. O que faz?",
        answers: [
            { text: "Coloco-me entre o inimigo e os inocentes.", side: "jedi", label: "A" },
            { text: "Organizo uma defesa para protegê-los.", side: "jedi", label: "B" },
            { text: "Uso a situação para ganhar vantagem política.", side: "sith", label: "C" },
            { text: "Deixo os inocentes como distração para escapar.", side: "sith", label: "D" }
        ]
    },
    {
        question: "O que você busca acima de tudo?",
        answers: [
            { text: "Paz interior e equilíbrio.", side: "jedi", label: "A" },
            { text: "Conhecimento e sabedoria.", side: "jedi", label: "B" },
            { text: "Poder absoluto e controle.", side: "sith", label: "C" },
            { text: "Vingança contra quem me errou.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Alguém te trai gravemente. Qual sua reação?",
        answers: [
            { text: "Perdoo, mas fico alerta no futuro.", side: "jedi", label: "A" },
            { text: "Demonstro minha decepção e sigo em frente.", side: "jedi", label: "B" },
            { text: "Retribuo com o dobro de intensidade.", side: "sith", label: "C" },
            { text: "Planejo uma vingança que ela nunca esquecerá.", side: "sith", label: "D" }
        ]
    },
    {
        question: "O que acha da autoridade e das regras?",
        answers: [
            { text: "São necessárias para manter a ordem e paz.", side: "jedi", label: "A" },
            { text: "Devem ser respeitadas, mas podem ser questionadas.", side: "jedi", label: "B" },
            { text: "São feitas para serem quebradas pelos fortes.", side: "sith", label: "C" },
            { text: "Só obedeço se eu próprio estiver no comando.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Como você se sente em relação à emoção?",
        answers: [
            { text: "Deve ser controlada para evitar o erro.", side: "jedi", label: "A" },
            { text: "É importante, mas não deve guiar minhas ações.", side: "jedi", label: "B" },
            { text: "É a fonte do verdadeiro poder.", side: "sith", label: "C" },
            { text: "Raiva e ódio me tornam mais forte.", side: "sith", label: "D" }
        ]
    },
    {
        question: "Se você pudesse ter um sabre de luz, de que cor seria?",
        answers: [
            { text: "Azul - símbolo de justiça e proteção.", side: "jedi", label: "A" },
            { text: "Verde - símbolo de sabedoria e harmonia.", side: "jedi", label: "B" },
            { text: "Vermelho - símbolo de poder e domínio.", side: "sith", label: "C" },
            { text: "Roxo - equilíbrio entre luz e escuridão.", side: "sith", label: "D" }
        ]
    }
];

const forceQuotes = [
    "Que a Força esteja com você.",
    "O medo é o caminho para o Lado Sombrio.",
    "Use a Força, Luke.",
    "Eu sinto um distúrbio na Força.",
    "Há sempre um maior equilíbrio na Força.",
    "A Força é forte neste.",
    "Você não sabe o poder do Lado Sombrio.",
    "Acalme sua mente e sinta a Força fluir."
];

// ===== ELEMENTOS DOM =====
const introOverlay = document.getElementById('intro-overlay');
const btnStart = document.getElementById('btn-start');
const crawlContainer = document.getElementById('crawl-container');
const quizContainer = document.getElementById('quiz-container');
const questionCard = document.getElementById('question-card');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answersGrid = document.getElementById('answers-grid');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resultContainer = document.getElementById('result-container');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultDivider = document.querySelector('.result-divider');
const resultDescription = document.getElementById('result-description');
const resultStats = document.getElementById('result-stats');
const resultBgEffect = document.getElementById('result-bg-effect');
const forceQuote = document.getElementById('force-quote');
const btnRestart = document.getElementById('btn-restart');
const btnShare = document.getElementById('btn-share');
const transitionFlash = document.getElementById('transition-flash');

// ===== ESTADO DO QUIZ =====
let currentQuestion = 0;
let jediScore = 0;
let sithScore = 0;

// ===== STARFIELD (CANVAS) =====
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.8 + 0.2
        });
    }
}
createStars(200);

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        // Movimento de warp speed durante o quiz
        if (quizContainer.classList.contains('active')) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            star.x -= star.speed * 3;
            if (star.x < 0) {
                star.x = canvas.width;
                star.y = Math.random() * canvas.height;
            }
            ctx.lineTo(star.x, star.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.lineWidth = star.radius;
            ctx.stroke();
        } else {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        }
    });

    requestAnimationFrame(animateStars);
}
animateStars();

// ===== SOM (WEB AUDIO API - SABRE DE LUZ) =====
let audioContext;
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playLightsaberSound(isJedi) {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(isJedi ? 400 : 200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(isJedi ? 800 : 150, audioContext.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}

function playSelectSound() {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
}

// ===== MÚSICA STAR WARS (Tema Principal) =====
let starWarsMusicInterval = null;

function playStarWarsTheme() {
    if (!audioContext) initAudio();

    // Notas do tema Star Wars (frequências em Hz)
    const notes = [
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 349.23, duration: 0.45 }, // F
        { freq: 466.16, duration: 0.25 }, // B♭
        { freq: 349.23, duration: 0.45 }, // F
        { freq: 466.16, duration: 0.25 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 392.00, duration: 0.45 }, // G
        { freq: 466.16, duration: 0.25 }, // B♭
        { freq: 392.00, duration: 0.25 }, // G
        { freq: 466.16, duration: 0.25 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 466.16, duration: 0.7 }, // B♭
        { freq: 415.30, duration: 0.45 }, // A♭
        { freq: 466.16, duration: 0.25 }, // B♭
        { freq: 415.30, duration: 0.45 }, // A♭
        { freq: 466.16, duration: 0.25 }, // B♭
    ];

    let noteIndex = 0;
    let startTime = audioContext.currentTime + 0.1;

    function playNextNote() {
        if (noteIndex >= notes.length) {
            noteIndex = 0; // Loop infinito até parar
        }

        const note = notes[noteIndex];
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note.freq, startTime);

        gain.gain.setValueAtTime(0.08, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.duration * 0.9);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(startTime);
        osc.stop(startTime + note.duration);

        startTime += note.duration;
        noteIndex++;
    }

    // Toca a primeira nota imediatamente
    playNextNote();

    // Continua tocando em loop
    starWarsMusicInterval = setInterval(() => {
        playNextNote();
    }, 400); // Intervalo aproximado entre notas
}

function stopStarWarsTheme() {
    if (starWarsMusicInterval) {
        clearInterval(starWarsMusicInterval);
        starWarsMusicInterval = null;
    }
}

// ===== INICIAR TESTE =====
const btnSkipIntro = document.getElementById('btn-skip-intro');

function startQuiz() {
    initAudio();
    playSelectSound();
    introOverlay.classList.add('hidden');

    // Crawl mais rápido (5s)
    setTimeout(() => {
        crawlContainer.classList.add('active');
        playStarWarsTheme();
    }, 1000);

    setTimeout(() => {
        crawlContainer.classList.remove('active');
        stopStarWarsTheme();
        quizContainer.classList.add('active');
        loadQuestion();
    }, 10000); // Crawl total = 18s para leitura um pouco mais rápida
}

btnStart.addEventListener('click', startQuiz);

btnSkipIntro.addEventListener('click', () => {
    initAudio();
    playSelectSound();
    introOverlay.classList.add('hidden');
    crawlContainer.classList.remove('active');
    stopStarWarsTheme();
    quizContainer.classList.add('active');
    loadQuestion();
});

// ===== ATUALIZAR SABRE DE LUZ =====
const lightsaber = document.getElementById('lightsaber');
const lightsaberBlade = document.getElementById('lightsaber-blade');

function updateLightsaber(progressPercent) {
    const maxWidth = Math.min(500, window.innerWidth * 0.55);
    const bladeWidth = (progressPercent / 100) * maxWidth;
    lightsaberBlade.style.width = `${bladeWidth}px`;

    // Definir cor baseada na proporção Jedi vs Sith
    const total = jediScore + sithScore;
    if (total === 0) {
        // Início - neutro (azul claro)
        lightsaber.className = '';
        lightsaberBlade.className = 'lightsaber-blade';
    } else {
        const jediRatio = jediScore / total;
        lightsaber.className = '';
        lightsaberBlade.className = 'lightsaber-blade';

        // Empate exato (1x1, 2x2, 3x3, 4x4, 5x5) -> Roxo "Sensitiva à Força"
        if (jediScore === sithScore) {
            lightsaber.classList.add('balance');
            lightsaberBlade.classList.add('balance');
        } else if (jediRatio > 0.6) {
            // Mais Jedi -> Azul
            lightsaber.classList.add('jedi');
            lightsaberBlade.classList.add('jedi');
        } else if (jediRatio < 0.4) {
            // Mais Sith -> Vermelho
            lightsaber.classList.add('sith');
            lightsaberBlade.classList.add('sith');
        } else {
            // Equilíbrio -> Roxo (misto)
            lightsaber.classList.add('balance');
            lightsaberBlade.classList.add('balance');
        }
    }
}

// ===== CARREGAR PERGUNTA =====
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadQuestion() {
    const q = questions[currentQuestion];
    const shuffledAnswers = shuffleArray(q.answers);

    questionNumber.textContent = `Pergunta ${currentQuestion + 1}`;
    questionText.textContent = q.question;

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    updateLightsaber(progress);
    progressText.textContent = `${currentQuestion + 1}/${questions.length}`;

    const labels = ['A', 'B', 'C', 'D'];
    answersGrid.innerHTML = '';
    shuffledAnswers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-label">${labels[index]})</span> ${answer.text}`;
        btn.addEventListener('click', () => selectAnswer(answer.side, btn));
        answersGrid.appendChild(btn);
    });

    // Re-trigger animation
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // Trigger reflow
    questionCard.style.animation = 'fadeInScale 0.5s ease';
}

// ===== SELECIONAR RESPOSTA =====
function selectAnswer(side, btn) {
    playSelectSound();

    // Visual feedback
    btn.classList.add(side === 'jedi' ? 'selected-jedi' : 'selected-sith');

    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(b => b.style.pointerEvents = 'none');

    // Update score
    if (side === 'jedi') jediScore++;
    else sithScore++;

    // Atualizar sabre após cada resposta
    const currentProgress = ((currentQuestion + 1) / questions.length) * 100;
    updateLightsaber(currentProgress);

    // Flash transition
    transitionFlash.className = `transition-flash active ${side}`;
    setTimeout(() => {
        transitionFlash.className = 'transition-flash';
    }, 300);

    // Next question or result (mais rápido)
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 400);
}

// ===== MOSTRAR RESULTADO =====
function showResult() {
    quizContainer.classList.remove('active');

    const totalScore = jediScore + sithScore;

    // Verificar se é empate exato (Sensitiva à Força: 1x1, 2x2, 3x3, 4x4, 5x5)
    const isExactTie = jediScore === sithScore;
    const isJedi = jediScore >= sithScore;
    const side = isExactTie ? 'balance' : (isJedi ? 'jedi' : 'sith');

    // Play lightsaber sound
    setTimeout(() => playLightsaberSound(isJedi), 500);

    // Set result content with lightsaber images
    if (isExactTie) {
        // Sabre roxo via filtro CSS na imagem azul (hue-rotate + saturate)
        resultIcon.innerHTML = '<img src="bluelightsaber.png" alt="Sabre Roxo" style="height:100px;filter:hue-rotate(270deg) saturate(2);">';
        resultTitle.textContent = 'SENSITIVA À FORÇA';
        resultDescription.textContent = `Você está em perfeito equilíbrio entre o Lado Luminoso e o Lado Sombrio (${jediScore} x ${sithScore}). Sua alma é uma ponte entre a luz e a escuridão. A Força flui através de você de forma única e misteriosa. Você é raro, um verdadeiro enigma cósmico!`;
    } else if (isJedi) {
        resultIcon.innerHTML = '<img src="bluelightsaber.png" alt="Sabre Jedi" style="height:100px;">';
        resultTitle.textContent = 'LADO LUMINOSO';
        resultDescription.textContent = `Você é um verdadeiro guardião da paz e da justiça. Sua inclinação para o bem, empatia e equilíbrio mostra que você pertence à Ordem Jedi. Você acredita que o verdadeiro poder vem da sabedoria e da compaixão. Que a Força esteja com você, Jedi!`;
    } else {
        resultIcon.innerHTML = '<img src="evillightsaber.png" alt="Sabre Sith" style="height:100px;">';
        resultTitle.textContent = 'LADO SOMBRIO';
        resultDescription.textContent = `O Lado Sombrio pulsa em suas veias. Você valoriza o poder, a força de vontade e a determinação acima de tudo. Para você, a ordem é mantida através da força e do medo. Abrace seu destino, pois você tem o potencial para dominar tudo ao seu redor!`;
    }

    resultTitle.className = `result-title ${side}`;
    resultDivider.className = `result-divider ${side}`;

    resultStats.innerHTML = `
        <div class="stat-result">
            <span class="stat-result-number jedi">${jediScore}</span>
            <span class="stat-result-label">Jedi</span>
        </div>
        <div class="stat-result">
            <span class="stat-result-number">${totalScore}</span>
            <span class="stat-result-label">Total</span>
        </div>
        <div class="stat-result">
            <span class="stat-result-number sith">${sithScore}</span>
            <span class="stat-result-label">Sith</span>
        </div>
    `;

    resultBgEffect.className = `result-bg-effect ${side}`;

    forceQuote.textContent = `"${forceQuotes[Math.floor(Math.random() * forceQuotes.length)]}"`;

    setTimeout(() => {
        resultContainer.classList.add('active');
    }, 300);
}

// ===== REINICIAR TESTE =====
btnRestart.addEventListener('click', () => {
    playSelectSound();
    resultContainer.classList.remove('active');

    setTimeout(() => {
        currentQuestion = 0;
        jediScore = 0;
        sithScore = 0;

        quizContainer.classList.add('active');
        loadQuestion();
    }, 500);
});

// ===== COMPARTILHAR =====
btnShare.addEventListener('click', () => {
    const isJedi = jediScore >= sithScore;
    const side = isJedi ? 'LADO LUMINOSO (Jedi) ⚔️' : 'LADO SOMBRIO (Sith) 🔴';
    const url = `https://lucasgmullers.github.io/Quiz-Star-Wars/`;
    const text = `Fiz o teste da Força de Star Wars e descobri que estou no ${side}! Faça você também:`;

    if (navigator.share) {
        navigator.share({
            title: 'Star Wars - Teste da Força',
            text: text,
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text + ' ' + url).then(() => {
            const originalText = btnShare.textContent;
            btnShare.textContent = '✅ Copiado!';
            setTimeout(() => {
                btnShare.textContent = originalText;
            }, 2000);
        }).catch(() => {
            alert(text + ' ' + url);
        });
    }
});

// ===== NAVEGAÇÃO POR TECLADO =====
document.addEventListener('keydown', (e) => {
    if (!quizContainer.classList.contains('active')) return;

    const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    const index = keyMap[e.key.toLowerCase()];

    if (index !== undefined) {
        const buttons = document.querySelectorAll('.answer-btn');
        if (buttons[index] && buttons[index].style.pointerEvents !== 'none') {
            buttons[index].click();
        }
    }
});
