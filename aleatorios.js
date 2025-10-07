let numero, nota, nota1;
let aleatorios = [];

generarAleatorios = function () {
     nota = recuperarInt("txtNota");
     if (nota > 4 && nota < 21) {

          console.log("=== == = == ===");
          for (let i = 0; i < nota; i++) {
               console.log(nota, i + 1);
          }

          numero = obtieneAleatorio(x);
          console.log(numero);
          aleatorios.push(nota1);
     } else {
          alert("Valor no permitido     el valor ingresado debe estar en el rango 5-20");
     }
}


obtieneAleatorio = function () {
     numero = parseInt(Math.random() * 100 + 1);
     mostrarTexto("emimi", numero);
}