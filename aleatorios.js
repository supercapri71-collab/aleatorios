let numero;
let notas = [];

agregaNota = function () {
     nota = recuperarInt("txtNota");
     if (nota > 4 && nota < 21) {
          notas.push(nota);
          console.log("=== == = == ===");
          for (let i = 0; i < notas.length; i++) {
               console.log(notas[i], i + 1);
          }
     } else {
          alert("Valor no permitido     el valor ingresado debe estar en el rango 5-20");
     }
}


obtieneAleatorio = function () {
     let numero = parseInt(Math.random() * 100 + 1);
     mostrarTexto("emimi", numero);
}