let price = 20;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];
const arreglo = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100]
];

const cash = document.getElementById("cash");
const btnPurchase = document.getElementById("purchase-btn");
const textoParrafo = document.querySelector(".change-due-class")
const changing = document.getElementById("change-due");

//VALIDAR SI EL DINERO ES SUFICIENTE; NO LO ES; O EXCEDE
 //USO DE .REDUCE() PARA RETORNAR LA SUMA

function calculateChange(cashValue,cid) {
    let totalCid =parseFloat( cid.reduce(
        (sum,[_,amount]) =>  sum +amount,
         0).toFixed(2));
      
    if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
    }
    else if (cashValue === price) {
        textoParrafo.style.display = "block";
        changing.textContent = "No change due - customer paid with exact cash";
    }
    else if(totalCid < cashValue){

        textoParrafo.style.display = "block";
        changing.textContent = "Status: INSUFFICIENT_FUNDS";
    }

    let changeArray = [];
    let remainingChange = cashValue - price;

    for(let i = (arreglo.length - 1); i >= 0; i--){
        let unit = arreglo[i][0];
        let unitValue = arreglo[i][1];
        let unitInDrawer = cid[i][1];

        console.log(unit);
        console.log(unitValue);
        console.log(unitInDrawer);
    }

}

btnPurchase.addEventListener("click", () => {

    const cashValue = parseFloat(cash.value);
    calculateChange(cashValue,cid)
})

