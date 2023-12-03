'use server';

import { prisma } from '@/core/prisma';
import { EngineType, Transmisison } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const createAuto = async (formData: FormData) => {
  console.log(444444444, formData);

  revalidatePath('/');

  const data = Object.fromEntries(formData);

  console.log(data);

  await prisma.car.create({
    data: {
      imageUrl: data.imageUrl as string,
      modelName: data.modelName as string,
      price: Number(data.price),
      year: Number(data.year),
      color: data.color as string,
      equipment: {
        connect: [],
      },
      user: {
        connect: {
          id: 1,
        },
      },
      engineType: data.engineType as EngineType,
      transmission: data.transmission as Transmisison,
      powerReserve: 0,
      published: true,
      brand: {
        connect: {
          id: Number(data.brand),
        },
      },
    },
  });

  revalidatePath('/');
};
