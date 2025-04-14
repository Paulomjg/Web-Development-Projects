import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000

var passwordIsTrue = false

app.use(bodyParser.urlencoded({ extended: true }))

function checkPassword (req, res, next) {
    var pass = req.body["password"]
    if (pass === "ILoveProgramming") {
        passwordIsTrue = true
    }
    next()
}

app.use(checkPassword)

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post("/check", (req, res) => {
    if(passwordIsTrue) {
        res.sendFile(__dirname + '/public/secret.html')
    } else {
        res.send("<h1>Incorrect Password</h1>")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})