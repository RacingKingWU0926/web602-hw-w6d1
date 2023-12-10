/* Express Setup */
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static(__dirname));

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port} `));

/* Passport Setup */
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

/* Define the endpoints */
app.get('/', (req, res) => {
  res.send('Welcome to my Express App!');
});
