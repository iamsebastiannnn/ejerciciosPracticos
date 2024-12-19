var numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    var adivinanza = parseInt(document.getElementById("adivinanza").value);
    if (adivinanza === numeroSecreto) {
        document.getElementById("mensaje").innerHTML = "¡Correcto! El número era " + numeroSecreto;
    } else if (adivinanza > numeroSecreto) {
        document.getElementById("mensaje").innerHTML = "Demasiado alto. Intenta de nuevo.";
    } else {
        document.getElementById("mensaje").innerHTML = "Demasiado bajo. Intenta de nuevo.";
    }
}
