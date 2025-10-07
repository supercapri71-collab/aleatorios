let numero, nota, arregloNumeros;
let aleatorios = [];

generarAleatorios = function () {
     nota = recuperarInt("txtNota");
     if (nota > 4 && nota < 21) {
          console.log("=== == =", nota, " == ===");
          for (let i = 0; i < nota; i++) {
               console.log(i + 1);
          }
          numero = obtieneAleatorio();
          aleatorios.push(numero);
          arregloNumeros = aleatorios.length;
          muestraResultado(arregloNumeros);
     } else {
          alert("Valor no permitido     el valor ingresado debe estar en el rango 5-20");
     }
}

obtieneAleatorio = function () {
     numero = parseInt(Math.random() * 100 + 1);
     mostrarTexto("emimi", numero);
     return numero;
}

muestraResultado = function (arregloNumeros) {
     console.log("*** ** * ** ***");

     for (let i = 0; i < arregloNumeros; i++) {
          console.log(i + 1,aleatorios[i]) ;
     }
     console.log("*** ** * ** ***");
}