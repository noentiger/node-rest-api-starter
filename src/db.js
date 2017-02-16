import mongoose       from 'mongoose'
import config         from './config'

export default function(callback) {
  mongoose.connect(config.DATABASE, (err) => {
    if (err)
      return console.error(err)
    else
      callback()
  })
}
