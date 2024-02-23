require("dotenv").config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "Himanshu-Bharti-Ji",
    "id": 125482223,
    "node_id": "U_kgDOB3q07w",
    "avatar_url": "https://avatars.githubusercontent.com/u/125482223?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Himanshu-Bharti-Ji",
    "html_url": "https://github.com/Himanshu-Bharti-Ji",
    "followers_url": "https://api.github.com/users/Himanshu-Bharti-Ji/followers",
    "following_url": "https://api.github.com/users/Himanshu-Bharti-Ji/following{/other_user}",
    "gists_url": "https://api.github.com/users/Himanshu-Bharti-Ji/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Himanshu-Bharti-Ji/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Himanshu-Bharti-Ji/subscriptions",
    "organizations_url": "https://api.github.com/users/Himanshu-Bharti-Ji/orgs",
    "repos_url": "https://api.github.com/users/Himanshu-Bharti-Ji/repos",
    "events_url": "https://api.github.com/users/Himanshu-Bharti-Ji/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Himanshu-Bharti-Ji/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Himanshu Bharti",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-02-15T15:26:16Z",
    "updated_at": "2024-02-23T08:34:42Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/bharti", (req, res) => {
    res.send("I am Himanshu Bharti")
})

app.get("/good", (req, res) => {
    res.send("<h1>I am a Good Boy</h1>")
})

app.get("/githubdata", (req, res) => {
    res.send(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})