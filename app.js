const express = require('express')
const app = express()
const port = 3000

// importa routers delle pizze
const postsRouters = require('./routers/posts')

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta home APP
app.get('/', (req, res) => {
    res.send("<h1>Rotta della home dei posts</h1>")
})

// istanza delle rotte per risorsa pizze
app.use('/posts', postsRouters)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})