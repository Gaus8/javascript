/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arreglo =[]
    const reverseNumberOne = reversa(l1).join("");
    const reverseNumberTwo = reversa(l2).join("");
    const suma = Number(reverseNumberOne) + Number(reverseNumberTwo);
    const k = suma.toString().split("");
    for(let i = 0; i <k.length;i++){
        const num = Number(k[i]);
        arreglo.push(num);
    }
  return reversa(arreglo);
};

const reversa = (array)=>{
    let arr = [];
    array.forEach((i)=> arr.unshift(i));
    return arr;
}

console.log(reversa([1,2,3]));

console.log(addTwoNumbers([2,4,3],[5,6,4])); 