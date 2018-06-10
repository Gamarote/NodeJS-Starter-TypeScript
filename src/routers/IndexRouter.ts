import { AppRouter } from '../main/AppRouter'
import { Request, Response } from 'express'
import Route from '../utils/decorators'
import { Method } from '../main/Method'

export class IndexRouter extends AppRouter {
    constructor() {
        super('/')
    }

    @Route('/', Method.GET, Method.POST)
    sayHello(req: Request, res: Response){
        res.send('Hello World')
    }
}