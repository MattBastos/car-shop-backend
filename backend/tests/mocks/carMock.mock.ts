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

const carRegistrationOutputData: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carRegistrationOutput: Car = new Car(carRegistrationOutputData);

const carUpdateInput: ICar = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
};

const carUpdateOutputData: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
};

const carUpdateOutput: Car = new Car(carUpdateOutputData);

export {
  allCars,
  carRegistrationInput,
  carRegistrationOutput,
  carUpdateInput,
  carUpdateOutput,
};
