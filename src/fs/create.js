import { writeFile } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const create = async () => {
    const fileDirectory = getDirname(import.meta.url)

    try {
        const content = 'I am fresh and young'
        await writeFile(join(fileDirectory, 'files', 'fresh.txt'), content, { flag: 'wx'})
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await create();