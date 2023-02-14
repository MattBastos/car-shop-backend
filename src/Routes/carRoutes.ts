import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post('/', (req, res) => new CarController(req, res).create());
carRoutes.get('/', (req, res) => new CarController(req, res).find());

export default carRoutes;
