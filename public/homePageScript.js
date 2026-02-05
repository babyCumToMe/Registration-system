const display = document.getElementById("display");
const changeBtn = document.getElementById("changeBtn");

autoFill();

async function autoFill(){
    const localUname = window.localStorage.getItem("Username");

    const response = await fetch(`/api/users/${localUname}`)    
    const result  = await response.json();

    if(response.ok){
         const {username, password, age, email} = result;

         display.innerHTML = `
            <p>Username: ${username}</p>
            <p>Password: ${password}</p>
            <p>Age: ${age}</p>
            <p>Email: ${email}</p>`
    }
}