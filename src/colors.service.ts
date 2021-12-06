import { IColor, IColorsService } from './interfaces/colors.interface';
import Color from './colors.model';

export default class ColorsService implements IColorsService {
    async create(data: IColor): Promise<IColor> {
        try {
            const color = new Color(data);
            await color.save();
            return color;
        } catch {
            // Log Errors
            throw new Error('Error while Save Color');
        }
    }

    async list(page: number, limit: number): Promise<{colors: IColor[]; total: number; pages: number; current: number;}> {
        try {
            const [ total, colors ] = await Promise.all([
                Color.countDocuments({ status: true }),
                Color.find({},'id name color')
                .skip(+((page - 1) * limit))
                .limit(+limit)
            ]);
            const pages = Math.ceil(total/limit);
            return {
                colors, total, pages, current: page
            }
        } catch {
            // Log Errors
            throw new Error('Error while Paginating Colors');
        }
    }

    async readById(id: string): Promise<(IColor) | null> {
        try {
            const color = await Color.findOne({id});
            return color;
        } catch {
            // Log Errors
            throw new Error('Error while Reading Color');
        }
    }
}