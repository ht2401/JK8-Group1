let arr :number[] = [0];
function sum(num:number[]): number {
    return num.reduce( (a,b) => a+b);
}
arr.push(1,2,3,4);
console.log(sum(arr));