import IMotorcycle from '../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../src/Domains/Motorcycle';

const motorcycleRegistrationInput: IMotorcycle = { 
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleRegistrationOutputData: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleRegistrationOutput: Motorcycle = new Motorcycle(motorcycleRegistrationOutputData);

export {
  motorcycleRegistrationInput,
  motorcycleRegistrationOutput,
};
