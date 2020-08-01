import express from 'express';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';

const { readFile, writeFile } = fs;
global.fileName = 'accounts.json';

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'my-bank-api.log' }),
  ],
  format: combine(label({ label: 'my-label-api' }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/accounts', accountsRouter);

app.listen(3000, async () => {
  try {
    await readFile(global.fileName);
    global.logger.info('API Started.');
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };

    await writeFile(global.fileName, JSON.stringify(initialJson, null, '\t'))
      .then(() => {
        global.logger.info('API Started and file created.');
      })
      .catch((err) => {
        global.logger.error(err);
      });
  }
});
