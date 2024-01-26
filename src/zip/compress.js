import { createGzip } from 'node:zlib'
import { promisify } from 'node:util'
import { pipeline } from 'node:stream'
import { join } from 'path'
import { createReadStream, createWriteStream } from 'node:fs'
import { getDirname } from '../helpers/dirnameHelper.js'

const pipe = promisify(pipeline)

const compress = async () => {
    const fileDirectory = getDirname(import.meta.url)
    const fileNameToCompress = join(fileDirectory, 'files', 'fileToCompress.txt')
    const compressedFileName = join(fileDirectory, 'files', 'archive.gz')

    const gzip = createGzip()
    const source = createReadStream(fileNameToCompress)
    const destination = createWriteStream(compressedFileName)

    try {
        await pipe(source, gzip, destination)
    } catch (e) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await compress();