// document.getElementById("submit").onclick(handlerForm);

function handlerForm(){
    // preventDefault()
    let inputA = document.getElementById('a');
    let valueA = (Number)(inputA.value);
    let inputB = document.getElementById('b');
    let valueB = (Number)(inputB.value);
    let sum = valueA + valueB;
    console.log(sum)
    document.getElementById("message").innerHTML = sum
}
document.getElementById("bai1").addEventListener("submit",(e) => {
    e.preventDefault();
    handlerForm();
});
// 