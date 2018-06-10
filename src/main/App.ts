import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { AppRouter } from './AppRouter'

export class App {
    private app: express.Application = express()
    private PORT: number = 8000

    constructor(PORT: number = 8000, ...routers: AppRouter[]) {
        this.PORT = this.setupPort(PORT)

        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))

        routers.forEach(router => {
            this.app.use(
                router.getBasePath(), 
                router.getHandler(), 
                router.getRoutes()
            )
        })
    }

    start(callback: (PORT: number) => void = (PORT: number) => { 
        /* tslint:disable-next-line:no-console */
        console.log(`Express server listening on port ${ PORT }`) 
    }){
        this.app.listen(this.PORT, () => {
            callback(this.PORT)
        })
    }

    private setupPort(PORT: number): number {
        const envPORT = Number(process.env.PORT)
        if(isNaN(envPORT)) return PORT
        return envPORT
    }
}
