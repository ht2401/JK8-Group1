import fetch from "node-fetch";

fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));

    fetch("http://localhost:3000/comments")
    .then((res) => res.json())
    .then((data) => console.log(data));

    fetch("http://localhost:3000/profile")
    .then((res) => res.json())
    .then((data) => console.log(data));