import express from "express";
import * as bodyParser from "body-parser";
import {routes} from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../swagger_output.json";

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(3001, () => {
    console.log('Server started at port 3000');
});