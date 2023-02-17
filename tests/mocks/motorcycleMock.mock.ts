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
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motorcycleRegistrationInput: IMotorcycle = { 
  model: HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleRegistrationOutputData: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleRegistrationOutput: Motorcycle = new Motorcycle(motorcycleRegistrationOutputData);

const motorcycleUpdateInput: IMotorcycle = {
  model: HORNET,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleUpdateOutput: IMotorcycle = {
  id: '634852326b35b59438fbea2f',
  model: HORNET,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export {
  allMotorcycles,
  motorcycleRegistrationInput,
  motorcycleRegistrationOutput,
  motorcycleUpdateInput,
  motorcycleUpdateOutput,
};
