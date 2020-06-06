import express, { Request, Response} from 'express';
import groupBy  from 'lodash/groupBy';
import camelCase  from 'lodash/camelCase';
import mapKeys  from 'lodash/mapKeys';
import middleware from './middleware';
import { getSpeakers, getEvents }  from './services/googleSheet';

const port = process.env.PORT || 8080;

const app = express();
app.use(middleware);

app.get('/events', async (_: Request, res: Response) => {
  const events = await getEvents();
  let groupedEvents = groupBy(events, 'pastUpcoming');
  groupedEvents = mapKeys(groupedEvents, (_, key) => camelCase(key));

  res.api({ events: groupedEvents });
});

app.get('/speakers', async (_: Request, res: Response) => {
  const speakers = await getSpeakers();
  res.api({ speakers });
});

app.listen(port, () => {
  console.log('Listening!', port);
});
