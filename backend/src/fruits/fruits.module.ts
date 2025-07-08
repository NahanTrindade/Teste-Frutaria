import { Module } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FruitsService],
  controllers: [FruitsController],
})
export class FruitsModule {}
