import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carRegistrationInput, carRegistrationOutput } from '../../mocks/carRegistrationMock.mock';

describe('Car registration', function () {
  it('Should successfully register a car', async function () {
    sinon.stub(Model, 'create').resolves(carRegistrationOutput);

    const carService = new CarService();
    const result = await carService.register(carRegistrationInput);

    expect(result).to.be.deep.equal(carRegistrationOutput);
  });

  it('Should throw an exception when the car attributes are invalid', async function () {

  });
});
