import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o seed...');

  // Limpa dados anteriores
  await prisma.fruit.deleteMany();
  await prisma.type.deleteMany();
  await prisma.measures.deleteMany();
  await prisma.user.deleteMany();

  const users = [
    {
      email: 'joao.silva942@example.com',
      password: await bcrypt.hash('senha123', 10),
    },
    {
      email: 'maria.oliveira183@example.com',
      password: await bcrypt.hash('senha321', 10),
    },
  ];

  await prisma.user.createMany({ data: users });
  console.log('Usuários inseridos');

  const measures = [
    { id: 1, name: 'KG' },
    { id: 2, name: 'Unidade' },
    { id: 3, name: 'Caixa' },
    { id: 4, name: 'Dúzia' },
  ];

  await prisma.measures.createMany({ data: measures });
  console.log('Measures inseridas');

  const types = [
    { id: 1, name: 'Frutas' },
    { id: 2, name: 'Vegetais Folhosos' },
    { id: 3, name: 'Raízes e Tubérculos' },
    { id: 4, name: 'Bulbos' },
  ];

  await prisma.type.createMany({ data: types });
  console.log('Types inseridos');

  const fruits = [
    {
      name: 'Maçã',
      image_url:
        'https://www.celeiro.pt/media/catalog/product/cache/42fa53b6527f136e0c1bc51385dbc32e/3/4/342018-maca-vista-bela-bio---kg-1-kgs-kg-frescos_1.jpg',
      type_id: 1,
      measures_id: 1,
      price: new Prisma.Decimal((4.99).toFixed(2)),
      actual_stock: 25,
      max_stock: 100,
      min_stock: 10,
    },
    {
      name: 'Banana',
      image_url:
        'https://cdn.awsli.com.br/2500x2500/502/502061/produto/18364412/8aaa8433f9.jpg',
      type_id: 1,
      measures_id: 1,
      price: new Prisma.Decimal((2.89).toFixed(2)),
      actual_stock: 50,
      max_stock: 120,
      min_stock: 20,
    },
    {
      name: 'Abacaxi',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSng-xU8hTulG04Tn2quGuWw761WTkE65miWQ&s',
      type_id: 1,
      measures_id: 2,
      price: new Prisma.Decimal((5.5).toFixed(2)),
      actual_stock: 15,
      max_stock: 60,
      min_stock: 8,
    },
    {
      name: 'Melancia',
      image_url:
        'https://assessa.com.br/wp-content/uploads/melancia-feat-img.jpg',
      type_id: 1,
      measures_id: 1,
      price: new Prisma.Decimal((3.3).toFixed(2)),
      actual_stock: 30,
      max_stock: 90,
      min_stock: 12,
    },
    {
      name: 'Morango',
      image_url:
        'https://muffatosupermercados.vtexassets.com/arquivos/ids/370734/101042-1.jpg?v=638319532595500000',
      type_id: 1,
      measures_id: 3,
      price: new Prisma.Decimal((6.25).toFixed(2)),
      actual_stock: 18,
      max_stock: 50,
      min_stock: 6,
    },
    {
      name: 'Laranja',
      image_url:
        'https://acdn-us.mitiendanube.com/stores/002/296/660/products/207993_laranja_pera1-390a5d1d04163a225916606828346325-1024-1024.jpg',
      type_id: 1,
      measures_id: 1,
      price: new Prisma.Decimal((3.8).toFixed(2)),
      actual_stock: 40,
      max_stock: 100,
      min_stock: 15,
    },

    // Vegetais Folhosos
    {
      name: 'Alface',
      image_url:
        'https://cdn.awsli.com.br/600x1000/1982/1982052/produto/174027508/53c931b15d.jpg',
      type_id: 2,
      measures_id: 2,
      price: new Prisma.Decimal((1.5).toFixed(2)),
      actual_stock: 12,
      max_stock: 40,
      min_stock: 5,
    },
    {
      name: 'Rúcula',
      image_url:
        'https://52586.cdn.lojaquevende.com.br/static/52586/sku/verduras-Rucula-1586828446668.jpg',
      type_id: 2,
      measures_id: 2,
      price: new Prisma.Decimal((2.0).toFixed(2)),
      actual_stock: 10,
      max_stock: 30,
      min_stock: 4,
    },
    {
      name: 'Espinafre',
      image_url:
        'https://hortifrutibr.vtexassets.com/arquivos/ids/173610/Espinafre.jpg.jpg?v=638730610962830000',
      type_id: 2,
      measures_id: 1,
      price: new Prisma.Decimal((4.2).toFixed(2)),
      actual_stock: 8,
      max_stock: 25,
      min_stock: 3,
    },
    {
      name: 'Acelga',
      image_url: 'https://i.panelinha.com.br/i1/bk-6542-acelga-glossario.webp',
      type_id: 2,
      measures_id: 2,
      price: new Prisma.Decimal((2.8).toFixed(2)),
      actual_stock: 14,
      max_stock: 35,
      min_stock: 6,
    },
    {
      name: 'Couve',
      image_url:
        'https://acdn-us.mitiendanube.com/stores/002/296/660/products/couve-manteiga1-6a1ba20cccccd0184b16747601971081-640-0.jpg',
      type_id: 2,
      measures_id: 2,
      price: new Prisma.Decimal((1.9).toFixed(2)),
      actual_stock: 20,
      max_stock: 40,
      min_stock: 5,
    },
    {
      name: 'Repolho',
      image_url:
        'https://mercadoorganico.com/6328-home_default/repolho-verde-organico-un-osm.jpg',
      type_id: 2,
      measures_id: 1,
      price: new Prisma.Decimal((3.1).toFixed(2)),
      actual_stock: 22,
      max_stock: 60,
      min_stock: 8,
    },

    // Raízes e Tubérculos
    {
      name: 'Cenoura',
      image_url:
        'https://phygital-files.mercafacil.com/cenourao-bucket/uploads/produto/cenoura_kg_1c9753d4-addc-45e1-978a-050b83289827.png',
      type_id: 3,
      measures_id: 1,
      price: new Prisma.Decimal((3.2).toFixed(2)),
      actual_stock: 35,
      max_stock: 90,
      min_stock: 15,
    },
    {
      name: 'Batata',
      image_url:
        'https://giassi.vtexassets.com/arquivos/ids/2046592/Batata-Inglesa-kg.jpg?v=638589134048700000',
      type_id: 3,
      measures_id: 1,
      price: new Prisma.Decimal((2.7).toFixed(2)),
      actual_stock: 40,
      max_stock: 100,
      min_stock: 20,
    },
    {
      name: 'Mandioca',
      image_url:
        'https://saude.abril.com.br/wp-content/uploads/2016/12/mandioca.jpg?quality=50&strip=info',
      type_id: 3,
      measures_id: 1,
      price: new Prisma.Decimal((2.9).toFixed(2)),
      actual_stock: 25,
      max_stock: 80,
      min_stock: 10,
    },
    {
      name: 'Beterraba',
      image_url:
        'https://cdn.awsli.com.br/600x450/681/681419/produto/265468585/beterraba---caixa-de-20kg-pmg262fswo.png',
      type_id: 3,
      measures_id: 1,
      price: new Prisma.Decimal((3.5).toFixed(2)),
      actual_stock: 28,
      max_stock: 85,
      min_stock: 12,
    },
    {
      name: 'Nabo',
      image_url:
        'https://images.tcdn.com.br/img/img_prod/763396/nabo_229_1_20200320145231.jpg',
      type_id: 3,
      measures_id: 1,
      price: new Prisma.Decimal((3.1).toFixed(2)),
      actual_stock: 10,
      max_stock: 40,
      min_stock: 6,
    },
    {
      name: 'Inhame',
      image_url:
        'https://i0.wp.com/naturvida.com.br/wp-content/uploads/2023/05/inhame.webp?fit=610%2C400&ssl=1',
      type_id: 3,
      measures_id: 1,
      price: new Prisma.Decimal((3.8).toFixed(2)),
      actual_stock: 18,
      max_stock: 50,
      min_stock: 8,
    },

    // Bulbos
    {
      name: 'Cebola',
      image_url:
        'https://cdn.awsli.com.br/300x300/305/305913/produto/10293544/cebola-1d05720a.jpg',
      type_id: 4,
      measures_id: 1,
      price: new Prisma.Decimal((2.1).toFixed(2)),
      actual_stock: 30,
      max_stock: 90,
      min_stock: 15,
    },
    {
      name: 'Alho',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXLBLrRDEIoxf_GCmhBTerxgOQ_kU8tJ7g&s',
      type_id: 4,
      measures_id: 1,
      price: new Prisma.Decimal((9.5).toFixed(2)),
      actual_stock: 12,
      max_stock: 40,
      min_stock: 6,
    },
    {
      name: 'Alho-poró',
      image_url:
        'https://cdn.awsli.com.br/600x700/305/305913/produto/10293477/alho-poro-2efb3f2b.jpg',
      type_id: 4,
      measures_id: 2,
      price: new Prisma.Decimal((3.7).toFixed(2)),
      actual_stock: 10,
      max_stock: 30,
      min_stock: 5,
    },
    {
      name: 'Cebolinha',
      image_url:
        'https://images.tcdn.com.br/img/img_prod/799330/cebolinha_verde_1085_1_20200525091535.jpg',
      type_id: 4,
      measures_id: 2,
      price: new Prisma.Decimal((2.0).toFixed(2)),
      actual_stock: 18,
      max_stock: 40,
      min_stock: 6,
    },
    {
      name: 'Shallot',
      image_url:
        'https://www.collinsdictionary.com/images/full/shallot_6435766.jpg',
      type_id: 4,
      measures_id: 1,
      price: new Prisma.Decimal((5.8).toFixed(2)),
      actual_stock: 11,
      max_stock: 35,
      min_stock: 7,
    },
  ];

  for (const fruit of fruits) {
    await prisma.fruit.create({ data: fruit });
  }

  console.log('Fruits inseridos');

  console.log('Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
