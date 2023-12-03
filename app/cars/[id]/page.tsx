import { prisma } from '@/core/prisma';
import { notFound } from 'next/navigation';

export default async function CarDetails({ params }) {
  const data = await prisma.car.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      brand: true,
      equipment: true,
      user: true,
    },
  });

  if (!data) {
    notFound();
  }

  return (
    <main>
      <img src={data.imageUrl} width={500} />
      <h1>
        {data.brand.name} {data.modelName}
      </h1>
      <h3>Цена: {data.price}</h3>
      <hr />
      <p>{data.equipment.map((e) => e.name).join(', ')}</p>
    </main>
  );
}
