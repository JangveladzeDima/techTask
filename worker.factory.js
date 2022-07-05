import {Worker} from 'node:worker_threads';

export class WorkerFactory {
    createWorker(filePath) {
        const pool = new Worker(filePath);
        return pool
    }
}
