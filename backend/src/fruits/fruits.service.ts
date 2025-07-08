import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateFruitDto,
  findFruitByIdDto,
  findFruitByNameDto,
} from './dto/fruits.dto';

@Injectable()
export class FruitsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(CreateFruitDto: CreateFruitDto) {
    return await this.prisma.fruit.create({ data: CreateFruitDto });
  }

  async findFruitById(findFruitByIdDto: findFruitByIdDto) {
    return await this.prisma.fruit.findFirst({
      where: { id: findFruitByIdDto.id },
    });
  }

  async findFruitByName(findFruitByNameDto: findFruitByNameDto) {
    return await this.prisma.fruit.findFirst({
      where: { name: findFruitByNameDto.name },
    });
  }

  async findAllFruits() {
    return await this.prisma.fruit.findMany();
  }
}
