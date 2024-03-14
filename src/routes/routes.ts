import express from 'express';
import { employeeRouter } from '../controllers/employee-route';

export const routes = express.Router();

routes.use('/api/employee', employeeRouter);