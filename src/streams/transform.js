import { Transform } from 'stream'

const transform = async () => {

    const reverseDataStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''))
        },
    })

    console.log('Please type any text, it will be transformed')
    
    process.stdin
        .pipe(reverseDataStream)
        .pipe(process.stdout)
};

await transform();