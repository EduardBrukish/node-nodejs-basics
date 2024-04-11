import { createReadStream } from 'node:fs';
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const read = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const fileNameToRead = join(fileDirectory, 'files', 'fileToRead.txt')

    const fileData = await new Promise((res, rej) => {
        let readStream = createReadStream(fileNameToRead, 'utf8')
        let chunk = ''

        readStream.on('data', (data) => {
            chunk = chunk + data
        })

        readStream.on('close', () => {
            res(chunk)
        })

        readStream.on('error', (e) => {
            rej(e)
        })

    })
    
    process.stdout.write(fileData)
};

await read();