const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res) => {
  res.send("this is the about page");
})

app.post("/about", (req, res) => {
  res.send("this is a post request for the about page");
})

app.get("/about", (req, res) => {
  res.send("this is the about page");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
