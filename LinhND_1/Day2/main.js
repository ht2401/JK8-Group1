// Ex1
function caculateElectricalBill(){
    let isUsingPrepaidCard = Boolean(prompt('Co dung the tra truoc khong'));
    let numberOfElectricalUsed = Number(prompt('Nhap so kWh: '))
    if(!isUsingPrepaidCard){
        if(numberOfElectricalUsed <= 0){
            return 0;
        }
        else if(numberOfElectricalUsed <= 50){
            return 1806 * numberOfElectricalUsed;
        }
        else if(numberOfElectricalUsed <= 100){
            return 1866 * numberOfElectricalUsed;
        }
        else if(numberOfElectricalUsed <= 200){
            return 2167 * numberOfElectricalUsed;
        }
        else if(numberOfElectricalUsed <= 300){
            return 2729 * numberOfElectricalUsed;
        }
        else if(numberOfElectricalUsed <= 400){
            return 3050 * numberOfElectricalUsed;
        }
        else{
            return 3151 * numberOfElectricalUsed;
        }
    }
    else{
        return 2649 * numberOfElectricalUsed;
    }
}

console.log(Number(caculateElectricalBill() * 1,1));

//Ex2
function findNumbers(){
    let result = 0;
    let count = 1;
    console.log('Cac so nho hon 100 va chia het cho 7: ');
    while (result < 100){
        result = 7 * count;
        if(result > 100){
            break;
        }
        console.log(result);
        count++;
    }
}

findNumbers();

//Ex3
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

var checkedNumber = Number(prompt('Nhap SNT: '));
if(isNumberPrime(checkedNumber)){
    console.log('Day la SNT');
}
else{
    console.log('Day khong phai SNT');
}