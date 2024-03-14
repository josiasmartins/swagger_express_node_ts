import {Router, Request} from 'express';

export const studentRoute = Router();

const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
];

interface UpdateEmployeeRequest extends Request {
    id: number;
    name: string;
}


studentRoute.get('/student', (req, res) => {
            /*
            #swagger.tags = ['Student']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */
    res.status(200).json(employees);
});

studentRoute.get('/student/:id', (req, res) => {
    /**
     *  #swagger.tags = ['Student']
     */
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (!employee) res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
});

studentRoute.patch('/student/:id', (req: UpdateEmployeeRequest, res) => {
     /**
     *  #swagger.tags = ['Student']
     */
   const employee = employees.find(e => e.id === req.body.id);
    if (!employee) res.status(404).json({ message: 'Employee not found' });

    // if employee is found, update the employee name
    employee.name = req.body.name;
    res.status(200).json(employee);
});
