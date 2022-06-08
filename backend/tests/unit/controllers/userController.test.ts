import chai from 'chai';
import Sinon from 'sinon';
import chaiHttp from 'chai-http';
import UserService from '../../../src/services/userService';
import server from '../../../src/server';
import { User } from '../../../src/interfaces/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Controller', () => {
  describe('User', () => {
    describe('getUsers', () => {
      const userServiceStub = Sinon.stub(UserService.prototype, 'getUsers');

      it('Should return status 200 and the correct response', async () => {

        const userWithAgeMock = [{ id: 1, name: 'Guilherme Polippo', age: 28 }];

        userServiceStub.resolves(userWithAgeMock);

        const response = await chai.request(server.getApp())
          .get('/users')
        expect(response).to.have.status(200);
        expect(response.body).to.be.deep.equal(userWithAgeMock)

        userServiceStub.restore();
      });
    });

    describe('create', () => {
      const userServiceStub = Sinon.stub(UserService.prototype, 'create');

      it('Should return status 201 and the correct response', async () => {

        const userCreatedMock = {
          id: 1,
          name: 'Guilherme Polippo',
          birthDate: '1994-05-16T00:00.000Z'
        } as unknown as User;

        userServiceStub.resolves(userCreatedMock);

        const response = await chai.request(server.getApp())
          .post('/users')
        expect(response).to.have.status(201);
        expect(response.body).to.be.deep.equal(userCreatedMock)

        userServiceStub.restore();
      });
    });
  });
});