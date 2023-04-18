import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { IpadService } from './ipad.service';
  import { CreateIpadDto } from './dto/ipad.dto';
  
  @Controller('ipad')
  export class IpadController {
    constructor(private readonly ipadServiceRepo: IpadService) {}
  
    //Metodo para crear un producto
    @Post()
    create(@Body() ipadDto: CreateIpadDto) {
      return this.ipadServiceRepo.create(ipadDto);
    }
  
    //Metodo para mostrar todos los productos
    @Get()
    findAll() {
      return this.ipadServiceRepo.findAll();
    }
  
    //Metodo para mostrar un producto especifico
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.ipadServiceRepo.findOne(id);
    }
  
    //Eliminar un producto especifico
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.ipadServiceRepo.remove(id);
    }
  
  
    //Crear metodo patch para actualizar
    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updatedIpadDto: CreateIpadDto,
    ) {
  return this.ipadServiceRepo.update(id, updatedIpadDto);
    }
  }