// Es2015 , To be similar to client codes , make possible by webpack
import express from 'express'
import renderer from './helpers/renderer'

const app = express()

//  
app.use(express.static('public'))

app.get('*', (req, res) => {
 
    res.send(renderer(req))
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})