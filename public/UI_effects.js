export function entryInput(){
    console.log(this.value)
    if(this.value.length === 0){
        this.labels[0].classList.add("hiddenElement");
    }
    else{
        this.labels[0].classList.remove("hiddenElement")
    }
}

export function entryMethods(){  
    const entries = document.querySelectorAll("input");
    entries.forEach(entry =>{
        entry.addEventListener("input", entryInput);

        if(entry.value.length > 0){
            entry.labels[0].classList.remove("hiddenElement")
        }
    })
}