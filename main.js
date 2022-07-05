import {TimeService} from "./time-service.js";
import {WorkerFactory} from "./worker.factory.js";

const timeService = new TimeService()
const workerFactory = new WorkerFactory()
const worker = workerFactory.createWorker('./worker.js')
const storage = []
worker.on('message', ({ price, amount, side }) => {
    setInterval(() => {
        const timestamp = timeService.getTime()
        const data = {
            price,
            amount,
            timestamp,
            isBuy: side,
            tradesCount: storage.length + 1
        }
        storage.push(data)
        console.log(data)
    }, 250)
})