//Ex1
let m1 = [2,3,5,8,6,9,6,7,1];
function calculateSum(arr) {
    return arr.reduce(function(accumulator, element) {
        return accumulator += element;
    }, 0);
}

console.log(calculateSum(m1));

//Ex2
let m2 = ['s', 'n', 'o', 'i', 't', 'c', 'e', 'n', 'n', 'o', 'c', ' ', 'f', 'o', ' ', 'l', 'l', 'u', 'f', ' ', 'o', 's', 'l', 'a', ' ', 's', 'i', ' ', 't', 'i', ' ', 't', 'u', 'b', ' ', ',', 's', 'e', 'c', 'n', 'e', 'd', 'i', 'c', 'n', 'i', 'o', 'c', ' ', 'f', 'o', ' ', 'l', 'l', 'u', 'f', ' ', 's', 'i', ' ', 'e', 's', 'r', 'e', 'v', 'i', 'n', 'u', ' ', 'e', 'h', 'T'];
function reverseArray(arr){
    let result = new String();
    for(let i = 0; i < arr.length; i++){
        result += arr[arr.length-i-1];
    }
    console.log(result);
}

reverseArray(m2);

//Ex3
function reworkInput(){
    let str = prompt();
    let items = str.split(" ");
    let result = new String();
    items.forEach(element => {
        values = element.split("");
        values.forEach(value => {
            if(values.indexOf(value) == 0){
                result += value.toUpperCase();
            }
            else{
                result += value.toLowerCase();
            }
        });
        result += " ";
    });
    console.log('Result: ' + result);
    
}

reworkInput();

