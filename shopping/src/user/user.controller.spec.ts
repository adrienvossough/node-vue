import { Test, TestingModule } from '@nestjs/testing';
import { User, UserDocument } from './user.schema';
import { UserService } from 'src/user/user.service';
import { UserController } from './user.controller';

/** 
 * Ce sont des tests d'intégration, nous vérifions que le controleur fonctionne
 * avec son service
 */

describe('Test Integration de UserController', () => {
  let controller: UserController;
  let userService: UserService;

  /**
   * - beforeAll est lancé une fois avant le lancement des test.
   * Il ne faut pas l'utiliser dans les cas de tests modifiant les objets fabriqués.
   * 
   * - Si les tests modifient les objets, il faut utiliser beforeEach qui sera relancé
   * avant chacun des tests
   * 
   * https://jestjs.io/docs/en/api#beforeallfn-timeout
   * 
   * Il s'assure que le module est créé.
   */
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  /**
   * - afterEach est lancé après chacun des tests
   * 
   * Réinitialise les mocks fabriqués après chacun des tests.
   */
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /**
   * J'utilise une partie des mots en anglais car c'est presque une convention
   * On pourrait mettre "doit retourner". Il faut le définir en début de projet
   */
  it("should return un objet User", async () => {
    const expectedResult = new User();
    const mockNumberToSatisfyParameters = 0;

    jest.spyOn(userService, "findById").mockResolvedValue(expectedResult);
    expect(await controller.findById(mockNumberToSatisfyParameters)).toBe(expectedResult);
  });
});







// describe('61834610', () => {
//   it('should throw 400 error if id is empty string', async () => {
//     const mReq = { params: { id: '' } };
//     const mRes = {};
//     const mNext = jest.fn();
//     await retrieveMember(mReq, mRes, mNext);
//     expect(mNext).toBeCalledWith(new Error('invalid.'));
//   });

//   it('should throw 400 error if id is undefined', async () => {
//     const mReq = { params: {} };
//     const mRes = {};
//     const mNext = jest.fn();
//     await retrieveMember(mReq, mRes, mNext);
//     expect(mNext).toBeCalledWith(new Error('invalid.'));
//   });

//   it('should throw 400 error if id is invalid format', async () => {
//     const mReq = { params: { id: '$$' } };
//     const mRes = {};
//     const mNext = jest.fn();
//     await retrieveMember(mReq, mRes, mNext);
//     expect(mNext).toBeCalledWith(new Error('invalid format.'));
//   });

//   it('should retrieve one member by id and send response correctly', async () => {
//     const mMemberRecord = { id: '1', username: 'KF1' };
//     jest.spyOn(MemberService, 'retrieveOneMember').mockResolvedValueOnce(mMemberRecord);
//     const mReq = { params: { id: '1' } };
//     const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
//     const mNext = jest.fn();
//     await retrieveMember(mReq, mRes, mNext);
//     expect(MemberService.retrieveOneMember).toBeCalledWith('1');
//     expect(mRes.status).toBeCalledWith(200);
//     expect(mRes.send).toBeCalledWith({ member_detail: { id: '1', username: 'KF1' } });
//   });
// });