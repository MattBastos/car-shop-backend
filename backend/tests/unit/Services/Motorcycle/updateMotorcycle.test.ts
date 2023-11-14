import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import {
  motorcycleUpdateInput,
  motorcycleDomain,
  motorcycleUpdateOutput,
  INVALID_MONGOOSE_ID_MESSAGE,
  MOTORCYCLE_NOT_FOUND_MESSAGE,
} from '../../../mocks/motorcycleMock.mock';

describe('Update motorcycle by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should update a motorcycle successfully and return its data', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    sinon.stub(Model, 'findById').resolves(motorcycleDomain);

    const motorcycleId = motorcycleUpdateOutput.id;

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findByIdAndUpdate(
      motorcycleId as string,
      motorcycleUpdateInput,
    );

    expect(result).to.be.deep.equal({
      message: `The motorcycle has been successfully updated: ${motorcycleDomain}`,
    });
  });

  it('Should return an exception if the motorcycle does not exists', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const invalidMotorcycleId = '634852326b35b59XXXXXXX';
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findByIdAndUpdate(
        invalidMotorcycleId,
        motorcycleUpdateInput,
      );
    } catch (err) {
      expect((err as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND_MESSAGE);
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const invalidMongoId = 'invalidMongoId';
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findByIdAndUpdate(
        invalidMongoId,
        motorcycleUpdateInput,
      );
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGOOSE_ID_MESSAGE);
    }
  });
});
