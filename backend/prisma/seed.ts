import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const measureData = ['KG', 'UNIDADE', 'CAIXA', 'DÚZIA'];
  const measures = await Promise.all(
    measureData.map((name) =>
      prisma.measures.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  // Frutas com suas medidas, validade e preço
  const fruitsData = [
    {
      name: 'Banana',
      measure: 'KG',
      image_url:
        'https://drive.google.com/drive/folders/1O-k4r8rOdpYDY1SMJgYs1AE2mvfgIEPs?hl=pt-br',
      expiration_days: 7,
      price: 5.49,
    },
    {
      name: 'Maçã',
      measure: 'KG',
      image_url:
        'https://drive.google.com/file/d/1v5ETU2jNtlSwGf_ZKQvwi2ZemvApCBQ8/view?usp=sharing',
      expiration_days: 15,
      price: 6.99,
    },
    {
      name: 'Laranja',
      measure: 'CAIXA',
      expiration_days: 20,
      image_url:
        'https://drive.google.com/file/d/1hQ9c6co0Kh3pTi39nJMMR2r3n1AGADYy/view?usp=sharing',
      price: 45.0,
    },
    {
      name: 'Morango',
      measure: 'DÚZIA',
      expiration_days: 5,
      image_url:
        'https://drive.google.com/drive/folders/1O-k4r8rOdpYDY1SMJgYs1AE2mvfgIEPs?hl=pt-br',
      price: 12.0,
    },
    {
      name: 'Abacaxi',
      measure: 'UNIDADE',
      expiration_days: 10,
      image_url:
        'https://drive.google.com/file/d/15R5VLhdhis--7qHlxwPQ1NffGOu942ZA/view?usp=sharing',
      price: 8.5,
    },
    {
      name: 'Melancia',
      measure: 'UNIDADE',
      expiration_days: 12,
      image_url:
        'https://drive.google.com/file/d/17Ao0uKU8FkRyXb6QuVJA2rnpooJO71Q-/view?usp=sharing',
      price: 20.0,
    },
  ];

  for (const fruit of fruitsData) {
    const measure = measures.find((m) => m.name === fruit.measure);
    if (!measure) continue;

    const createdFruit = await prisma.fruit.create({
      data: {
        name: fruit.name,
        image_url: fruit.image_url,
        measure_id: measure.id,
        expiration_days: fruit.expiration_days,
        price: fruit.price,
      },
    });

    // Estoque da fruta
    await prisma.fruits_stock.create({
      data: {
        fruit_id: createdFruit.id,
        actual_stock: getRandomInt(10, 100),
        max_stock: 120,
        min_stock: 20,
      },
    });

    // Lote de fruta
    await prisma.fruit_batch.create({
      data: {
        fruit_id: createdFruit.id,
        received_date: randomDateInPast(10),
        manual_inspection_date: randomDateInPast(5),
      },
    });
  }

  console.log('Seed concluído!');
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDateInPast(daysAgo: number) {
  const date = new Date();
  date.setDate(date.getDate() - getRandomInt(0, daysAgo));
  return date;
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
