import ICar from '../../src/Interfaces/ICar';
import CarRegistration from '../../src/Domains/CarRegistration';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: CarRegistration = new CarRegistration(
  '6348513f34c397abcad040b2',
  'Marea',
  2002,
  'Black',
  true,
  15.990,
  4,
  5,
);

export { carInput, carOutput };