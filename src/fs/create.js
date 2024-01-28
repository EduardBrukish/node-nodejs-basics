import { writeFile } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const create = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const filePathToWrite = join(fileDirectory, 'files', 'fresh.txt')
    const content = 'I am fresh and young'

    try {
        await writeFile(filePathToWrite, content, { flag: 'wx'})
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await create();