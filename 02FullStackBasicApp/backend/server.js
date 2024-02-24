import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready")
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A Joke",
            content: "This is a Joke"
        },
        {
            id: 1,
            title: "A another Joke",
            content: "This is a another Joke"
        },
        {
            id: 1,
            title: "A third Joke",
            content: "This is a third Joke"
        },
        {
            id: 1,
            title: "A forth Joke",
            content: "This is a forth Joke"
        },
        {
            id: 1,
            title: "A fifth Joke",
            content: "This is a fifth Joke"
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});