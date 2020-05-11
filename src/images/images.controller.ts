import { Controller, Get, Post, UseInterceptors, UploadedFile, Param, Res, Header } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { FileDto } from './dto/create-image.dto';
import { ImagesService } from './images.service';
import { Image } from './interfaces/image.interface';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {dest: './uploads'}))
  async uploadFile(@UploadedFile() fileDto: FileDto) {
    console.log(fileDto);
    return await this.imagesService.create(fileDto);
  }

  @Get("/:path")
  @Header('Content-Type', 'image/jpeg')
  getImage(@Param('path') path, @Res() res){
    return res.sendFile(path, {root: './uploads'})
  }

  @Get()
  async findAll(): Promise<Image[]> {
    return this.imagesService.findAll();
  }
  
}
