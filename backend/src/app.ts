import express from 'express';
import carRoutes from './Routes/carRoutes';
import motorcycleRoutes from './Routes/motorcycleRoutes';

const app = express();

app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);

export default app;
