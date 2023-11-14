import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import {
  allCars,
  carRegistrationOutput,
  carRegistrationDomain,
} from '../../../mocks/carMock.mock';

const CAR_NOT_FOUND_MESSAGE = 'Car not found!';

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

    expect(result).to.be.deep.equal(carRegistrationDomain);
  });

  it('Should return an exception if the car does not exists', async function () {
    sinon.stub(Model, 'findById').rejects(new Error(CAR_NOT_FOUND_MESSAGE));

    try {
      const carService = new CarService();
      await carService.findById('634852326b35b59XXXXXX');
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findById').rejects(new Error(CAR_NOT_FOUND_MESSAGE));

    try {
      const carService = new CarService();
      await carService.findById('invalidMongoId');
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND_MESSAGE);
    }
  });
});
