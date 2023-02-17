import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleUpdateInput, motorcycleUpdateOutput } from '../../mocks/motorcycleMock.mock';

describe('Update motorcycle by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should update a motorcycle successfully and return its data', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    sinon.stub(Model, 'findById').resolves(motorcycleUpdateOutput);

    const motorcycleService = new MotorcycleService();
    const result = motorcycleService.findByIdAndUpdate(
      '634852326b35b59438fbea2f',
      motorcycleUpdateInput,
    );

    expect(result).to.be.deep.equal(motorcycleUpdateOutput);
  });

  it('Should return an exception if the motorcycle does not exists', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findByIdAndUpdate(
        '634852326b35b59XXXXXXX',
        motorcycleUpdateInput,
      );
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Motorcycle not found' });
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findByIdAndUpdate(
        '634852326b35b59XXXXXXX',
        motorcycleUpdateInput,
      );
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Invalid mongo id' });
    }
  });
});