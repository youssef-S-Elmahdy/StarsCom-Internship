const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container"); /* since anime-container is a class not an id we use querySelectorAll() */
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "spinner.svg"; /* For adding a spinner go to loading.io, choose your spinner, download as svg (animated), drag into directory and use */ 

        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        console.log(data);
       
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        //console.log(data.url);
        animeImgEl.src = data.url;
        
        animeNameEl.innerText = data.artist;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happened, please try again";
    }
});