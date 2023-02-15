import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _req: Request;
  private _res: Response;
  private _service: CarService;

  constructor(req: Request, res: Response) {
    this._req = req;
    this._res = res;
    this._service = new CarService();
  }

  public async create() {
    const { body } = this._req;

    const car: ICar = {
      model: body.model,
      year: body.year,
      color: body.color,
      status: body.status,
      buyValue: body.buyValue,
      doorsQty: body.doorsQty,
      seatsQty: body.seatsQty,
    };

    const newCar = await this._service.create(car);
    return this._res.status(201).json(newCar);
  }

  public async find() {
    const allCars = await this._service.find();
    return this._res.status(200).json(allCars);
  }

  public async findById() {
    const { id } = this._req.params;
    const { message } = await this._service.findById(id);

    if (message === 'Car not found') return this._res.status(404).json({ message });

    if (message === 'Invalid mongo id') return this._res.status(422).json({ message });

    return this._res.status(200).json(message);
  }

  public async findByIdAndUpdate() {
    const { id } = this._req.params;
    const { body } = this._req;
    const { message } = await this._service.findByIdAndUpdate(id, body);

    if (message === 'Car not found') return this._res.status(404).json({ message });

    if (message === 'Invalid mongo id') return this._res.status(422).json({ message });

    return this._res.status(200).json(message);
  }
}
