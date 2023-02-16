import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { allMotorcycles, motorcycleRegistrationOutput } from '../../mocks/motorcycleMock.mock';

describe('Find all motorcycles and find motorcycle by Id', function () {
  it('Should return a list with all motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.find();

    expect(result).to.be.deep.equal(allMotorcycles);
  });

  it('Should return a motorcycle by Id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleRegistrationOutput);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal({ message: motorcycleRegistrationOutput });
  });

  it('Should return an exception if the motorcycle does not exists', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const motorcycleService = new MotorcycleService();
      const result = await motorcycleService.findById('6348513f34c397abXXXXX');
    } catch (err) {
      expect((err as Error).message).to.be.equal({ message: 'Motorcycle not found' });
    }
  });

  it('Should return an exception if the id is invalid', async function () {

  });
});
