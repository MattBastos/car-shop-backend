import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post('/', (req, res) => new CarController(req, res).create());
carRoutes.get('/', (req, res) => new CarController(req, res).find());
carRoutes.get('/:id', (req, res) => new CarController(req, res).findById());
carRoutes.put('/:id', (req, res) => new CarController(req, res).findByIdAndUpdate());

export default carRoutes;
