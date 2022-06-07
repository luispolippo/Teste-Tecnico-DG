import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService: UserService) {}

  async getUsers(_req: Request, res: Response): Promise<Response> {
    const response = await this.userService.getUsers();
    return res.status(200).json(response);
  }
}

export default UserController;
