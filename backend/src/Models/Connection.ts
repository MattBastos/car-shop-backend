import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/CarShop';

const connectToDatabase = (mongoDBURI = MONGO_URI) =>
  mongoose.connect(mongoDBURI);

export default connectToDatabase;
