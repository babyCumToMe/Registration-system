const express = require("express");
const path = require("path")
const app = express();
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' http://localhost:35729; connect-src 'self' ws://localhost:35729;"
  );
  next();
});

//======DEV CODE (for automatic refreshing of front end)===//
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

liveReloadServer.server.once("connection", ()=>{
    setTimeout( ()=>{
        liveReloadServer.refresh("/");
    }, 100)
});

app.use(connectLiveReload())
//=====END OF DEV CODE=======//

const {createUser, findUser, getUserInfo} = require(path.join(__dirname, "userHandling.js"));

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/registration', (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "registration.html"));
})

app.post("/registration", async (req, res)=>{
    const user = req.body;
    const username = user.username;

    if(!(await findUser(username))){
        await createUser(user);
        res.status(201).json({message: `${username} has been created`})
    }
    else{
        res.status(400).json({message: `${username} already exists. Could not create account`})
    }
})

app.get("/api/users/:username", async (req, res)=>{
    const {username} = req.params;
    if(await findUser(username)){
        const userInfo = await getUserInfo(username);
        
        res.json(userInfo);
    }
    else{
        res.status(404).json({error: "User not found"});
    }
})

app.get("/homePage", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "homePage.html"));
})

app.post("/login", async (req, res)=>{
    const {inputPassword, username} = req.body;
    console.log(inputPassword, username)
    if(!(await findUser)){
        res.status(404).json({error: `${username} not found, consider signing up`});
        return;
    }

    const {password} = await getUserInfo(username);

    if(password !== inputPassword){
        res.status(401).json({message: "Incorrect password"})
        return;
    }
    
    res.status(200).json({message: `${username} successfully logged in`})

})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...")
})