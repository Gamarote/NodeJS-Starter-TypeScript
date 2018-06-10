import { Router, Request, Response, NextFunction } from 'express'
import { Method } from './Method'

export class AppRouter {
    private router: Router
    private BASE_PATH: string
    private handler: (req: Request, res: Response, next: NextFunction) => void

    constructor(
        BASE_PATH: string, 
        handler: (req: Request, res: Response, next: NextFunction) => void = (req, res, next) => { next() }
    ) {
        this.initRouter()
        this.BASE_PATH = BASE_PATH
        this.handler = handler
    }

    getBasePath(): string {
        return this.BASE_PATH
    }

    getRoutes(){
        return this.router
    }

    getHandler(){
        return this.handler
    }

    private initRouter(){
        if(this.router == undefined) this.router = Router()
    }

    setRoute(
        handler: (req: Request, res: Response, next?: NextFunction) => void, 
        path: string, 
        METHOD: Method
    ){
        this.initRouter()
        switch(METHOD){
            case Method.GET:
                this.router.route(path)
                    .get(handler)
                break
            case Method.POST:
                this.router.route(path)
                    .post(handler)
                break
            case Method.DELETE:
                this.router.route(path)
                    .delete(handler)
                break
            case Method.PUT:
                this.router.route(path)
                    .put(handler)
                break
            case Method.ALL:
                this.router.route(path)
                    .all(handler)
        }
    }
}