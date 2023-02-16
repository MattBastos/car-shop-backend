import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private _req: Request;
  private _res: Response;
  private _service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this._req = req;
    this._res = res;
    this._service = new MotorcycleService();
  }

  public async create() {
    const { body } = this._req;

    const motorcycle: IMotorcycle = {
      model: body.model,
      year: body.year,
      color: body.color,
      status: body.status,
      buyValue: body.buyValue,
      category: body.category,
      engineCapacity: body.engineCapacity,
    };

    const newMotorcycle = await this._service.create(motorcycle);
    return this._res.status(201).json(newMotorcycle);
  }

  public async find() {
    const allMotorcycles = await this._service.find();
    return this._res.status(200).json(allMotorcycles);
  }
}
