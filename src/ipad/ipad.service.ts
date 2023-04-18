import { Body, Delete, Injectable, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ipad } from './entities/ipad.entity';
import { CreateIpadDto } from './dto/ipad.dto';

@Injectable()
export class IpadService {
  constructor(
    @InjectRepository(Ipad)
    private readonly ipadRepository: Repository<Ipad>,
  ) {}

  //Metodo para crear un producto
  async create(ipadDto: CreateIpadDto) {
    const ipad = this.ipadRepository.create(ipadDto);
    await this.ipadRepository.save(ipad);

    return ipad;
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.ipadRepository.findOneBy({ id });
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.ipadRepository.find();
  }

  //Remover un producto especifico
  async remove(id: string) {
    const ipad = await this.findOne(id);
    await this.ipadRepository.remove(ipad);
    return 'Ipad eliminada satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateIpadDto) {
    const findIpad = await this.findOne(id);
    const updatedIpad = await this.ipadRepository.merge(
      findIpad,
      cambios,
    );

      return this.ipadRepository.save(updatedIpad);
    
  }
}
