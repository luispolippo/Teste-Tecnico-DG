import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/User';

class UserModel {
  constructor(private prismaModel: PrismaClient) {}

  async getUsers(): Promise<User[]> {
    const users = await this.prismaModel.users.findMany();
    return users;
  }
}

export default UserModel;
