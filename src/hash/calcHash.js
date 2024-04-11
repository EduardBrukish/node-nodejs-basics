import { createReadStream } from 'node:fs'
import { createHash } from 'node:crypto'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const calculateHash = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const fileToReadHash = join(fileDirectory, 'files', 'fileToCalculateHashFor.txt')

    const hash = createHash('sha256')
    const content = createReadStream(fileToReadHash)

    content.on('readable', () => {
        const data = content.read()
        if (data)
          hash.update(data)
        else {
          console.log(`${hash.digest('hex')}`)
        }
    })
};

await calculateHash();