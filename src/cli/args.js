import { argv } from 'node:process'

const parseArgs = () => {
    const cmdArguments = argv.splice(2)

    const result = cmdArguments.reduce((acc, argument, index, arr) => {
        if(index % 2 === 0) {
            const valueName = argument.replace('--', '')
            return acc + `${valueName} is `
        } else {
            const isLastArgument = index === arr.length - 1
            return acc + `${argument}${isLastArgument ? '' : ', '}`
        }
    }, '')

    console.log(result)
};

parseArgs();