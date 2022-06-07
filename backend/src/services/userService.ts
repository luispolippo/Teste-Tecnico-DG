import UserModel from '../models/userModel';
import { User, UserWithAge } from '../interfaces/User';

class UserService {
  constructor(private userModel: UserModel) {}

  static getAge(dateString: Date): number {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  }

  async getUsers(): Promise<UserWithAge[]> {
    const users = await this.userModel.getUsers();
    const usersWithAge = users.map((user) => ({
      id: user.id,
      name: user.name,
      age: UserService.getAge(user.birthDate),
    }));
    return usersWithAge;
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    const { birthDate } = user;
    const formatedBirthDate = new Date(birthDate);
    const userCreated = await this.userModel.create({ ...user, birthDate: formatedBirthDate });
    return userCreated;
  }
}

export default UserService;
