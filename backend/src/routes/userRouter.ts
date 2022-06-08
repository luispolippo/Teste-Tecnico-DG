import { Router } from 'express';
import UserController from '../controllers/userController';

class UserRouter {
  private route: Router;

  constructor(private userController: UserController) {
    this.route = Router();
  }

  getRoutes() {
    this.route.get('/', (req, res) => this.userController.getUsers(req, res));
    this.route.post('/', (req, res) => this.userController.create(req, res));
    return this.route;
  }
}

export default UserRouter;
