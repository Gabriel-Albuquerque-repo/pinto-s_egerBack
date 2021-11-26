/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import passport from 'passport';
import createUserController from '@useCases/createUser';
// Fazer uma classe de rotas e por cada processo de rota deixar dentro de uma classe
const router = Router();

router.get('/failed', (_, response) => response.send('You failed to log in!'));

router.get('/good', (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}, (request, response) => response.send(`Welcome ${request.user.displayName}!`));

// auth/google
router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed', successRedirect: '/good' }),
  (_, response) => {
    // Successful authentication, redirect home.
    response.redirect('/good');
  },
);

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

router.post('/cadastro', createUserController.handle);

export default router;
