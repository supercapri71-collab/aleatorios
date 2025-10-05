let sumaNotas = 0;
let promedio = 0;
let nota = 7;
let notas = [];
calculaPromedio = function () {
     sumaNotas = 0;
     for (let i = 0; i < notas.length; i++) {
          sumaNotas = sumaNotas + notas[i]
          mostrarTexto("emimi", sumaNotas);
     }
     promedio = parseFloat(sumaNotas / notas.length);
     promedio = promedio.toFixed(2);
     mostrarTexto("emima", promedio);
}

agregaNota = function () {
     nota = recuperarInt("txtNota");
     notas.push(nota);
}