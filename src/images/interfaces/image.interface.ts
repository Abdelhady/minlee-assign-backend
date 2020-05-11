import { Document } from 'mongoose';

export interface Image extends Document {
  readonly originalname: string;
  readonly filename: string;
  readonly size: number;
  readonly mimetype: string;
  readonly encoding: string;
}
