import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _model = new CarODM();

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(car: ICar): Promise<Car> {
    const newCar = await this._model.create(car);
    return this.createCarDomain(newCar);
  }

  public async find(): Promise<Car[]> {
    const allCars = await this._model.find();
    return allCars.map((car) => this.createCarDomain(car));
  }
}
