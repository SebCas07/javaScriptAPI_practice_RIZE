console.log("script.js loaded");

let data = fetch("https://api.giphy.com/v1/gifs/search?api_key=U7Kalu7XRiJmzVTKDjVWzWRWjTUNWrrb&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");

console.log(data); 

async function getGiphy () { 
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=U7Kalu7XRiJmzVTKDjVWzWRWjTUNWrrb&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
    const data = await response.json(); 
    const fact = data.facts[0]; 

    const output = document.getElementById("gif-contanier");
    output.textContent = fact;
}

getGiphy()