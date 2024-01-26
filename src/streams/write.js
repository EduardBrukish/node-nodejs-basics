import { createWriteStream } from 'node:fs';
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const write = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const fileNameToWrite = join(fileDirectory, 'files', 'fileToWrite.txt')

    const writeStream = createWriteStream(fileNameToWrite)

    console.log('Type some text in terminal, press Enter and written text will appear in fileToWrite.txt file')

    process.stdin.pipe(writeStream)
};

await write();