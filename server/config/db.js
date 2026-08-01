import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/futuristic_portfolio';
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`⚡ [MongoDB Atlas] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`⚠️ [MongoDB Atlas] Connection warning: ${error.message}`);
  }
};
