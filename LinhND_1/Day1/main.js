// Ex 1
function printUserInfo(){
    fullName = prompt('Nhap ho ten: ');
    age = Number(prompt('Nhap tuoi: '));
    phoneNo = prompt('Nhap so dt: ');
    console.log('Thong tin nguoi dung: ');
    console.log('Ho ten: ' + fullName);
    console.log('Tuoi: ', age);
    console.log('SDT: ', phoneNo);
}

printUserInfo();

// Ex 2
function getArea(){
    length = prompt('Nhap chieu dai: ');
    width = prompt('Nhap chieu rong: ');
    if(length < width){
        temp = length;
        length = width;
        width = temp;
    }
    return length * width * 6;
}

console.log(getArea());

// Bai tap them
// Bai 1
function isPositiveOrNegative(checkedNumber){
    if(isNaN(checkedNumber)){
        checkedNumber > 0 ? console.log("Day la so nguyen duong") : console.log("Day la so nguyen am");
    }    
    else{
        console.log("Day khong phai so nguyen");
    }
}

isPositiveOrNegative(3.3);

// Bai 2
function solveFirstDegreeEquation(a, b){
    if(a === 0 && b === 0){
        console.log("PT co vo so nghiem");
    }
    else if(a === 0 && b !== 0){
        console.log("PT vo nghiem");
    }
    else if(a !== 0 && b === 0){
        console.log("PT co nghiem duy nhat: x = 0");
    }
    else{
        console.log("PT co nghiem duy nhat: " + parseFloat(-(parseFloat(b) / a)));
    }
}

solveFirstDegreeEquation(0, 5);

// Bai 3
function isNumberPrime(number){
    if(number < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function isSquareNumber(x){
    if(x <= 0){
        return false;
    }
    else if(isNaN(Math.sqrt(x))){
        return false;
    }
    return true;
}

console.log(isSquareNumber(9))



