export class CreateFruitDto {
  name: string;
  measure_id: string;
  expiration_days: number;
  price: number;
}

export class findFruitByIdDto {
  id: string;
}

export class findFruitByNameDto {
  name: string;
}
