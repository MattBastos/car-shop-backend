import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleDataValidation from './validations/MotorcycleDataValidation';

export default class MotorcycleService {
  private _model = new MotorcycleODM();
  private _motorcycleDataValidation = new MotorcycleDataValidation();
  
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (!motorcycle) return null;
    return new Motorcycle(motorcycle);
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this._model.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async find() {
    const allMotorcycles = await this._model.find();
    return allMotorcycles.map((motorcycle) =>
      this.createMotorcycleDomain(motorcycle));
  }

  public async findById(id: string) {
    const { message } = await this._motorcycleDataValidation.validateId(id);
    if (message) return { message };

    const data = await this._model.findById(id);
    const motorcycle = this.createMotorcycleDomain(data);
    return { message: motorcycle };
  }

  public async findByIdAndUpdate(id: string, motorcycleData: IMotorcycle) {
    const { message } = await this._motorcycleDataValidation.validateId(id);
    if (message) return { message };

    await this._model.findByIdAndUpdate(id, motorcycleData);
    const data = await this._model.findById(id);
    const motorcycle = this.createMotorcycleDomain(data);
    return { message: motorcycle };
  }

  public async findByIdAndDelete(id: string) {
    const { message } = await this._motorcycleDataValidation.validateId(id);
    if (message) return { message };

    await this._model.findByIdAndDelete(id);
    return { message: `Motorcycle deleted: ${id}` };
  }
}
