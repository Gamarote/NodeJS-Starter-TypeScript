import { App } from './main/App'
import routers from './routers'

const app = new App(8000, ...routers)
app.start()