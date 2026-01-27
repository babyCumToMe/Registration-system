import {entryMethods, entryInput} from "./UI_effects.js";

const usernameEntry = document.getElementById("usernameEntry");
const passwordEntry = document.getElementById("passwordEntry");
const ageEntry = document.getElementById("ageEntry");
const emailEntry = document.getElementById("emailEntry");
const registerBtn = document.getElementById("registerBtn");

entryMethods();
autoFill();

registerBtn.addEventListener("click", registerUser);

function autoFill(){
    //checking for the username value in the URL query params
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('user');

    if(username){
        usernameEntry.value = username;   
        usernameEntry.dispatchEvent(new Event('input'));

        const tempPassword = localStorage.getItem("tempPassword");

        if(tempPassword){
            passwordEntry.value = tempPassword;
            passwordEntry.dispatchEvent(new Event('input'));
        }
    }
}

async function registerUser(){
    const user = {    
        'username': usernameEntry.value,
        'password': passwordEntry.value,
        'age': ageEntry.value,
        'email': emailEntry.value
    }
    
    const response = await fetch('/registration', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json" 
        },
        body: JSON.stringify(user)
    })

    const result = await response.json();
}