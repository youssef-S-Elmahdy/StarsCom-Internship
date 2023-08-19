const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app"); // gets the div id so we know correct place to insert the new note

getNotes().forEach((note)=>{
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
});

function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?"); // This adds the drop down confiriming if we want to delete, returns true or false

        if(warning){
            deleteNote(id, element);
        }
    });

    element.addEventListener("input", () =>{
        updateNote(id, element.value)
    });
    return element;
}   

function deleteNote(id, element){
    const notes = getNotes().filter((note)=> note.id != id);
    saveNote(notes);
    appEl.removeChild(element);
}
function updateNote(id, content){
    const notes = getNotes();
    const target = notes.filter((note)=> note.id == id)[0]; // filter gives us each element with the id we want in an array, but we only want the first one 
    target.content = content;
    saveNote(notes);
}

function addNote(){
    const notes = getNotes(); // we place old notes from saved local broswer and place them in array
    const noteObj ={
        id: Math.floor(Math.random()*100000),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl); //inserts the new note before the button element
    notes.push(noteObj);
    
    saveNote(notes);
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]"); // we convert from JSON to array using the JSON.parse from local storage
    //the item we called "note-app", and if not found we return an empty array so we don't cause an error
}

function saveNote(note){
    localStorage.setItem("note-app", JSON.stringify(note)); // saves notes to local browser. fisrt parameter is the key name can be called anything
    //the second parameter must be a string, so we use the JSON.stringify to convert the array to one string

}


btnEl.addEventListener("click", addNote);