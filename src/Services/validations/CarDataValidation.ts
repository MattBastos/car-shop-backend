import { isValidObjectId } from 'mongoose';

export default class CarDataValidation {
  public validateMongooseId(id: string) {
    if (!isValidObjectId(id)) return { message: 'Invalid mongo id' };
    return null;
  }
}