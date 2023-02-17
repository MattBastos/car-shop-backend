import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.post('/', (req, res) => new MotorcycleController(req, res).create());
motorcycleRoutes.get('/', (req, res) => new MotorcycleController(req, res).find());
motorcycleRoutes.get('/:id', (req, res) => new MotorcycleController(req, res).findById());
motorcycleRoutes.put('/:id', (req, res) => new MotorcycleController(req, res).findByIdAndUpdate());

export default motorcycleRoutes;
