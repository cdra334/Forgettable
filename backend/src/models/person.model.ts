import { Schema, model } from 'mongoose';

interface PersonModel {
    name: string,
    organisation: string
}

const schema = new Schema<PersonModel>({
  name: { type: String, required: true },
  organisation: { type: String, required: true },
});

export default model<PersonModel>('Person', schema);