import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ipad } from './entities/ipad.entity';
import { ComputerController } from './ipad.controller';
import { IpadService } from './ipad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ipad])],
  controllers: [ComputerController],
  providers: [IpadService],
})
export class IpadModule {}
