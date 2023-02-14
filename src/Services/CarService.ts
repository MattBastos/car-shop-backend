import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _model = new CarODM();

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
    const car = await this._model.findById(id);
    return this.createCarDomain(car);
  }
}
