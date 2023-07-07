const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3001

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/partials')

app.get('/', (req, res) => {
  res.render('home', {
    menu5: 'contact',
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    menu5: 'contact',
  })
})

app.get("/sse", (req, res) => {
  res.set("Content-Type", "text/event-stream")
  res.set("Connection", "keep-alive")
  res.set("Cache-Control", "no-cache")
  res.set("Access-Control-Allow-Origin", "*")
  // console.log("client connected to sse")
  setInterval(function () {
    var now = new Date();
    let timeObj = {
      hr: now.getHours(),
      min: now.getMinutes(),
      sec: now.getSeconds(),
    }
    res.status(200).write(`data: ${JSON.stringify(timeObj)}\n\n`)
  }, 1000)
})

app.get('*', (req, res) =>{
  res.status(404).render('404')
})


app.listen(port, () => {
  console.log(`My_app listening at http://localhost:${port}`)
})















