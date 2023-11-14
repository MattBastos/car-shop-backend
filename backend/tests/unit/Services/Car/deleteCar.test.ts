import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import {
  carRegistrationOutput,
  carUpdateDomain,
} from '../../../mocks/carMock.mock';

const INVALID_MONGOOSE_ID_MESSAGE = { message: 'Invalid Mongo Id!' };
const CAR_NOT_FOUND_MESSAGE = { message: 'Car not found!' };

describe('Delete car by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should delete a car successfully', async function () {
    sinon.stub(Model, 'findOne').resolves(carUpdateDomain);
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    const carId = carRegistrationOutput.id;

    const carService = new CarService();
    const result = await carService.findByIdAndDelete(carId as string);
    expect(result).to.be.deep.equal({
      message: `The car with ID ${carId} has been successfully deleted`,
    });
  });

  it('Should return an exception if the car does not exists', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    try {
      const invalidCarId = '634852326b35b59438XXXXXX';
      const carService = new CarService();
      await carService.findByIdAndDelete(invalidCarId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    try {
      const carService = new CarService();
      await carService.findByIdAndDelete('invalidMongoId');
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGOOSE_ID_MESSAGE);
    }
  });
});
