const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("../models");
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      models.User.findOne({
        where: {
          email: email,
        },
      }).then(function (dbUser) {
        if (!dbUser) {
          return done(null, false, { message: "Incorrect Email Address" });
        }
        const hash = dbUser.dataValues.password;

        bcrypt.compare(password, hash, function (error, result) {
          if (error) {
            throw error;
          }
          if (result) {
            return done(null, dbUser);
          } else {
            return done(null, false, { message: "Incorrect Password" });
          }
        });
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
