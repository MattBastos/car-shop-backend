import { isValidObjectId } from 'mongoose';

export default class CarIdValidation {
  public idValidation(id: string) {
    const isValid = isValidObjectId(id);
    if (isValid === true) return null;
    return 'Invalid mongo id';
  }
}
