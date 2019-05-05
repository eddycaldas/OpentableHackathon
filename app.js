const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routes = {
  knowledgearticle: require('./routes/knowledgearticle')
}

app.use('/knowledgearticle', routes.knowledgearticle)

app.listen(PORT, () => console.log(`port ${PORT}`))