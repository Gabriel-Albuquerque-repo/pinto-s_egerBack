import { Response, Router } from 'express';

const routes = Router();

routes.get('/', (_, res: Response) => {
  res.send('Rota provisória');
});

export default routes;
