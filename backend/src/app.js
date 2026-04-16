import express from 'express'
import cors from 'cors' // For Cross origin request for react
import helmet from 'helmet' // For security headers
import morgan from 'morgan' // HTTP request logger
import products from './routes/productRoutes.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

// Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', products)

// Error Handler
app.use(errorHandler)

export default app