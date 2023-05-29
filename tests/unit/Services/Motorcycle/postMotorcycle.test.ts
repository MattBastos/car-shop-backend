import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import {
  motorcycleRegistrationInput,
  motorcycleRegistrationOutput,
} from '../../../mocks/motorcycleMock.mock';

describe('Motorcycle registration', function () {
  it('Should successfully register a motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleRegistrationOutput);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.create(motorcycleRegistrationInput);

    expect(result).to.be.deep.equal(motorcycleRegistrationOutput);
  });
});
