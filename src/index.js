import http           from 'http'
import bodyParser     from 'body-parser'
import express        from 'express'
import methodOverride from 'method-override'
import db             from './db'
import router         from './router'
import middleware     from './middleware'
import cors           from 'cors'

const app = express()

app.server = http.createServer(app)

app.use(cors())

app.use(bodyParser.urlencoded(
  { extended: false }
))

app.use(bodyParser.json({
	limit : '100kb'
}))

app.use(methodOverride())

// connect to db
db( λ => {

  // internal middleware
	app.use(middleware())

  // Api endpoints
  app.use('/api/v1/', router())

  app.use('/', (req, res, next) => {
    res.status(404)
    res.json({
      error: 'Not found'
    })
    return
  })

  app.use('/', (err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      error: err.message
    })
    return
  })

  app.server.listen(process.env.PORT || 8080)

  console.log(`API magic happens at ${app.server.address().port} 🌏`)

})
