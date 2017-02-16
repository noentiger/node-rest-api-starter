import { Router }           from 'express'
import hasAuthorization     from '../../utils/hasAuthorization'
import create               from './create'
import all                  from './all'
import findById             from './findById'
import findByIdAndUpdate    from './findByIdAndUpdate'

const api = new Router()

api.get('/', all)
api.get('/:id', findById)
api.patch('/:id', hasAuthorization, findByIdAndUpdate)
api.post('/', create)

export default api
