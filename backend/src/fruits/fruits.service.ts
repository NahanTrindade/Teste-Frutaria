import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FruitsService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllProducts() {
    return await this.prisma.fruit.findMany({
      select: {
        name: true,
        image_url: true,
        measures: { select: { name: true } },
        type: { select: { id: true, name: true } },
        price: true,
        actual_stock: true,
      },
    });
  }

  async findProductById(id: number) {
    return await this.prisma.fruit.findFirst({
      where: { id },
    });
  }

  async findProductByName(name: string) {
    return await this.prisma.fruit.findFirst({
      where: { name: { contains: name } },
    });
  }
}
