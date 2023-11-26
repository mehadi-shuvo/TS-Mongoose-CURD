import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './module/user/user.router';
const app: Application = express();

// parser ========================
app.use(express.json());
app.use(cors());

// application routes==========
app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app;
