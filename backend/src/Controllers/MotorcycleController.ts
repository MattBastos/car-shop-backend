import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

const INVALID_MONGOOSE_ID_MESSAGE = 'Invalid Mongo Id!';
const MOTORCYCLE_NOT_FOUND_MESSAGE = 'Motorcycle not found!';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  public async create() {
    const { body } = this.req;

    const motorcycle: IMotorcycle = {
      model: body.model,
      year: body.year,
      color: body.color,
      status: body.status,
      buyValue: body.buyValue,
      category: body.category,
      engineCapacity: body.engineCapacity,
    };

    const newMotorcycle = await this.service.create(motorcycle);
    return this.res.status(201).json(newMotorcycle);
  }

  public async find() {
    const allMotorcycles = await this.service.find();
    return this.res.status(200).json(allMotorcycles);
  }

  public async findById() {
    const { id } = this.req.params;
    const { message } = await this.service.findById(id);

    if (message === MOTORCYCLE_NOT_FOUND_MESSAGE) {
      return this.res.status(404).json(message);
    }

    if (message === INVALID_MONGOOSE_ID_MESSAGE) {
      return this.res.status(422).json(message);
    }

    return this.res.status(200).json(message);
  }

  public async findByIdAndUpdate() {
    const { id } = this.req.params;
    const { body } = this.req;
    const { message } = await this.service.findByIdAndUpdate(id, body);

    if (message === MOTORCYCLE_NOT_FOUND_MESSAGE) {
      return this.res.status(404).json(message);
    }

    if (message === INVALID_MONGOOSE_ID_MESSAGE) {
      return this.res.status(422).json(message);
    }

    return this.res.status(200).json(message);
  }

  public async findByIdAndDelete() {
    const { id } = this.req.params;
    const { message } = await this.service.findByIdAndDelete(id);

    if (message === MOTORCYCLE_NOT_FOUND_MESSAGE) {
      return this.res.status(404).json(message);
    }

    if (message === INVALID_MONGOOSE_ID_MESSAGE) {
      return this.res.status(422).json(message);
    }

    return this.res.status(200).json(message);
  }
}
