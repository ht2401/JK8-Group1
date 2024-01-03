var name = document.querySelector('input[name="name"]').value
var email = document.querySelector('input[name="email"]').value
var website = document.querySelector('input[name="website"]').value
var message = document.querySelector('#message').value

function validateForm(e) {
    e.preventDefault() 

    if (name.trim() === "") {
        console.log("Name is required!");
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!format.test(email)) {
        console.log("Invalid email!")
    }
    try {
        new URL(website)
    } catch (err) {
        console.log("Invalid url!")
    }
    if (message.trim() === "") {
        console.log("Message should not be empty!")
    }
    console.log(); 
}
const form = document.querySelector('form')
form.addEventListener('submit', validateForm)

