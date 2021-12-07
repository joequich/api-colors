import { Router } from 'express';
import { check } from 'express-validator';
import ColorsController from './colors.controller';
import ColorsService from './colors.service';
import ColorsMiddleware from './colors.middleware';
import { validateFields } from './common/validateFields.middleware';

const route = Router();
const colorsService = new ColorsService();
const colorsMiddleware = new ColorsMiddleware(colorsService);

const colorsController = new ColorsController(colorsService);

export default (app: Router) => {
    app.use('/colores', route);

    // List all colors METHOD= GET, URL= http://localhost:3000/colores
    route.get('/', colorsController.listColors);

    // Find a color METHOD= GET, URL= http://localhost:3000/colores/1
    route.get('/:id', colorsController.getColorById);

    // Create a color METHOD= POST, URL= http://localhost:3000/colores/
    route.post('/', [
        check('id', 'Id is required').not().isEmpty(),
        check('name', 'Name is required').not().isEmpty(),
        check('year', 'Year is required').not().isEmpty(),
        check('color', 'Color is required').not().isEmpty(),
        check('pantone_value', 'Pantone is required').not().isEmpty(),
        validateFields,
        colorsMiddleware.validateIfColorIdExist,
    ], colorsController.createColor);
};