import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import {
  carRegistrationOutput,
  carUpdateInput,
  carUpdateDomain,
} from '../../../mocks/carMock.mock';

const INVALID_MONGOOSE_ID_MESSAGE = { message: 'Invalid Mongo Id!' };
const CAR_NOT_FOUND_MESSAGE = { message: 'Car not found!' };

describe('Update car by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should successfully update a car and return its data', async function () {
    sinon.stub(Model, 'findById').resolves(carUpdateDomain);
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const carId = carRegistrationOutput.id;

    const carService = new CarService();
    const result = await carService.findByIdAndUpdate(
      carId as string,
      carUpdateInput
    );

    expect(result).to.be.deep.equal({
      message: `The car has been successfully updated: ${carUpdateDomain}`,
    });
  });

  it('Should return an exception if the car does not exists', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(CAR_NOT_FOUND_MESSAGE);

    try {
      const invalidCarId = '634852326b35b59438XXXXXX';
      const carService = new CarService();
      await carService.findByIdAndUpdate(invalidCarId, carUpdateInput);
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves(INVALID_MONGOOSE_ID_MESSAGE);

    try {
      const carService = new CarService();
      await carService.findByIdAndUpdate('invalidMongoId', carUpdateInput);
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGOOSE_ID_MESSAGE);
    }
  });
});
