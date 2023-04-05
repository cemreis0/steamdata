const express = require('express')
var cors = require("cors")
const axios = require('axios')

const steamapikey = ""
const steamid = ""

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

var data = null

axios({
    method: 'get',
    url: `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamapikey}&steamid=${steamid}&format=json`,
    responseType: 'JSON'
  })
  .then((response) => {
    data = response.data
  })

app.listen(port, () => console.log(`Listening on port ${port}`))
app.get('/steamdata', (req, res) => {
  res.send({ data: data })
})