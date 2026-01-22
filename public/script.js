const usernameEntry = document.getElementById("usernameEntry");
const passwordEntry = document.getElementById("passwordEntry");
const entries = document.querySelectorAll("input");

function emptyEntry(entry){
    const descriptionLbl = entry.labels;

    if(entry.value.length === 0){
        entry.classList.add("empty-entry");
        entry.id === "usernameEntry" ? entry.value = "Username" : entry.value = "Password";
        descriptionLbl[0].classList.add("hiddenElement");  
        entry.dataset.defaultText = "true";     
        entry.style.color = "grey" ;
    }
}

function entryClick(entry){
    const descriptionLbl = entry.labels;

    if (entry.dataset.defaultText === "true"){
        entry.value = "";
        entry.dataset.defaultText = "false";
    }

    entry.style.color = "black";
    descriptionLbl[0].classList.remove("hiddenElement");  
}