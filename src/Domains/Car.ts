import ICar from '../Interfaces/ICar';

export default class Car {
  protected _id: string;
  protected _model: string;
  protected _year: number;
  protected _color: string;
  protected _status: boolean;
  protected _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(car: ICar) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }
}
