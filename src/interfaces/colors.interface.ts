
export interface IColor {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export interface IColorsService {
    create: (data: IColor) => Promise<IColor>;
    list: (
        from: number,
        limit: number
    ) => Promise<{
        colors: IColor[];
        total: number;
        current: number;
        pages: number;
    }>;
    readById: (id: string) => Promise<IColor | null>;
}