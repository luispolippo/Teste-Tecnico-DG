import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/User';

class UserModel {
  constructor(private prismaModel: PrismaClient) {}

  async getUsers(): Promise<User[]> {
    const users = await this.prismaModel.users.findMany();
    return users;
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    const { name, birthDate } = user;
    const userCreated = await this.prismaModel.users.create({
      data: {
        name,
        birthDate,
      },
    });
    return userCreated;
  }
}

export default UserModel;
