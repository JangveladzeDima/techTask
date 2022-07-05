import {TimeService} from "./time-service.js";
import {WorkerFactory} from "./worker.factory.js";
import {workerData} from "node:worker_threads";

const timeService = new TimeService()
const workerFactory = new WorkerFactory()
const storage = []
const worker = workerFactory.createWorker('./worker.js')
worker.on('message', ({ price, amount, side }) => {
    setInterval(() => {
        const timestamp = timeService.getTime()
        const data = {
            price,
            amount,
            timestamp,
            isBuy: side,
            tradesCount: 1
        }
        storage.push(data)
        console.log(data)
    }, 2500)
})