import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import {
  CreateFruitDto,
  findFruitByIdDto,
  findFruitByNameDto,
} from './dto/fruits.dto';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitService: FruitsService) {}

  @Post()
  create(@Body() dto: CreateFruitDto) {
    return this.fruitService.create(dto);
  }

  @Get(':name')
  findByName(@Param() dto: findFruitByNameDto) {
    return this.fruitService.findFruitByName(dto);
  }

  @Get(':id')
  findById(@Param() dto: findFruitByIdDto) {
    return this.fruitService.findFruitById(dto);
  }

  @Get()
  findAll() {
    return this.fruitService.findAllFruits();
  }
}
