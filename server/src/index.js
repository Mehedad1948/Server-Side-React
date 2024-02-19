const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const Home = require('./client/components/Home').default
//  Using requre to becompatible to es15 modules with commonjs

const app = express()

app.get('/', (req, res) => {
    const content = renderToString(<Home />)
    console.log(content);
    res.send(content)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})