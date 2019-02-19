const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'steve',
            'birthday': '19901222',
            'gender': 'man',
            'job': 'student'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'micle',
            'birthday': '19801222',
            'gender': 'man',
            'job': 'sales'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'kevin',
            'birthday': '19851222',
            'gender': 'man',
            'job': 'account'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
