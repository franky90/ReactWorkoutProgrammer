"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.function.name");

require("core-js/modules/web.dom-collections.for-each");

var fs = require('fs');

var path = require('path');

var readline = require('readline');

var _require = require('googleapis'),
    google = _require.google; // If modifying these scopes, delete token.json.


var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']; // The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.

var TOKEN_PATH = path.resolve(__dirname, 'server', 'token.json'); //'token.json'

var CREDENTIALS_PATH = path.resolve(__dirname, 'credentials.json'); // Load client secrets from a local file. --> 'credentials.json'

function readFileData() {
  fs.readFile(CREDENTIALS_PATH, "utf8", function (err, content) {
    if (err) return console.log('Error loading client secret file:', err); // Authorize a client with credentials, then call the Gmail API.
    // console.log(JSON.stringify(JSON.parse(content), null, 2))

    authorize(JSON.parse(content), listLabels);
  });
}
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */


function authorize(credentials, callback) {
  var _credentials$installe = credentials.installed,
      client_secret = _credentials$installe.client_secret,
      client_id = _credentials$installe.client_id,
      redirect_uris = _credentials$installe.redirect_uris; // console.log('client_secret: ', client_secret)
  // console.log('client_id: ', client_id)
  // console.log('redirect_uris: ', redirect_uris)

  var redirectURI = redirect_uris[0];
  var oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirectURI); // Check if we have previously stored a token.

  fs.readFile(TOKEN_PATH, "utf8", function (err, token) {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */


function getNewToken(oAuth2Client, callback) {
  var authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function (code) {
    rl.close();
    oAuth2Client.getToken(code, function (err, token) {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token); // Store the token to disk for later program executions

      fs.writeFile(TOKEN_PATH, JSON.stringify(token), function (err) {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}
/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */


function listLabels(auth) {
  var gmail = google.gmail({
    version: 'v1',
    auth: auth
  });
  gmail.users.labels.list({
    userId: 'me'
  }, function (err, res) {
    if (err) return console.log('The API returned an error: ' + err);
    var labels = res.data.labels;

    if (labels.length) {
      console.log('Labels:');
      labels.forEach(function (label) {
        console.log("- ".concat(label.name));
      });
    } else {
      console.log('No labels found.');
    }
  });
}

module.exports = {
  readFileData: readFileData
};