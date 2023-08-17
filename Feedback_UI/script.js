const ratingsEls = document.querySelectorAll(".rating");
let selectedRating = "";
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

ratingsEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        // console.log(event.target.innerText || event.target.parentNode.innerText); /* So that if we click on emoji as well, it is logged by using the parent element*/
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active"); /* add class so that when clicked stays green */
    });
});

btnEl.addEventListener("click", ()=> {
    if (selectedRating != ""){
        containerEl.innerHTML = `<strong> Thank you! </strong>
        <br>
        <br>
        <strong>Feedback ${selectedRating} </strong>
        <p> We'll use your feedback to improve our customer support </p>
        `
    }
})

function removeActive(){
    ratingsEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}