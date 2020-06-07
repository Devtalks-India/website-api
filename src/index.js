const express = require('express');
const app = express();
const groupBy = require('lodash/groupBy');
const camelCase = require('lodash/camelCase');
const mapKeys = require('lodash/mapKeys');
const middleware = require('./middleware');
const { getSpeakers, getEvents } = require('./services/googleSheet');

const port = process.env.PORT || 8080;

app.use(middleware);

app.get('/events', async (req, res) => {
  const events = await getEvents();
  let groupedEvents = groupBy(events, 'pastUpcoming');
  groupedEvents = mapKeys(groupedEvents, (val, key) => camelCase(key));

  res.api({ events: groupedEvents });
});

app.get('/speakers', async (req, res) => {
  const speakers = await getSpeakers();
  res.api({ speakers });
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that! "+ req.url)
})

app.listen(port, () => {
  console.log('Listening!', port);
});
