// Commonjs
// const express = require('express')
// const React = require('react')
// const { renderToString } = require('react-dom/server')
// const Home = require('./client/components/Home').default
//  Using requre to becompatible to es15 modules with commonjs

// Es2015 , To be similar to client codes , make possible by webpack
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'

const app = express()

app.get('/', (req, res) => {
    const content = renderToString(<Home />)
    console.log(content);
    res.send(content)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})