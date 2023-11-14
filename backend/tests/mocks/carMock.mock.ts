import ICar from '../../src/Interfaces/ICar';
import Car from '../../src/Domains/Car';

const allCars: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const carRegistrationInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carRegistrationOutput: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carRegistrationDomain: Car = new Car(carRegistrationOutput);

const carUpdateInput: ICar = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
};

const carUpdateOutput: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
};

const carUpdateDomain: Car = new Car(carUpdateOutput);

const INVALID_MONGOOSE_ID_MESSAGE = { message: 'Invalid Mongo Id!' };
const CAR_NOT_FOUND_MESSAGE = { message: 'Car not found!' };

export {
  allCars,
  carRegistrationInput,
  carRegistrationOutput,
  carRegistrationDomain,
  carUpdateInput,
  carUpdateDomain,
  INVALID_MONGOOSE_ID_MESSAGE,
  CAR_NOT_FOUND_MESSAGE,
};
