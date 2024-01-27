import { spawn } from 'node:child_process'
import { join } from 'path'
import { getDirname } from '../helpers/dirnameHelper.js'

const spawnChildProcess = async (args) => {
    
    const fileDirectory = getDirname(import.meta.url)
    const fileToPathToSpawn = join(fileDirectory, 'files', 'script.js')
    
    const childProcess = spawn('node', [fileToPathToSpawn, ...args])

    process.stdin.pipe(childProcess.stdin)
    childProcess.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['argumentOne', 'argumentTwo']);
