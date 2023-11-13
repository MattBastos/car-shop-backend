import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarDataValidation from './validations/CarDataValidation';

export default class CarService {
  private model = new CarODM();
  private carDataValidation = new CarDataValidation();

  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
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
    const isIdValid = await this.carDataValidation.validateId(id);

    if (isIdValid) {
      const data = await this.model.findById(id);
      const car = this.createCarDomain(data);

      return car;
    }
  }

  public async findByIdAndUpdate(id: string, carData: ICar) {
    const isIdValid = await this.carDataValidation.validateId(id);

    if (isIdValid) {
      await this.model.findByIdAndUpdate(id, carData);

      const data = await this.model.findById(id);
      const car = this.createCarDomain(data);

      return car;
    }
  }

  public async findByIdAndDelete(id: string) {
    const isIdValid = await this.carDataValidation.validateId(id);
    if (isIdValid) await this.model.findByIdAndDelete(id);
  }
}
