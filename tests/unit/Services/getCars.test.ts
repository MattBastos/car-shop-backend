import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { allCars } from '../../mocks/getCarsMock.mock';

describe('Get all cars and get cars by Id', function () {
  it('Should return a list with all cars', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const carService = new CarService();
    const result = await carService.find();

    expect(result).to.be.deep.equal(allCars);
  });

  it('Should return a car by Id', function () {

  });

  it('Should return an exception if the car does not exist', function () {

  });

  it('Should return an exception if the id is invalid', function () {

  });
});
