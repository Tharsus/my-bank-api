import express from 'express';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

global.fileName = 'accounts.json';

const app = express();
app.use(express.json());

app.use('/accounts', accountsRouter);

app.listen(3000, async () => {
  try {
    await readFile(global.fileName);
    console.log('API Started.');
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };

    await writeFile(global.fileName, JSON.stringify(initialJson, null, '\t'))
      .then(() => {
        console.log('API Started and file created.');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
