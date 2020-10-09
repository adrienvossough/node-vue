import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

class UserServiceMock {
  getById(id: string) {
    return {
      _id: id,
      firstname: 'Enzo',
      lastname: 'Radnaï',
      birthdate: '1111'
    }
  }
}

describe('UserService', () => {
  let app: TestingModule
  let service: UserService

  beforeAll(async () => {
    const UserServiceProvider = {
      provide: UserService,
      useClass: UserServiceMock
    }

    app = await Test.createTestingModule({
      providers: [UserService, UserServiceProvider]
    }).compile()
    service = app.get<UserService>(UserService);

  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getUser', () => {

    it('should get user', async () => {
      const expectedUser = {
        _id: "id",
        firstname: 'Enzo',
        lastname: 'Radnaï',
        birthdate: '1111'
      }
      const user = await service.findById("id")
      console.log(user)
    })
  });
})
