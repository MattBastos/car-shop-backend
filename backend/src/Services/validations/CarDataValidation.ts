import { isValidObjectId } from 'mongoose';
import CarODM from '../../Models/CarODM';

export default class CarDataValidation {
  private model = new CarODM();

  private validateMongooseId(id: string): boolean {
    return isValidObjectId(id);
  }

  private async validateDatabaseId(id: string): Promise<boolean> {
    const data = await this.model.findById(id);
    return !!data;
  }

  public async validateId(id: string): Promise<boolean> {
    const isValidMongooseId = this.validateMongooseId(id);
    const isValidDatabaseId = await this.validateDatabaseId(id);

    return isValidMongooseId && isValidDatabaseId;
  }
}
