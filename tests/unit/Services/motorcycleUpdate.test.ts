import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleUpdateInput, motorcycleUpdateOutput } from '../../mocks/motorcycleMock.mock';

describe('Update motorcycle by id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should update a motorcycle successfully and return its data', async function () {

  });

  it('Should return an exception if the motorcycle does not exists', async function () {

  });

  it('Should return an exception if the id is invalid', async function () {

  });
});