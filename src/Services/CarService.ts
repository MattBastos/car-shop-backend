import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarDataValidation from './validations/CarDataValidation';

export default class CarService {
  private _model = new CarODM();
  private _carDataValidation = new CarDataValidation();

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
    const { message } = await this._carDataValidation.validateId(id);
    if (message) return { message };

    const data = await this._model.findById(id);
    const car = this.createCarDomain(data);
    return { message: car };
  }

  public async findByIdAndUpdate(id: string, carData: ICar) {
    const { message } = await this._carDataValidation.validateId(id);
    if (message) return { message };

    await this._model.findByIdAndUpdate(id, carData);
    const data = await this._model.findById(id);
    const car = this.createCarDomain(data);
    return { message: car };
  }
}
