import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput } from '../../mocks/carRegistrationMock.mock';

describe('Car registration', function () {
  it('Should successfully register a car', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarService();
    const result = await carService.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});
