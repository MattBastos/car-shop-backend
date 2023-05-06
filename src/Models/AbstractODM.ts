import { Model, Schema, model, models, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T) {
    return this.model.create({ ...vehicle });
  }

  public async find() {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async findByIdAndUpdate(id: string, vehicle: T) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...vehicle } as UpdateQuery<T>,
    );
  }

  public async findByIdAndDelete(id: string) {
    return this.model.findByIdAndDelete({ _id: id });
  }
}
