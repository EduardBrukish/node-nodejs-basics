import { rename as renameFile } from 'fs/promises'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const filePath = fileURLToPath(import.meta.url)
const fileDirectory = dirname(filePath)

const rename = async () => {
    try {
        const fileToRenamePath = join(fileDirectory, 'files', 'wrongFilename.txt')
        const properFileNamePath = join(fileDirectory, 'files', 'properFilename.md')

        if(existsSync(properFileNamePath)) {
            throw new Error()
        }
        
        await renameFile(fileToRenamePath, properFileNamePath)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await rename();