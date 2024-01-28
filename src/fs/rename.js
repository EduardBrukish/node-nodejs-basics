import { rename as renameFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const rename = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const fileToRenamePath = join(fileDirectory, 'files', 'wrongFilename.txt')
    const properFileNamePath = join(fileDirectory, 'files', 'properFilename.md')

    try {
        if(existsSync(properFileNamePath)) {
            throw new Error()
        }
        
        await renameFile(fileToRenamePath, properFileNamePath)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await rename();