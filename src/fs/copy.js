import { cp, access } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const filePath = fileURLToPath(import.meta.url)
const fileDirectory = dirname(filePath)

const copy = async () => {
    try {
        const folderPathToCopy = join(fileDirectory, 'files')
        const destinationFolderPath = join(fileDirectory, 'files_copy')
        
        await access(folderPathToCopy)
        await cp(folderPathToCopy, destinationFolderPath, { recursive: true, force: false,  errorOnExist: true })
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await copy();
