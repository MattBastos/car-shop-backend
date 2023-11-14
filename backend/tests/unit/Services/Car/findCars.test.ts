import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import {
  allCars,
  carRegistrationOutput,
  carRegistrationDomain,
} from '../../../mocks/carMock.mock';

const INVALID_MONGOOSE_ID_MESSAGE = { message: 'Invalid Mongo Id!' };
const CAR_NOT_FOUND_MESSAGE = { message: 'Car not found!' };

describe('Find all cars and find car by Id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should return a list with all cars', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const carService = new CarService();
    const result = await carService.find();

    expect(result).to.be.deep.equal(allCars);
  });

  it('Should return a car by Id', async function () {
    sinon.stub(Model, 'findById').resolves(carRegistrationDomain);

    const carId = carRegistrationOutput.id;

    const carService = new CarService();
    const result = await carService.findById(carId as string);

    expect(result).to.be.deep.equal({ message: carRegistrationDomain });
  });

  it('Should return an exception if the car does not exists', async function () {
    sinon.stub(Model, 'findById').resolves(CAR_NOT_FOUND_MESSAGE);

    try {
      const invalidCarId = '634852326b35b59XXXXXX';
      const carService = new CarService();
      await carService.findById(invalidCarId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findById').resolves(INVALID_MONGOOSE_ID_MESSAGE);

    try {
      const invalidMongoId = 'invalidMongoId';
      const carService = new CarService();
      await carService.findById(invalidMongoId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGOOSE_ID_MESSAGE);
    }
  });
});
