import { readFile } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const read = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const filePathToRead = join(fileDirectory, 'files', 'fileToRead.txt')

    try {
        const content = await readFile(filePathToRead, {encoding: 'utf8'})
        console.log(content)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await read();