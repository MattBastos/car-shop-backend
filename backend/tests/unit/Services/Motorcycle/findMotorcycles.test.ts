import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import {
  allMotorcycles,
  motorcycleDomain,
  motorcycleUpdateOutput,
  MOTORCYCLE_NOT_FOUND_MESSAGE,
  INVALID_MONGOOSE_ID_MESSAGE,
} from '../../../mocks/motorcycleMock.mock';

describe('Find all motorcycles and find motorcycle by Id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should return a list with all motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.find();

    expect(result).to.be.deep.equal(allMotorcycles);
  });

  it('Should return a motorcycle by Id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleDomain);

    const motorcycleId = motorcycleUpdateOutput.id;

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findById(motorcycleId as string);

    expect(result).to.be.deep.equal({ message: motorcycleDomain });
  });

  it('Should return an exception if the motorcycle does not exists', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const invalidMotorcycleId = '6348513f34c397abXXXXX';
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findById(invalidMotorcycleId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const invalidMongoId = 'invalidMongoId';
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findById(invalidMongoId);
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGOOSE_ID_MESSAGE);
    }
  });
});
