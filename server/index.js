const lyricsFinder = require("lyrics-finder");
const SpotifyWebApi = require("spotify-web-api-node");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
// const request = require("request");

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.post("/login", async (req, res) => {
  const { code } = req.body;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  try {
    const {
      body: { access_token, refresh_token, expires_in },
    } = await spotifyApi.authorizationCodeGrant(code);

    res.json({ access_token, refresh_token, expires_in });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// var generateRandomString = function (length) {
//   var text = '';
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };

// app.get('/auth/login', (req, res) => {

//   var scope = "streaming \
//                user-read-email \
//                user-read-private"

//   var state = generateRandomString(16);

//   var auth_query_parameters = new URLSearchParams({
//     response_type: "code",
//     client_id: process.env.CLIENT_ID,
//     scope: scope,
//     redirect_uri: process.env.REDIRECT_URI,
//     state: state
//   })

//   res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
// })
// let access_token;
// app.get('/auth/callback', (req, res) => {

//   var code = req.query.code;

//   var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri: "http://localhost:3000/auth/callback",
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
//       'Content-Type' : 'application/x-www-form-urlencoded'
//     },
//     json: true
//   };

//   request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       access_token = body.access_token;
//       res.redirect('/')
//     }
//   });
// })

// app.get('/auth/token', (req, res) => {
//   res.json(
//      {
//         access_token: access_token
//      })
// })


app.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  try {
    const {
      body: { access_token, expires_in },
    } = await spotifyApi.refreshAccessToken();
    res.json({ access_token, expires_in });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

app.get("/lyrics", async (req, res) => {
  const { artist, track } = req.query;
  const lyrics = (await lyricsFinder(artist, track)) || "No Lyrics Found";
  res.json({ lyrics });
});

app.listen(port, err => {
  if (err) console.log(err);
  console.log("listening on port", port);
});
