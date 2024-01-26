import { Transform } from 'stream'

const transform = async () => {

    const reverseDataStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    })
    
    process.stdin
        .pipe(reverseDataStream)
        .pipe(process.stdout)
};

await transform();