import { isValidObjectId } from 'mongoose';
import CarODM from '../../Models/CarODM';

export default class CarDataValidation {
  private _model = new CarODM();

  public validateMongooseId(id: string) {
    if (isValidObjectId(id)) return null;
    return { message: 'Invalid mongo id' };
  }

  public async verifyIdDB(id: string) {
    const data = await this._model.findById(id);

    if (data) return null;
    return { message: 'Car not found' };
  }
}
