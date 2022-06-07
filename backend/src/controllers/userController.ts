import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService: UserService) {}

  async getUsers(_req: Request, res: Response): Promise<Response> {
    const response = await this.userService.getUsers();
    return res.status(200).json(response);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const response = await this.userService.create(body);
    return res.status(201).json(response);
  }
}

export default UserController;
