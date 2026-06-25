// 1. Generar número aleatorio
const randomNumber = Math.floor(Math.random() * 100) + 1;
const input = document.getElementById('guessInput');
const button = document.getElementById('checkButton');
const message = document.getElementById('message');

// 2. Función de lógica
button.addEventListener('click', function() {
    const userGuess = parseInt(input.value);

    if (userGuess === randomNumber) {
        message.textContent = "¡Ganaste! 🎉";
        message.style.color = "green";
    } else if (userGuess < randomNumber) {
        message.textContent = "Muy bajo, intenta de nuevo.";
        message.style.color = "orange";
    } else if (userGuess > randomNumber) {
        message.textContent = "Muy alto, intenta de nuevo.";
        message.style.color = "red";
    } else {
        message.textContent = "Por favor, ingresa un número válido.";
    }
});

let conteo = 0; 

button.addEventListener('click', function() {
    conteo++;
    document.getElementById('intentos').textContent = conteo; 
    
    const userGuess = parseInt(input.value);
   
});