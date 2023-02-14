import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import allCars from '../../mocks/getCarsMock.mock';
import { carOutput } from '../../mocks/carRegistrationMock.mock';

describe('Find all cars and find car by Id', function () {
  it('Should return a list with all cars', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const carService = new CarService();
    const result = await carService.find();

    expect(result).to.be.deep.equal(allCars);
  });

  it('Should return a car by Id', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const carService = new CarService();
    const result = await carService.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Should return an exception if the car does not exist', async function () {
    sinon.stub(Model, 'findById').resolves({});

    try {
      const carService = new CarService();
      await carService.findById('634852326b35b59XXXXXX');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });

  it('Should return an exception if the id is invalid', async function () {
    sinon.stub(Model, 'findById').resolves({});

    try {
      const carService = new CarService();
      await carService.findById(1000);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});
