import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'

export default () => {
    return (
        <div>
            {/* show riute if the address is exactly / */}
            <Route exact path="/" component={Home} />
        </div>
    )
}