import express from 'express';
import cors from 'cors';
import carRoutes from './Routes/carRoutes';
import motorcycleRoutes from './Routes/motorcycleRoutes';

const app = express();

app.use(cors);
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);

export default app;
