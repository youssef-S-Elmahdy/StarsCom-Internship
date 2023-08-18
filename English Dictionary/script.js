const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

  
inputEl.addEventListener("keyup", (e)=>{ /*keyup triggers a function whenever a key is press */
    if (e.target.value && e.key == "Enter"){/* if there is a value in input bar and enter has been pressed*/
        fetchAPI(e.target.value);
    } 
});

async function fetchAPI(word){
    try {
        infoTextEl.style.display = "block";
        meaningContainerEl.style.display = "none";

        infoTextEl.innerText = `Searching the meaning of "${word}"`;
        const url =  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=> 
        res.json()); /* always need to use await when fetching from API */

        if(result.title){
            meaningContainerEl.style.display = "block";
            infoTextEl.style.display = "none";
            titleEl.innerText = word;
            meaningEl.innerText = "N/A";
            audioEl.style.display = "none";
        }
        else{
            infoTextEl.style.display = "none";
            meaningContainerEl.style.display = "block";
            audioEl.style.display = "inline-flex";
            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }      
    } catch (error) {
        infoTextEl.innerText = `An error happened, try again later`;
    }
    
    
}