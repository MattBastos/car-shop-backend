import { isValidObjectId } from 'mongoose';
import CarODM from '../../Models/CarODM';

export default class CarDataValidation {
  private model = new CarODM();

  private validateMongooseId(id: string) {
    if (isValidObjectId(id)) return null;
    return 'Invalid mongo id';
  }

  private async validateDBId(id: string) {
    const data = await this.model.findById(id);

    if (data) return null;
    return 'Car not found';
  }

  public async validateId(id: string) {
    const isValidId = this.validateMongooseId(id);
    if (isValidId) return { message: isValidId };

    const verifyId = await this.validateDBId(id);
    if (verifyId) return { message: verifyId };

    return { message: null };
  }
}
