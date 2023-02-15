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

  });

  it('Should return an exception if the car does not exists', async function () {

  });

  it('Should return an exception if the id is invalid', async function () {

  });
});
