let input = document.getElementById("text-input");
let resultado = document.getElementById("result");
let boton = document.getElementById("check-btn");


function validar(palabra){
    let arreglo = [];
    let arreglo2 = [];
    const palabraLower = palabra.toLowerCase();
    let regex = /[,./()_-\s]/g;
    const nuevaPalabra = palabraLower.replace(regex,"");
    for(const letra of nuevaPalabra){
        arreglo.push(letra)
        arreglo2.unshift(letra);
    }
    let esPalindromo = true;
    for(let i = 0; i < arreglo.length;i++){
        if(arreglo[i] !== arreglo2[i]){
            esPalindromo = false;
        }
    }
    if (esPalindromo){
        return true;
    }else{
        return false;
    }
}

boton.addEventListener("click",()=>{

    if(input.value ===""){
        alert("Please input a value")
    }else{
        resultado.style.display = "block";
        if(validar(input.value)){
            resultado.innerText = `${input.value} is a palindrome`
        }
        else{
            resultado.innerText = `${input.value} is not a palindrome`
        }
        
    }

})
  ;
 


