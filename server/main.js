import express from 'express'
import path from 'path'

const app = new express()

app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'pug')

app.use((req, res, next) => {
    console.log(`${req.method} request received for: ${req.originalUrl}`)
    next()
})

// Render and serve pug views
app.get('/', (req, res) => {
    res.render('index', { title: 'index page' })
})
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})
app.get('/test', (req, res) => {
    res.render('test', { title: 'Test', message: 'Views appear to be working' })
})

// Serve public static files
app.use(express.static(path.join(__dirname, '../client/static')))

app.listen(80, () => {
    console.log('Server is now listening on port 80.')
})