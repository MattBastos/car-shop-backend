import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarIdValidation from './validations/CarIdValidation';

export default class CarService {
  private _model = new CarODM();
  private _carIdValidation = new CarIdValidation();

  private createCarDomain(car: ICar | null): Car | null {
    if (!car) return null;
    return new Car(car);
  }

  public async create(car: ICar) {
    const newCar = await this._model.create(car);
    return this.createCarDomain(newCar);
  }

  public async find() {
    const allCars = await this._model.find();
    return allCars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const data = await this._model.findById(id);
    const isValid = this._carIdValidation.idValidation(id);

    if (isValid) return { message: isValid };

    if (!data) return { message: 'Car not found' };

    const car = this.createCarDomain(data);
    return { message: car };
  }
}
