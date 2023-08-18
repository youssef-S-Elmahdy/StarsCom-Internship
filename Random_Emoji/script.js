const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");
const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=58fdd2e3f205eacb87bd10681d0ea2cb5df86316") // used access key here in url
    data = await response.json();
    for (let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();


btnEl.addEventListener("click", ()=> {
    const randomNum1 = Math.random(); //generates a random number between 0 and 1
    const randomNum2 = Math.floor(randomNum1 * emoji.length); // generates a random number between 0 and 1499
    btnEl.innerText = emoji[randomNum2].emojiName;
    emojiNameEl.innerText = emoji[randomNum2].emojiCode;
});