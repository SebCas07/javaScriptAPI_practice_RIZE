console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container")
const gifBtn = document.querySelector("#fetch-gif-btn")
const searchInput = document.querySelector("#search-input")

gifBtn.addEventListener("click", async function(){
    // grab what user typed
    const query = searchInput.value 

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=U7Kalu7XRiJmzVTKDjVWzWRWjTUNWrrb&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const data = await response.json(); 
    const images = data.data.map(gif => gif.images.original.url);

    // clear previous results first 
    gifContainer.innerHTML="" 
    for(let i = 0; i < images.length; i++){
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    } 
    getGiphy()
})