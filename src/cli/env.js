import { env } from 'node:process'

const parseEnv = () => {
    const envVariableSelector = 'RSS_'
    const result = Object.entries(env)
        .filter(([key]) => key.startsWith(envVariableSelector))
        .map(([key, value]) => `${key}=${value}`)
        .join("; ")

    console.log(result)
};

parseEnv();