import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import UserRouter from './routes/userRouter';

class App {
  public app: express.Application;

  constructor(private userRouter: UserRouter) {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    const accessControl = (_req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());
    this.app.use(express.json());
  }

  public routes() {
    this.app.use('/users', this.userRouter.getRoutes());
  }

  public startServer(PORT: string | number = 3001): void {
    this.app.listen(
      PORT,
      // eslint-disable-next-line no-console
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public getApp() {
    return this.app;
  }
}

export default App;
