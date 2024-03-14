import express from 'express';
import { employeeRouter } from '../controllers/employee-route';
import { studentRoute } from '../controllers/student-route';

export const routess = express.Router();

routess.use('/employee', employeeRouter);