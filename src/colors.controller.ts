import { Request, Response } from 'express';
import { IColorsService } from './interfaces/colors.interface';

export default class ColorsController {
    constructor(private readonly colorService: IColorsService) {}

    listColors = async (req: Request, res: Response) => {
        const page = req.query.page ? +req.query.page : 1;
        const limit = req.query.limit ? +req.query.limit : 5;


        try {
            const colors = await this.colorService.list(page, limit);
            return res
                .status(200)
                .json({
                    status: 200,
                    result: colors,
                    message: 'Succesfully Colors List',
                });
        } catch (err) {
            if (err instanceof Error) {
                return res
                    .status(400)
                    .json({ status: 400, message: err.message });
            } else {
                console.log(err);
                return res
                    .status(500)
                    .json({ status: 500, message: 'Unknow failure' });
            }
        }
    };

    getColorById = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const color = await this.colorService.readById(id);
            return res
                .status(200)
                .json({
                    status: 200,
                    result: color,
                    message: 'Succesfully Color List',
                });
        } catch (err) {
            if (err instanceof Error) {
                return res
                    .status(400)
                    .json({ status: 400, message: err.message });
            } else {
                console.log(err);
                return res
                    .status(500)
                    .json({ status: 500, message: 'Unknow failure' });
            }
        }
    };

    createColor = async (req: Request, res: Response) => {
        try {
            const color = await this.colorService.create(req.body);
            return res
                .status(201)
                .json({
                    status: 201,
                    color,
                    message: 'Succesfully Color Saved',
                });
        } catch (err) {
            if (err instanceof Error) {
                return res
                    .status(409)
                    .json({ status: 409, message: err.message });
            } else {
                console.log(err);
                return res
                    .status(500)
                    .json({ status: 500, message: 'Unknow failure' });
            }
        }
    };
}