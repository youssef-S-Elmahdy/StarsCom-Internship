const btnEl = document.getElementById("btn");
const apikey = "kCCD5eTMSzZ1Vq7QuZiTkg==vuohfj4j7vLLfiP7";
const options = {
    method : "GET",
    headers: {
        "X-Api-key" : apikey
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"; // added limit 1 as needed
// get from api ninja
const jokeEl = document.getElementById("jokes");
console.log(jokeEl);
async function getJoke(){ // changed to async becasue we used await which is asynchronus
    try {
        jokeEl.innerText = "Updating...."; // needed as joke is loaded from Api
        btn.disabled = true; // so as joke is updating, we dont press on button
        btn.innerText = "Loading...."
        const response = await fetch(apiURL, options); // wait for response using await before continuing execution
        // console.log(response);
        const data = await response.json(); // transforms to json
        console.log(response);
        btn.disabled = false; // enables the button again when joke is loaded
        btn.innerText = "Tell me a joke"; // returns button back to original
        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btn.disabled = false; // enables the button again when joke is loaded
        btn.innerText = "Tell me a joke"; // returns button back to original
        
    }
}

btnEl.addEventListener("click", getJoke)