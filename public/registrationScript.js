const usernameEntry = document.getElementById("usernameEntry");
const passwordEntry = document.getElementById("passwordEntry");
const ageEntry = document.getElementById("ageEntry");
const emailEntry = document.getElementById("emailEntry");

function autoFill(){
    //checking for the username value in the URL query params
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('user');

    if(username){
        usernameEntry.value = username;
    }

    localStorage.getItem("tempPassword").length > 0 ? passwordEntry.value = localStorage.getItem('tempPassword');

    localStorage.removeItem("tempPassword");
}