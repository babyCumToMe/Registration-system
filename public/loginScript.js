import { register } from "node:module";
import { entryMethods } from "./UI_effects.js";

const usernameEntry = document.getElementById("usernameEntry");
const passwordEntry = document.getElementById("passwordEntry");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementsByName("loginBtn");

entryMethods();
registerBtn.addEventListener("click", toRegisterPg);
loginBtn.addEventListener("click", login)

async function login(){
    const username = usernameEntry.value;

    await fetch(`http://localhost:5000/${username}`)
}

async function toRegisterPg(){
    const username = usernameEntry.value;
    const password = passwordEntry.value;

    if(usernameEntry.dataset.defaultText !== "true"){  
        if(passwordEntry.dataset.defaultText !== "true"){
            localStorage.setItem("tempPassword", password)
        }
       
        window.location.href(`/registration?user=${username}`)
        return;
    }

    window.location.href(`/registration`);
}