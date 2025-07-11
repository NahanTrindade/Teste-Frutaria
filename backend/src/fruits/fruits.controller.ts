import { Controller, Get, Param } from '@nestjs/common';
import { FruitsService } from './fruits.service';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitService: FruitsService) {}

  @Get(':name')
  findByName(@Param() name: string) {
    return this.fruitService.findProductByName(name);
  }

  @Get(':id')
  findById(@Param() id: number) {
    return this.fruitService.findProductById(id);
  }

  @Get()
  findAll() {
    return this.fruitService.getAllProducts();
  }
}
