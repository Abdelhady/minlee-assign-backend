import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/minlee'),
    ImagesModule,
  ],
})
export class AppModule {}
