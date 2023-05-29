import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import { carRegistrationInput, carRegistrationOutput } from '../../../mocks/carMock.mock';

describe('Car registration', function () {
  it('Should successfully register a car', async function () {
    sinon.stub(Model, 'create').resolves(carRegistrationOutput);

    const carService = new CarService();
    const result = await carService.create(carRegistrationInput);

    expect(result).to.be.deep.equal(carRegistrationOutput);
  });
});
