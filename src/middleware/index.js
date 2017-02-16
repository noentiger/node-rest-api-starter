import { Router } from 'express';
import morgan     from 'morgan'

export default function() {
	const routes = Router();

  if (process.env.ENV !== 'production')
    routes.use(morgan('dev'))

	return routes;
}
