import { PrismaClient } from '@prisma/client';
import App from './app';
import UserController from './controllers/userController';
import UserModel from './models/userModel';
import UserRouter from './routes/userRouter';
import UserService from './services/userService';

const prisma = new PrismaClient();
const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

const server = new App(userRouter);

export default server;
