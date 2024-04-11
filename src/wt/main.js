import { Worker } from 'worker_threads'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'
import os from 'os';

const fileDirectory = getDirname(import.meta.url)

const createWorker = (numberToCalculate) => {
    const workerFileName = join(fileDirectory, 'worker.js')
    
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerFileName, {workerData: {numberToCalculateFibonacci: numberToCalculate} })

        worker.on('message', (data) => {
            resolve({
                status: 'resolved',
                data,
            })
        })

        worker.on('error', () => {
            reject({
                status: 'error',
                data: null,
            })
        })
    })
}

const performCalculations = async () => {
    const cpuCores = os.cpus()
    const hostCoresNumber = cpuCores.length
    let data = []

    for (let i = 0; i < hostCoresNumber; i++) {
        const numberToStart = 10
        data.push(createWorker(i + numberToStart))
    }

    const result = await Promise.all(data)
    console.log(result)
};

await performCalculations();