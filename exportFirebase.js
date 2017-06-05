const fs = require('fs');
const firebase = require('firebase');

firebase.initializeApp({
  apiKey: 'AIzaSyCL1QCLlTfJVlfnILETo2HZ5Hv8YEo3Aqg',
  databaseURL: 'https://tambouille-af68c.firebaseio.com',
  projectId: 'tambouille-af68c',
});

const db = firebase.database();

const trimFields = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = typeof(obj[key]) === 'string' ? obj[key].trim() : obj[key];
  });
};

db.ref().once('value').then((snap) => {
  const candidates = snap.val();


  Object.values(candidates).forEach((candidate) => {

    trimFields(candidate);

    // Special cases
    if (candidate.candidat_name === 'Pierre-Yves Bournazel') {
      candidate.picture = '18-75b.jpg';
    }

    if (candidate.category === '7') {
      candidate.category = '6'
    }

    candidate.candidat_group = undefined;
    candidate.dep_name = undefined;
    if (candidate.descriptionHTML) candidate.description = undefined;
  });

  fs.writeFileSync('./src/data.json', JSON.stringify(candidates, null, 2));
  process.exit();
});
