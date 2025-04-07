import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/contact", (req, res) => {
    res.send("My number: 00000000")
})

app.get("/about", (req, res) => {
    res.send("My name is Paulo")
})

app.listen(port, () => {
    console.log(`Server port = ${port}`)
})