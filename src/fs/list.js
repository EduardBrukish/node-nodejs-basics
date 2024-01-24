import { readdir } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const list = async () => {
    const fileDirectory = getDirname(import.meta.url)

    try {
        const directoryPathToReadFiles = join(fileDirectory, 'files')

        const files = await readdir(directoryPathToReadFiles)
        for (const file of files) {
            console.log(file)
        }
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await list();