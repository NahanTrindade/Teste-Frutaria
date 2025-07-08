import { Injectable } from '@nestjs/common';
import {
  findStockByFruitId,
  findStockByFruitName,
  UpdateStockByFruitId,
} from './dto/stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StockService {
  constructor(private readonly prisma: PrismaService) {}
  async findStockByFruitName(dto: findStockByFruitName) {
    return await this.prisma.fruits_stock.findFirst({
      where: { fruit: { name: dto.fruit_name } },
    });
  }

  async findStockByFruitId(dto: findStockByFruitId) {
    return await this.prisma.fruits_stock.findFirst({
      where: { fruit_id: dto.fruit_id },
    });
  }

  async updateStockByFruitId(dto: UpdateStockByFruitId) {
    const stockId = await this.prisma.fruits_stock.findFirst({
      where: { fruit_id: dto.fruit_id },
      select: { id: true },
    });

    await this.prisma.fruits_stock.update({
      where: { id: stockId.id },
      data: { actual_stock: dto.actual_stock },
    });
  }
}
