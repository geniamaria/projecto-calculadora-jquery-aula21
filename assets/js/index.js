let add = function (nr1, nr2) {
    return (nr1 + nr2);
}

let subtract = function (nr1, nr2) {
    let subtract = nr1 - nr2;

    return subtract;
}
let multiply = function (nr1, nr2) {
    let multiply = nr1 * nr2;

    return multiply;
}
let divide = function (nr1, nr2) {
    let divide = nr1 / nr2;

    return divide;
}

let numero1;
let numero2;
let resultado;
let operation;
let cnt="";

//atribuindo os numerros na tela
$('#one').click(function () {
    $('#tela').text("1");
    
});
$('#dois').click(function () {
    $('#tela').text("2");
});
$('#tres').click(function () {
    $('#tela').text("3");
});
$('#quatro').click(function () {
    $('#tela').text("4");
});
$('#cinco').click(function () {
    $('#tela').text("5");
});
$('#seis').click(function () {
    $('#tela').text("6");
});
$('#sete').click(function () {
    $('#tela').text("7");
});
$('#oito').click(function () {
    $('#tela').text("8");
});
$('#nove').click(function () {
    $('#tela').text("9");
  
});
$('#zero').click(function () {
    $('#tela').text("0");
});

//limpando a tela
$('#operactinClean').click(function () {
    $('#tela').text("");
    numero1 = 0;
    numero2 = 0;
});

$('#add').click(function () {
    numero1 = Number($('#tela').text());// atribuindo o valor da tela ao numero 1.
    $('#tela').text("+"); // colocando  o sinal da operacao na tela,
    operation = "+";// mostrando ao programa que a operacao esolhida e +;
});
$('#subtract').click(function () {
    numero1 = Number($('#tela').text());// atribuindo o valor da tela ao numero 1.
    $('#tela').text("-"); // colocando  o sinal da operacao na tela,
    operation = "-";// mostrando ao programa que a operacao esolhida e +;
});
$('#multiply').click(function () {
    numero1 = Number($('#tela').text());// atribuindo o valor da tela ao numero 1.
    $('#tela').text("x"); // colocando  o sinal da operacao na tela,
    operation = "x";// mostrando ao programa que a operacao esolhida e +;
});
$('#divide').click(function () {
    numero1 = Number($('#tela').text());// atribuindo o valor da tela ao numero 1.
    $('#tela').text("÷"); // colocando  o sinal da operacao na tela,
    operation = "÷";// mostrando ao programa que a operacao esolhida e +;
});
$('#resultado').click(function () {
    switch (operation) {
        case "+":
            numero2 = Number($('#tela').text());
            resultado = add(numero1, numero2);
            $('#tela').text(resultado);
            break;

        case "-":
            numero2 = Number($('#tela').text());
            resultado = subtract(numero1, numero2);
            $('#tela').text(resultado);
            break;

        case "x":
            numero2 = Number($('#tela').text());
            resultado = multiply(numero1, numero2);
            $('#tela').text(resultado);
            break;
        case "÷":
            numero2 = Number($('#tela').text());
            resultado = divide(numero1, numero2);
            $('#tela').text(resultado);
            break;
    }

});


