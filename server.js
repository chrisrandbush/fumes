const express = require("express");
const session = require("express-session")
const passport = require("passport")
const path = require("path");
// const env = require("dotenv").load();
const models = require("./models");
const routes = require("./routes");


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Setting up passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// models.sequelize.sync().then(function() {
//   console.log('Nice! Database looks fine')
// }).catch(function(err) {
//   console.log(err, "Something went wrong with the Database Update!")
// });

models.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

