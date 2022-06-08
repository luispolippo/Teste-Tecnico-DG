import { expect } from 'chai';
import sinon from 'sinon';
import UserService from '../../../src/services/userService';
import UserModel from '../../../src/models/userModel';
import { User, UserWithAge } from '../../../src/interfaces/User';
import { PrismaClient } from '@prisma/client';

describe('Service', () => {
  describe('User', () => {

    const userDBMock = [
      {
        id: 1,
        name: 'Guilherme Polippo',
        birthDate: new Date()
      }
    ] as User[]

    const userCreatedMock = {
        id: 1,
        name: 'Guilherme Polippo',
        birthDate: new Date()
      } as User

    const userBodyCreate = {
      name: 'Guilherme Polippo',
      birthDate: new Date()
    } as User

    const userWithAgeMock = [
      {
        id: 1,
        name: 'Guilherme Polippo',
        age: 28,
      }
    ] as UserWithAge[]

    const userModel = new UserModel(new PrismaClient);
    const userService = new UserService(userModel);

    describe('getUsers', () => {

      const userModelStub = sinon.stub(UserModel.prototype, 'getUsers');
      const getAgeStub = sinon.stub(UserService, 'getAge');

      it('Should return "users" with age attribute', async () => {
        userModelStub.resolves(userDBMock);
        getAgeStub.returns(28);

        const response = await userService.getUsers();
        expect(userModelStub.called).to.be.ok;
        expect(response).to.be.deep.equal(userWithAgeMock);

        userModelStub.restore();
        getAgeStub.restore();
      });
    });

    describe('create', () => {

      const userModelStub = sinon.stub(UserModel.prototype, 'create');

      it('Should return "users" with age attribute', async () => {
        userModelStub.resolves(userCreatedMock);

        const response = await userService.create(userBodyCreate);
        expect(userModelStub.called).to.be.ok;
        expect(response).to.be.deep.equal(userCreatedMock);

        userModelStub.restore();
      });
    });

    describe('getAge', () => {
      it('Should return age when a birthDate is pass', () => {
        const response = UserService.getAge(new Date('1994-05-16'));
        expect(response).to.be.equal(28);
      });
    });
  });
});