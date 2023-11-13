import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const CAR_NOT_FOUND_MESSAGE = 'Car not found!';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async create() {
    const { body } = this.req;

    const car: ICar = {
      model: body.model,
      year: body.year,
      color: body.color,
      status: body.status,
      buyValue: body.buyValue,
      doorsQty: body.doorsQty,
      seatsQty: body.seatsQty,
    };

    const newCar = await this.service.create(car);
    return this.res.status(201).json(newCar);
  }

  public async find() {
    const allCars = await this.service.find();
    return this.res.status(200).json(allCars);
  }

  public async findById() {
    const { id } = this.req.params;
    const car = await this.service.findById(id);

    if (car) return this.res.status(200).json(car);
    return this.res.status(404).json(CAR_NOT_FOUND_MESSAGE);
  }

  public async findByIdAndUpdate() {
    const { id } = this.req.params;
    const { body } = this.req;
    const car = await this.service.findByIdAndUpdate(id, body);

    if (car) return this.res.status(200).json(car);
    return this.res.status(404).json(CAR_NOT_FOUND_MESSAGE);
  }

  public async findByIdAndDelete() {
    const { id } = this.req.params;
    const result = await this.service.findByIdAndDelete(id);

    if (result && result.message) {
      return this.res.status(200).json(result.message);
    }

    return this.res.status(404).json(CAR_NOT_FOUND_MESSAGE);
  }
}
