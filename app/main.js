console.log('main js here')
import { ZooController } from "./controllers/ZooController.js"

let zooController = new ZooController()

console.log(zooController)

window['zooController'] = zooController