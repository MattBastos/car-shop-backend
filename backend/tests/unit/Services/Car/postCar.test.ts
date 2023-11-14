import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import {
  carRegistrationInput,
  carRegistrationDomain,
} from '../../../mocks/carMock.mock';

describe('Car registration', function () {
  it('Should successfully register a car', async function () {
    sinon.stub(Model, 'create').resolves(carRegistrationDomain);

    const carService = new CarService();
    const result = await carService.create(carRegistrationInput);

    expect(result).to.be.deep.equal(carRegistrationDomain);
  });
});
