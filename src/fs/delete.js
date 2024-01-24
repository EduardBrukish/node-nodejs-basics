import { rm } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const remove = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const filePathToDelete = join(fileDirectory, 'files', 'fileToRemove.txt')

    try {
        await rm(filePathToDelete)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await remove();