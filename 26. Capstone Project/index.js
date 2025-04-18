import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

let posts = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", { posts })
})

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content, id: Date.now() });

    res.redirect("/");
})

app.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (post) {
        res.render("edit.ejs", { post });
    } else {
        res.redirect("/");
    }
});

app.post("/edit/:id", (req, res) => {
    const { title, content } = req.body;
    const postIndex = posts.findIndex(p => p.id == req.params.id);
    if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], title, content }; 
    }
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})