import dotenv from 'dotenv';
import connectToDatabase from './database.js';
import express from 'express';

// Routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(
    `The server is running on port: ${PORT} - http://localhost:${PORT}`
  );
});
