import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import {
  motorcycleDomain,
  motorcycleUpdateOutput,
  INVALID_MONGOOSE_ID_MESSAGE,
  MOTORCYCLE_NOT_FOUND_MESSAGE,
} from '../../../mocks/motorcycleMock.mock';

describe('Delete motorcycle by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should delete a motorcycle successfully', async function () {
    sinon.stub(Model, 'findOne').resolves(motorcycleDomain);
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    const motorcyleId = motorcycleUpdateOutput.id;

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findByIdAndDelete(
      motorcyleId as string,
    );
    expect(result).to.be.deep.equal({
      message: `The motorcycle with ID ${motorcyleId} has been successfully deleted`,
    });
  });

  it('Should return an exception if the motorcycle does not exists', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    try {
      const invalidMotorcycleId = '634852326b35b59XXXXXX';
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findByIdAndDelete(invalidMotorcycleId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    try {
      const invalidMongoId = 'invalidMongoId';
      const carService = new MotorcycleService();
      await carService.findByIdAndDelete(invalidMongoId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGOOSE_ID_MESSAGE);
    }
  });
});
