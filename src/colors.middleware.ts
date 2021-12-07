import { NextFunction, Request, Response } from 'express';
import { IColorsService } from './interfaces/colors.interface';

export default class ColorsMiddleware {
    constructor(private readonly colorService: IColorsService) {}

    validateIfColorIdExist = async(req: Request, res: Response, next: NextFunction) => {
        const id: string = req.body.id;
        const existColor = await this.colorService.readById(id);

        if(existColor) {
            return res.status(409).send({
                message: `Color id ${id} already exists`
            });
        } else {
            return next();
        }
    }
}