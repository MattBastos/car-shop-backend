import { isValidObjectId } from 'mongoose';
import CarODM from '../../Models/CarODM';

export default class CarDataValidation {
  private model = new CarODM();

  public validateMongooseId(id: string) {
    if (isValidObjectId(id)) return null;
    return 'Invalid Mongo Id!';
  }

  public async checkForId(id: string) {
    const data = await this.model.findById(id);

    if (data) return null;
    return 'Car not found!';
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
