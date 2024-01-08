export function calculateSum(array: Array<number>){
    let sum: number = 0;
    array.forEach(e => sum += e);
    return sum;
}