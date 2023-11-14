/* eslint-disable function-paren-newline */
/** @format */

import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleDataValidation from './validations/MotorcycleDataValidation';

export default class MotorcycleService {
  private model = new MotorcycleODM();
  private motorcycleDataValidation = new MotorcycleDataValidation();

  private createMotorcycleDomain(
    motorcycle: IMotorcycle | null,
  ): Motorcycle | null {
    try {
      if (motorcycle) return new Motorcycle(motorcycle);
      return null;
    } catch (error) {
      throw new Error('Error creating motorcycle domain!');
    }
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async find() {
    const allMotorcycles = await this.model.find();
    return allMotorcycles.map((motorcycle) =>
      this.createMotorcycleDomain(motorcycle),
    );
  }

  public async findById(id: string) {
    const { message } = await this.motorcycleDataValidation.validateId(id);
    if (message) return { message };

    const data = await this.model.findById(id);
    const motorcycle = this.createMotorcycleDomain(data);
    return { message: motorcycle };
  }

  public async findByIdAndUpdate(id: string, motorcycleData: IMotorcycle) {
    const { message } = await this.motorcycleDataValidation.validateId(id);
    if (message) return { message };

    await this.model.findByIdAndUpdate(id, motorcycleData);

    const data = await this.model.findById(id);
    const motorcycle = this.createMotorcycleDomain(data);
    return {
      message: `The motorcycle has been successfully updated: ${motorcycle}`,
    };
  }

  public async findByIdAndDelete(id: string) {
    const { message } = await this.motorcycleDataValidation.validateId(id);
    if (message) return { message };

    await this.model.findByIdAndDelete(id);
    return {
      message: `The motorcycle with ID ${id} has been successfully deleted`,
    };
  }
}
