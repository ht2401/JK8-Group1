// Ex1
function caculateElectricalBill(){
    let isUsingPrepaidCard = Boolean(prompt('Co dung the tra truoc khong'));
    let numberOfElectricalUsed = Number(prompt('Nhap so kWh: '))
    if(!isUsingPrepaidCard){
        switch(numberOfElectricalUsed){
            case(numberOfElectricalUsed <= 50):
                return 1806 * numberOfElectricalUsed;
            case(numberOfElectricalUsed <= 100):
                return 50 * 1806 + (numberOfElectricalUsed - 50) * 1866;
            case(numberOfElectricalUsed <= 200):
                return 50 + 1806 + 50 * 1866 + (numberOfElectricalUsed - 100) * 2167;
            case(numberOfElectricalUsed <= 300):
                return 50 + 1806 + 50 * 1866 + 100 * 2167 + (numberOfElectricalUsed - 200) * 2792;
            case(numberOfElectricalUsed <= 400):
                return 50 + 1806 + 50 * 1866 + 100 * 2167 + 100 * 2729 + (numberOfElectricalUsed - 300) * 3050;
            case(numberOfElectricalUsed > 400):
                return 50 + 1806 + 50 * 1866 + 100 * 2167 + 100 * 2729 + 100 * 3050 + (numberOfElectricalUsed - 400) * 3151;
            default:
                return 0;
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