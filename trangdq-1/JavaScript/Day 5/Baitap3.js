// Viết ctr cho phép nhập vào tên người ở dạng bất kỳ, sau đó tiến hành chuẩn hóa tên rồi in ra console
// input: lE thI hUyeN mY
// output: Le Thi Huyen My

var x = prompt("Nhập tên người dùng: ")

function convertToValidName(x) {
    x = x.toLowerCase().trim()
    let components = x.split(" ")
    let result = ""
    components = components.forEach(component => { 
        component = component.replace(component.charAt(0), component.charAt(0).toUpperCase()) 
        result = result.concat(" " + component)
    })
    return result
}
console.log(convertToValidName(x));
