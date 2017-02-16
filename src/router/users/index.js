import { Router } from 'express'
import signup from './signup'
import login from './login'
import email_verification from './email_verification'
import password_reset from './password_reset'
import verifyToken from '../../utils/verifyToken'

const api = new Router()

api.post('/', signup)
api.get('/email_verification', verifyToken, email_verification)
api.post('/login', login)
api.post('/password_reset', password_reset)

export default api
