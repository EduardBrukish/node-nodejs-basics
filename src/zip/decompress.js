import { createUnzip } from 'node:zlib'
import { promisify } from 'node:util'
import { pipeline } from 'node:stream'
import { join } from 'path'
import { createReadStream, createWriteStream } from 'node:fs'
import { getDirname } from '../helpers/dirnameHelper.js'

const pipe = promisify(pipeline)

const decompress = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const fileNameToDecompress = join(fileDirectory, 'files', 'archive.gz')
    const decompressedFileName = join(fileDirectory, 'files', 'fileToCompress.txt')

    const unzip = createUnzip()
    const source = createReadStream(fileNameToDecompress)
    const destination = createWriteStream(decompressedFileName)

    try {
        await pipe(source, unzip, destination)
    } catch (e) {
        console.error('An error occurred:', e);
        process.exitCode = 1;
    }
};

await decompress();