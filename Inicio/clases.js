// class Vec{
//     constructor (x,y){
//         this.x = x;
//         this.y = y;
//     }
//     mas(vector){
//         return new Vec(this.x+vector.x, this.y +vector.y);      
//     }

//     menos(vector){
//         return new Vec(this.x - vector.x, this.y -vector.y);
//     }
// }

// let vec = new Vec(5,2);
// let vector = new Vec(2,1);
// vector.mas(vec)
// console.log(vector.mas(vec));
// console.log(vec);
// console.log("toString" in Object.create(null));

//DATE

//console.log(new Date().getHours())
function obtenerFecha(string) {
let [_, dia, mes, año] =
/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
return new Date(año, mes - 1, dia);
}
console.log(obtenerFecha("30-12-2003"));

let exp = /abc/;
console.log(exp.test("abdabc"));
console.log("papa".replace(/[p]/g, "m"));
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1"));