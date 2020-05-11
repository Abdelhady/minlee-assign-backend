import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
  originalname: String,
  filename: String,
  size: Number,
  mimetype: String,
  encoding: String,
});
