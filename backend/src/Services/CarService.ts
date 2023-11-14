import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarDataValidation from './validations/CarDataValidation';

export default class CarService {
  private model = new CarODM();
  private carDataValidation = new CarDataValidation();

  private createCarDomain(car: ICar | null): Car | null {
    try {
      if (car) return new Car(car);
      return null;
    } catch (error) {
      throw new Error('Error creating car domain!');
    }
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createCarDomain(newCar);
  }

  public async find() {
    const allCars = await this.model.find();
    return allCars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const { message } = await this.carDataValidation.validateId(id);
    if (message) return { message };

    const data = await this.model.findById(id);
    const car = this.createCarDomain(data);
    return { message: car };
  }

  public async findByIdAndUpdate(id: string, carData: ICar) {
    const { message } = await this.carDataValidation.validateId(id);
    if (message) return { message };

    await this.model.findByIdAndUpdate(id, carData);

    const data = await this.model.findById(id);
    const car = this.createCarDomain(data);
    return { message: `The car has been successfully updated: ${car}` };
  }

  public async findByIdAndDelete(id: string) {
    const { message } = await this.carDataValidation.validateId(id);
    if (message) return { message };

    await this.model.findByIdAndDelete(id);
    return { message: `The car with ID ${id} has been successfully deleted` };
  }
}
