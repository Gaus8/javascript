//DUPLICADOS EN ARRAY
var removeDuplicates = function(nums) {
    let k = [];
 
    for(let i = 0;i<nums.length;i++){
        let duplicado = false;
     for(let j = 0;j<k.length;j++){
        if(nums[i]=== k[j]){
            duplicado = true;
            break;
        }
    }
        if(!duplicado){
            k.push(nums[i])
        }
        
    
    
  } 
  return k;
};
console.log(removeDuplicates([1,1,2]))

caf\u00e9 = 100

console.log("\u{1F550}")
console.log("one\
 long\
 line")

console.log(`uno
    dos`)
let h=null
console.log(h)
const k = "4" * "6"
console.log(k)

let array = [1,2,3,4];

let arr = array.map((x) =>x*2)
let sum = 0;

console.log(arr)
console.log(sum)

for(let i in arr){
    arr.push(arr[i*2]);
}
 console.log(arr)