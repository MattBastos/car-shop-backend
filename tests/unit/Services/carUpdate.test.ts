import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carUpdateInput, carUpdateOutput } from '../../mocks/carMock.mock';

describe('Update car by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should update a car successfully and return its data', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdateOutput);

    const carService = new CarService();
    const result = await carService.findByIdAndUpdate('634852326b35b59438fbea2f', carUpdateInput);

    expect(result).to.be.deep.equal(carUpdateOutput);
  });

  it('Should return an exception if the car does not exists', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const carService = new CarService();
      await carService.findByIdAndUpdate('634852326b35b59XXXXXX', carUpdateInput);
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Car not found' });
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const carService = new CarService();
      await carService.findByIdAndUpdate('invalidMongoId', carUpdateInput);
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Invalid mongo id' });
    }
  });
});
