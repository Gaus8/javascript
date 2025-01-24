function Persona(nombre,edad,comida){
    this.nombre = nombre;
    this.edad = edad;
    this.comida = comida;
}
let x = {
    "casa": "mundo"
}

let persona1 = new Persona("Stiven",200,"Pizza")
//console.log(persona1[nombre])
console.log(Object.getPrototypeOf(x));

console.log(x.__proto__)