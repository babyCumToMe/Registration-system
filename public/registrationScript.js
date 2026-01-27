import {entryMethods} from "./UI_effects"

const usernameEntry = document.getElementById("usernameEntry");
const passwordEntry = document.getElementById("passwordEntry");
const ageEntry = document.getElementById("ageEntry");
const emailEntry = document.getElementById("emailEntry");

entryMethods();
autoFill();

function autoFill(){
    //checking for the username value in the URL query params
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('user');

    if(username){
        usernameEntry.value = username;   
        
        const tempPassword = localStorage.getItem("tempPassword");

        if(tempPassword){
            passwordEntry.value = tempPassword;
            localStorage.removeItem("tempPassword");
        }
    }
}

