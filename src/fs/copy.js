import { cp, access } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const copy = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const folderPathToCopy = join(fileDirectory, 'files')
    const destinationFolderPath = join(fileDirectory, 'files_copy')
    
    try {
        await access(folderPathToCopy)
        await cp(folderPathToCopy, destinationFolderPath, { recursive: true, force: false,  errorOnExist: true })
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await copy();
