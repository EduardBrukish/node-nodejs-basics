import { sep } from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import { fileURLToPath } from 'url'
import firstData from './files/a.json' with { type: 'json' }
import secondData from './files/b.json' with { type: 'json' }
import { getDirname } from '../helpers/dirnameHelper.js'
import './files/c.js'

const filePathName = fileURLToPath(import.meta.url)
const fileDirectoryName = getDirname(import.meta.url)

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = firstData
} else {
    unknownObject = secondData
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${filePathName}`);
console.log(`Path to current directory is ${fileDirectoryName}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
}
