`use strict`

import { Router } from 'express'
// --- Import controllers ---

var router = Router()

const initRouter = () => {
    router.route('/')
        .get(sayHello)

    return router
}

// --- Functions ---
const sayHello = (req, res) => {
    res.send('Hello world')
}
// -----------------

export default initRouter()