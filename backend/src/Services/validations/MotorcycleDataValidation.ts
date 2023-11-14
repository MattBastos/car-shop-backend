import { isValidObjectId } from 'mongoose';
import MotorcycleODM from '../../Models/MotorcycleODM';

export default class MotorcycleDataValidation {
  private model = new MotorcycleODM();

  private validateMongooseId(id: string) {
    if (isValidObjectId(id)) return null;
    return 'Invalid Mongo Id!';
  }

  private async checkForId(id: string) {
    const data = await this.model.findById(id);

    if (data) return null;
    return 'Motorcycle not found!';
  }

  public async validateId(id: string) {
    const validateMongooseIdMessage = this.validateMongooseId(id);
    if (validateMongooseIdMessage) {
      return { message: validateMongooseIdMessage };
    }

    const checkForIdMessage = await this.checkForId(id);
    if (checkForIdMessage) return { message: checkForIdMessage };

    return { message: null };
  }
}
