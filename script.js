const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

showNotes()

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className='input-box';
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){ /*ensure img is written in all caps regardless of what u wrote prev. That is done by  DOM to maintain consistency
        */
        e.target.parentElement.remove();
        updateStorage()
        /*html is not case sensitive btw */

    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if (event.key==="Enter"){
        document.execCommand("inertLineBreak");
        event.preventDefault();
    }
})
const settingsButton = document.getElementById("settingsButton");
const settingsBar = document.getElementById("settingsBar");

// Add a click event listener to the settings button
settingsButton.addEventListener("click", function() {
    // Toggle the "open" class on the settings bar
    settingsBar.classList.toggle("open");
});
