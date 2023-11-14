import IMotorcycle from '../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../src/Domains/Motorcycle';

const HORNET = 'Honda Cb 600f Hornet';

const allMotorcycles: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: HORNET,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.0,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.9,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motorcycleRegistrationInput: IMotorcycle = {
  model: HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleRegistrationOutput: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleDomain: Motorcycle = new Motorcycle(
  motorcycleRegistrationOutput,
);

const motorcycleUpdateInput: IMotorcycle = {
  model: HORNET,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.0,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleUpdateOutput: IMotorcycle = {
  id: '634852326b35b59438fbea2f',
  model: HORNET,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.0,
  category: 'Street',
  engineCapacity: 600,
};

const INVALID_MONGOOSE_ID_MESSAGE = { message: 'Invalid Mongo Id!' };
const MOTORCYCLE_NOT_FOUND_MESSAGE = { message: 'Car not found!' };

export {
  allMotorcycles,
  motorcycleRegistrationInput,
  motorcycleDomain,
  motorcycleUpdateInput,
  motorcycleUpdateOutput,
  INVALID_MONGOOSE_ID_MESSAGE,
  MOTORCYCLE_NOT_FOUND_MESSAGE,
};
