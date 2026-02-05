import { entryMethods } from "./UI_effects.js";

const usernameEntry = document.getElementById("usernameEntry");
const passwordEntry = document.getElementById("passwordEntry");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

entryMethods();

registerBtn.addEventListener("click", toRegisterPg);
loginBtn.addEventListener("click", login);

async function login(){
    const user ={
    username: usernameEntry.value,
    inputPassword: passwordEntry.value}
    
    const response = await fetch(`/login`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(user)
    });

    const result = response.json();

    if(response.ok){
        window.localStorage.setItem("Username", user.username)
        window.location.href = "/homePage";        
    }


}

async function toRegisterPg(){
    const username = usernameEntry.value;
    const password = passwordEntry.value;

    if(usernameEntry.dataset.defaultText !== "true"){  
        if(passwordEntry.dataset.defaultText !== "true"){
            localStorage.setItem("tempPassword", password)
       
        window.location.href = `/registration?user=${username}`
        return;
        }
    }

    window.location.href=`/registration`;
}