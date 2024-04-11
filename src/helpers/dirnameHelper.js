import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const getDirname = (url) => {
  const filePath = fileURLToPath(url)
  return dirname(filePath)
}