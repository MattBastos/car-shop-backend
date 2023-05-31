import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Delete motorcycle by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should delete a motorcycle successfully', async function () {
    sinon.stub(Model, 'findOne').resolves();
    sinon.stub(Model, 'findByIdAndDelete').resolves();
    
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findByIdAndDelete('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal({ message: 'Motorcycle deleted: 634852326b35b59438fbea2f' });
  });

  it('Should return an exception if the motorcycle does not exists', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findByIdAndDelete('634852326b35b59XXXXXX');
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Motorcycle not found' });
    }
  });
});
