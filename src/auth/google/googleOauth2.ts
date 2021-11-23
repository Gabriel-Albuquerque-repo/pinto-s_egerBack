import passport from 'passport';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/google/callback/',
  },
  // Aqui tem o acesso ao profile e faz a integração com o bd para procurar
  // o usuário! esse é o cb
  ((accessToken, refreshToken, profile, done) => {
    // console.log(profile);
    done(null, profile);
  }),
));

passport.serializeUser((user, done) => {
  done(null, user);
});

// Procura no db se o ide existe
// passport.serializeUser(async (id, cb) => {
//   const user = await User.findOne({ where: { id } }).catch((err) => {
//     console.log('Error deserializing', err);
//     cb(err, null);

//     if (user) cb(null, user);
//   });
// });

passport.deserializeUser((user, done) => {
  done(null, user);
});
