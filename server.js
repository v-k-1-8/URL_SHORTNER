const express = require('express')
const app = express();
var data = require('./data.json');
const path = require('path');
const fs = require('fs');
const port = 3000
app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/check.html');
})
var dataa = fs.readFileSync('data.json');
var myObj = JSON.parse(dataa);
app.post('/', (req, res) => {
  indexShow = -69;
  dataGiven = req.body.url;
  notesGiven = req.body.notes;
  dataLength = Object.keys(data.urls).length;
  index_shorter = indexByShort(dataGiven, data, dataLength);
  index_url = indexByurl(dataGiven, data, dataLength);
  index_notes = indexByNotes(notesGiven, data, dataLength);
  searchData();
  if (indexShow == -69) {
    res.send("<h1 style={margin-top: 20px; margin-left=20px}>PROVIDED URL CAN'T BE SHORTEN <br>   OR<br>SHORTEN URL NOT FOUND</h1>")
  }
  else if (h == 0) {
    visit = "./" + data.urls[indexShow].shorter;
    res.send('<head><style>#styled{color:blue;text-decoration:underline}h3{margin-top: 20px; margin-left=20px}</style></head><body><h3>URL: ' + data.urls[indexShow].url + '<br><br>' + 'Shorten URL: ' + '<span ' + '  onClick=window.location=' + "'" + visit + "'><span id='styled'> " + data.urls[indexShow].shorter + '</span></span><br><br>' + 'Notes: ' + data.urls[indexShow].notes + "</h3></body>");
  } else {
    visit = "/" + random_g;
    res.send('<head><style>#styled{color:blue;text-decoration:underline}h3{margin-top: 20px; margin-left=20px}</style></head><body><h3>URL: ' + dataGiven + '<br><br>' + 'Shorten URL: ' + '<span ' + '  onClick=window.location=' + "'" + visit + "'><span id='styled'>" + random_g + '</span></span><br><br>' + 'Notes: ' + notes_r + "</h3></body>");
  }
})
app.get('/data.json', (req, res) => {
  res.sendFile(__dirname + '/data.json');
})

app.get('/random.js', (req, res) => {
  res.sendFile(__dirname + '/random.js');
})

app.get('/URL_Shortner/node_modules/fs', (req, res) => {
  res.sendFile(__dirname + '../URL_Shortner/fs');
})
for (let i = 0; i < Object.keys(data.urls).length; i++) {
  let short = data.urls[i].shorter;
  app.get('/' + short, (req, res) => {

    res.redirect(data.urls[i].url);
  })
}

app.listen(port, () => {
  console.log(`Project listening on port ${port}`)
})


function indexByShort(short_f, data, as) {
  result = -69;
  for (let i = 0; i < as; i++) {
    if (short_f != "" && short_f == data.urls[i].shorter) {
      result = i;
      break;
    }
  }
  return result;
}
function indexByurl(url_f, data, as) {
  result = -69;
  for (let i = 0; i < as; i++) {
    if (url_f != "" && url_f == data.urls[i].url) {
      result = i;
      break;
    }
  }
  return result;
} function indexByNotes(url_f, data, as) {
  result = -69;
  for (let i = 0; i < as; i++) {
    if (url_f != "" && url_f == data.urls[i].notes) {
      result = i;
      break;
    }
  }
  return result;
}
function searchData() {

  dataLength = Object.keys(data.urls).length;
  index_shorter = indexByShort(dataGiven, data, dataLength);
  index_url = indexByurl(dataGiven, data, dataLength);
  if (index_shorter >= 0) {
    urlToBe = data.urls[index_shorter].url;
    indexShow = index_shorter;
    h = 0;
  }
  else if (index_url >= 0) {
    shorterToBe = data.urls[index_url].shorter;
    indexShow = index_url;
    h = 0;
  } else if (index_notes >= 0) {
    shorterToBe = data.urls[index_notes].shorter;
    indexShow = index_notes;
    h = 0;
  }
  else if (dataGiven != "") {
    random_g = Math.random().toString(36).substring(2, 7);
    if (notesGiven != "") notes_r = notesGiven;
    else notes_r = "Notes were not provided";
    myObj.urls.push({
      "url": dataGiven,
      "shorter": random_g,
      "notes": notes_r,
    },);
    const jsonString = JSON.stringify(myObj);
    fs.writeFileSync('data.json', jsonString);
    for (let i = 0; i < Object.keys(data.urls).length; i++) {
      let short = data.urls[i].shorter;
      app.get('/' + short, (req, res) => {

        res.redirect(data.urls[i].url);
      })
    }
    h = -69;
    indexShow = dataLength;
  }
}
