import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';

describe('Delete car by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should delete a car successfully', async function () {
    sinon.stub(Model, 'findOne').resolves();
    sinon.stub(Model, 'findByIdAndDelete').resolves();
    
    const carService = new CarService();
    const result = await carService.findByIdAndDelete('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal({ message: 'Car deleted: 634852326b35b59438fbea2f' });
  });

  it('Should return an exception if the car does not exists', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();

    try {
      const carService = new CarService();
      await carService.findByIdAndDelete('634852326b35b59XXXXXX');
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Car not found' });
    }
  });
});
