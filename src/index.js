`use strict`

import 'babel-polyfill'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// --- Routers ---
import indexRouter from './routers/index.router'
// ---------------

var app = express()

app.set('PORT', process.env.PORT || 8000)
app.use(cors())
app.use(bodyParser.json({  }))
app.use(bodyParser.urlencoded({  }))

// --- Routes ---
app.use('/', indexRouter)
// --------------

app.listen(app.get('PORT'), ()=>{
    console.log(`Express server listening on port ${app.get('PORT')}`)
})
