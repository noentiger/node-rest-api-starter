import { Router }     from 'express'
import verifyToken    from '../utils/verifyToken'

// Collections
import users          from './users'
import posts         from './posts'
import me         		from './me'


export default function() {
	var api = Router()

  // perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		})
	})

  api.use('/users', users)
	api.use('/users/me', verifyToken, me)
  api.use('/posts', verifyToken, posts)

  api.get('/needingTokenAndEmailVerified', verifyToken, (req, res) => {
    if (req.decoded.verified) {
      res.status(200).json(req.decoded)
    } else {
      res.status(400).json({
        success: false,
        message: 'Please verify your email before doing this!'
      })
    }
  })

	return api
}
