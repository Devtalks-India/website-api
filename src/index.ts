import express, { Request, Response} from 'express';
import groupBy  from 'lodash/groupBy';
import camelCase  from 'lodash/camelCase';
import mapKeys  from 'lodash/mapKeys';
import trimEnd  from 'lodash/trimEnd';
import middleware from './middleware';
import { getSheet, appendSheet }  from './services/googleSheet';

const port = process.env.PORT || 8080;

const app = express();
app.use(middleware);

app.get('/events', async (_: Request, res: Response) => {
  const events = await getSheet('events');
  let groupedEvents = groupBy(events, 'pastUpcoming');
  groupedEvents = mapKeys(groupedEvents, (_, key) => camelCase(key));

  res.api({ events: groupedEvents });
});

app.get('/:type/:id?', async (req: Request, res: Response) => {
  const { type, id } = req.params;
  const values = await getSheet(type);
  if (id) {
    const item = values.find(val => val.id === id);
    return res.api({ [trimEnd(type, 's')]: item });
  }
  res.api({ [type]: values });
});

app.post('/:type', async (req: Request, res: Response) => {
  const { type } = req.params;
  const rows = req.body;

  try {
    const response = await appendSheet(type, rows);
    return res.api(response);
  } catch (err) {
    res.status(400).error({ error: err });
  }
});

app.listen(port, () => {
  console.log('Listening!', port);
});
