import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../product.controller';
import { ProductService } from '../product.service';
import { Product, ProductDocument, ProductSchema } from '../product.schema';
import { getModelToken, MongooseModule, Prop } from '@nestjs/mongoose';
import mockingoose from 'mockingoose';
import { ProductMock } from './mock/ProductMock';

/** 
 * Ce sont des tests d'intégration, nous vérifions que le controleur fonctionne
 * avec son service
 */

describe('Test Integration de ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

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
    // Fabrication d'un Mock du model Mongoose
    let productMock = new ProductMock();

    // Fabrique un module "light", évite de recréer toute l'application Nest
    // nous choisissons que ce dont on a besoin
    // il est possible d'importer un module déjà existant
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: 'IProductService',
          useClass: ProductService
        },
        {
          provide: getModelToken("ProductModel"),
          // nous remplaçons ProductModel par un Mock pour ne pas se connecter à la BDD
          useValue: () => { productMock }, 
        }
      ]
    }).compile();

    // nous récupérons les objets fabriqués par le module
    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>("IProductService");
  });


  /**
   * - afterEach est lancé après chacun des tests
   * 
   * Réinitialise les mocks fabriqués après chacun des tests.
   */
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /**
   * J'utilise une partie des mots en anglais car c'est presque une convention
   * On pourrait mettre "doit retourner". Il faut le définir en début de projet
   */
  it("should return un produit", async () => {
    // // le résultat que nous attendons est un produit.
    // let product = new Product();

    // const expectedResult = 
    // const mockNumberToSatisfyParameters = 0;

    // jest.spyOn(productService, "findById").mockResolvedValue(expectedResult);
    // // nous testons le résultat du controleur avec celui attendu
    // expect(await controller.findById(mockNumberToSatisfyParameters)).toBe(expectedResult);
  });

  /**
   * Ici, nous testons le cas où le produit n'est pas trouvé
   */
  it("should throw NotFoundException si le produit n'est pas trouvé", async (done) => {
    const expectedResult = undefined;
    const mockNumberToSatisfyParameters = 0;

    jest.spyOn(productService, "findById").mockResolvedValue(expectedResult);

    await controller.findById(mockNumberToSatisfyParameters)
     .then(() => done.fail("Le controlClient controller should return NotFoundException error of 404 but did not"))
     .catch((error) => {
       expect(error.status).toBe(404);
       expect(error.message).toMatchObject({error: "Not Found", statusCode: 404});
       done();
     });
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