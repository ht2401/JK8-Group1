function convertToValidName(x) {
    x = x.toLowerCase().trim();
    let components = x.split(" ");
    let result = "";

    components = components.map(component => { 
        return component.replace(component.charAt(0), component.charAt(0).toUpperCase());
    });

    result = components.join(" ");
    return result;
}

// Test với input "lE thI hUyeN mY"
const inputName = "lE thI hUyeN mY";
const normalizedName = convertToValidName(inputName);

console.log("Tên sau khi chuẩn hóa:", normalizedName);

