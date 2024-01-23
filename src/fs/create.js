import { writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const create = async () => {
    const filePath = fileURLToPath(import.meta.url)
    const fileDirectory = dirname(filePath)

    try {
        const content = 'I am fresh and young'
        await writeFile(join(fileDirectory, 'files', 'fresh.txt'), content, { flag: 'wx'})
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await create();