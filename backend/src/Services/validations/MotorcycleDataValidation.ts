import { isValidObjectId } from 'mongoose';
import MotorcycleODM from '../../Models/MotorcycleODM';

export default class MotorcycleDataValidation {
  private _model = new MotorcycleODM();

  private validateMongooseId(id: string) {
    if (isValidObjectId(id)) return null;
    return 'Invalid mongo id';
  }

  private async verifyIdDB(id: string) {
    const data = await this._model.findById(id);

    if (data) return null;
    return 'Motorcycle not found';
  }

  public async validateId(id: string) {
    const isValidId = this.validateMongooseId(id);
    if (isValidId) return { message: isValidId };

    const verifyId = await this.verifyIdDB(id);
    if (verifyId) return { message: verifyId };

    return { message: null };
  }
}
