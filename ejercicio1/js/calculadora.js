function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 + num2);
}

function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 - num2);
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 * num2);
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("resultado").innerHTML = "Error: No se puede dividir entre 0.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado: " + (num1 / num2);
    }
}

function limpiar() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("resultado").innerHTML = "";
}