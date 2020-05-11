import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Image } from './interfaces/image.interface';
import { FileDto } from './dto/create-image.dto';

@Injectable()
export class ImagesService {
  constructor(@InjectModel('Image') private readonly imageModel: Model<Image>) {}

  async create(fileDto: FileDto): Promise<Image> {
    const createdImage = new this.imageModel(fileDto);
    return createdImage.save();
  }

  async findAll(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }
}
