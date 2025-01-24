//RECURSIVIDAD

function potencia(base, exponente) {
    if (exponente == 0) {
    return 1;
    } else {
  //  console.log(base)
  // console.log(exponente)
    return base * potencia(base, exponente - 1);
    }
    }
   // console.log(potencia(2, 3));
//EJEMPLO 2

   function encontrarSolucion(objetivo) {//PARAMETRO
    function encontrar(actual, historia) {
        if (actual == objetivo) {
        return historia;
        } else if (actual > objetivo) {
        return null;
        } else {
        return encontrar(actual + 5, `(${historia} + 5)`) ||
        encontrar(actual * 3, `(${historia} * 3)`);
        }
        }
        return encontrar(1, "1");//PASAR ARGUMENTOS FUNCION INTERNA
        }
        console.log(encontrarSolucion(26));