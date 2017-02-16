import { Router } from 'express'
import byMe from '../posts/byMe'

const api = new Router()

api.get('/posts', byMe)

export default api
