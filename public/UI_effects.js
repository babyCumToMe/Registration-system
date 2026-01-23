export function emptyEntry(){
    const descriptionLbl = this.labels;

    if(this.value.length === 0){
        this.classList.add("empty-entry");
        this.id === "usernameEntry" ? this.value = "Username" : this.value = "Password";
        descriptionLbl[0].classList.add("hiddenElement");  
        this.dataset.defaultText = "true";     
        this.style.color = "grey" ;
    }
}

export function entryClick(){
    const descriptionLbl = this.labels;

    if (this.dataset.defaultText === "true"){
        this.value = "";
        this.dataset.defaultText = "false";
    }

    this.style.color = "black";
    descriptionLbl[0].classList.remove("hiddenElement");  
}

export function entryMethods(){  
    const entries = document.querySelectorAll("input");

    entries.forEach(entry =>{
        entry.addEventListener("click", entryClick);
        entry.addEventListener("blur", emptyEntry);
    })
}