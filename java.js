const MAX_INTENTOS = 10;
const randomNumber = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById('guessinput');
const button = document.getElementById('checkButton');
const message = document.getElementById('message');
const intentosEl = document.getElementById('intentos');
const pista1El = document.getElementById('pista1');
const pista2El = document.getElementById('pista2');
const resultadoEl = document.getElementById('resultado');
const numeroSecretoEl = document.getElementById('numeroSecreto');

let intentos = 0;
let juegoTerminado = false;

function generarPistas() {
    if (randomNumber > 1) {
        const mayor = Math.floor(Math.random() * (randomNumber - 1)) + 1;
        pista2El.textContent = `Un número mayor que ${mayor}`;
    } else {
        pista2El.textContent = 'No hay número mayor (el secreto es 1)';
    }

    if (randomNumber < 100) {
        const menor = Math.floor(Math.random() * (100 - randomNumber)) + randomNumber + 1;
        pista1El.textContent = `Un número menor que ${menor}`;
    } else {
        pista1El.textContent = 'No hay número menor (el secreto es 100)';
    }
}

generarPistas();

function terminarJuego(ganado) {
    juegoTerminado = true;
    input.disabled = true;
    button.disabled = true;

    if (ganado) {
        message.textContent = '¡Ganaste! 🎉';
        message.style.color = 'green';
        resultadoEl.textContent = 'GANASTE';
        resultadoEl.style.color = '#00ff88';
        numeroSecretoEl.textContent = '';
    } else {
        message.textContent = 'Perdiste. Se acabaron los intentos.';
        message.style.color = 'red';
        resultadoEl.textContent = 'PERDISTE';
        resultadoEl.style.color = '#ff4444';
        numeroSecretoEl.textContent = `El número era: ${randomNumber}`;
    }
}

button.addEventListener('click', function () {
    if (juegoTerminado) return;

    const userGuess = parseInt(input.value, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        message.style.color = 'orange';
        return;
    }

    intentos++;
    intentosEl.textContent = intentos;

    if (userGuess === randomNumber) {
        terminarJuego(true);
    } else if (intentos >= MAX_INTENTOS) {
        terminarJuego(false);
    } else if (userGuess < randomNumber) {
        message.textContent = 'Muy bajo, intenta de nuevo.';
        message.style.color = 'orange';
    } else {
        message.textContent = 'Muy alto, intenta de nuevo.';
        message.style.color = 'red';
    }

    input.value = '';
    input.focus();
});
