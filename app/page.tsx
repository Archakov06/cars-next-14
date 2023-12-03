import Link from 'next/link';
import { prisma } from '@/core/prisma';
import { AddForm } from '@/components/AddForm';

export default async function Home({ searchParams }) {
  const cars = await prisma.car.findMany({
    where: {
      brand: {
        name: {
          contains: searchParams.brand,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
    include: {
      brand: true,
      equipment: true,
      user: true,
    },
  });

  return (
    <main>
      {cars.map((car) => (
        <Link href={`/cars/${car.id}`} key={car.id} prefetch>
          <img src={car.imageUrl} width={150} height={150} />
          <h3>
            {car.brand.name} {car.modelName}
          </h3>
          <p>{car.equipment.map((e) => e.name).join(', ')}</p>
        </Link>
      ))}

      <hr />

      <h1>Добавить авто:</h1>

      <AddForm />
    </main>
  );
}
