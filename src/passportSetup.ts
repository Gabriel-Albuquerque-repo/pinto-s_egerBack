import passport from 'passport';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID: '616209718845-0e6ribfpregf2c3n9ggtoo9n6afqhe0b.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8000/google/callback/',
  },
  ((accessToken, refreshToken, profile, done) => done(null, profile)),
));
