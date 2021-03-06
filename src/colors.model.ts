import mongoose from './common/mongoose.service';
import { IColor } from './interfaces/colors.interface';

const ColorSchema = new mongoose.Schema<IColor>({
    id: { type: Number, required: [true, 'Id is required'], unique: true },
    name: { type: String, required: [true, 'Name is required'] },
    year: { type: Number, required: [true, 'Year is required'] },
    color: { type: String, required: [true, 'Color is required'] },
    pantone_value: { type: String, required: [true, 'Pantone value is required'] },
});

ColorSchema.methods.toJSON = function() {
    const color = this.toObject();
    delete color.__v;
    delete color._id;
    return color;
};

export default mongoose.model<IColor & mongoose.Document>('Color', ColorSchema);