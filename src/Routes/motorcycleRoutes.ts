import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.post('/', (req, res) => new MotorcycleController(req, res).create());

export default motorcycleRoutes;
