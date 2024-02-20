// Es2015 , To be similar to client codes , make possible by webpack
import express from 'express'
import renderer from './helpers/renderer'
import createaStore from './helpers/createStore'

const app = express()

//  
app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = createStore()

    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})