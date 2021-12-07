import { app, server } from '../app'
import mongoose from '../common/mongoose.service';
import request from 'supertest';
import Color from '../colors.model';
import { IColor } from '../interfaces/colors.interface';

const api = request(app);

const initialColors: IColor[] = [
    {
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 3,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    }
];

beforeEach(async() => {
    await Color.deleteMany({});

    for(const color of initialColors) {
        const colorObj = new Color(color);
        await colorObj.save();
    }
});

// intergration test
describe('GET /colores', () => {
    it('should respond with a 200 status code', async() => {
        const response = await api.get('/colores').send();
        expect(response.statusCode).toBe(200);
    });

    it('should have a content-type application/json in header', async() => {
        const response = await api.get('/colores').send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
    
    it('should respond with three colors', async() => {
        const response = await api.get('/colores').send();
        expect(response.body.colors).toHaveLength(initialColors.length);
    });
});

describe('GET /colores/:id', () => {
    it('should respond with a 200 status code', async() => {
        const response = await api.get('/colores/1').send();
        expect(response.statusCode).toBe(200);
    });

    it('should have a content-type application/json in header', async() => {
        const response = await api.get('/colores/1').send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    it(`should answer the first color with the 'cerulean' name`, async() => {
        const response = await api.get('/colores/1').send();
        expect(response.body.name).toBe('cerulean');
    });

});

afterAll(() => {
    mongoose.connection.close();
    server.close();
});