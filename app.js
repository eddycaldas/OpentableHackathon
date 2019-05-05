const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const routes = {
  knowledgearticle: require('./routes/knowledgearticle')
}


app.use('/knowledgearticle', routes.knowledgearticle)

app.listen(PORT, () => console.log(`port ${PORT}`))