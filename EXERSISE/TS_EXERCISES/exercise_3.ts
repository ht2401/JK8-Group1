const getFirstElement = <T>(arr: T[]): T | undefined => (arr.length > 0 ? arr[0] : undefined);

const arr: number[] = [1, 2, 3, 4, 5];
const firstElement: number | undefined = getFirstElement(arr);
console.log("The fist element of the array:", firstElement);

