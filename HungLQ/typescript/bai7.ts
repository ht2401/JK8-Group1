// import {Promise} from './node_modules/es6-promise';
// const promiseExp = (apiUrl:string) =>{
//     return new Promise((resolve, reject) => {
//         fetch(apiUrl)
//         .then(data => {return data.json();})
//         .then(data => resolve(data))
//         .catch(error => reject("loi"))
//     })
// }
// promiseExp('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.log(error))

// async 

const callByAsync = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}
callByAsync().then(data => console.log(data))