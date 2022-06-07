import UserModel from '../models/userModel';
import { User } from '../interfaces/User';

class UserService {
  constructor(private userModel: UserModel) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.getUsers();
    return users;
  }
}

export default UserService;
