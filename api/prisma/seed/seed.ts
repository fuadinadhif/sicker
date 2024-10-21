import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.image.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.roomRate.deleteMany();
  await prisma.room.deleteMany();
  await prisma.property.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
  });

  await prisma.property.create({
    data: {
      name: "Amanjiwo Resort",
      description:
        "Amanjiwo is located in area / city Borobudur. 24-hours front desk is available to serve you, from check-in to check-out, or any assistance you need. Should you desire more, do not hesitate to ask the front desk, we are always ready to accommodate you. WiFi is available within public areas of the property to help you to stay connected with family and friends.",
      latitude: -7.631467,
      longitude: 110.201955,
      Room: {
        create: {
          type: "Dalem Jiwo Suite",
          description:
            "Set amidst the rice paddies with its own private entrance, the Dalem Jiwo Suite offers two-bedroom pavilions, each with four-pillar king-sized beds. Offering 1,200 square metres (12,917 square feet) of living space, the suite has a large Javanese stone swimming pool, wraparound terrace, and two-outdoor bales for lounging.",
          defaultRate: 100,
          RoomRate: {
            createMany: {
              data: [
                {
                  rate: 50,
                  startDate: new Date(2024, 10, 1),
                  endDate: new Date(2024, 10, 2),
                },
                {
                  rate: 255,
                  startDate: new Date(2024, 10, 5),
                  endDate: new Date(2024, 10, 10),
                },
                {
                  rate: 70,
                  startDate: new Date(2024, 10, 15),
                  endDate: new Date(2024, 10, 17),
                },
                {
                  rate: 125,
                  startDate: new Date(2024, 10, 20),
                  endDate: new Date(2024, 10, 22),
                },
                {
                  rate: 500,
                  startDate: new Date(2024, 10, 22),
                  endDate: new Date(2024, 10, 29),
                },
              ],
            },
          },
          Reservation: {
            createMany: {
              data: [
                {
                  userId: user.id,
                  startDate: new Date(2024, 10, 3),
                  endDate: new Date(2024, 10, 4),
                },
                {
                  userId: user.id,
                  startDate: new Date(2024, 10, 8),
                  endDate: new Date(2024, 10, 12),
                },
                {
                  userId: user.id,
                  startDate: new Date(2024, 10, 20),
                  endDate: new Date(2024, 10, 21),
                },
                {
                  userId: user.id,
                  startDate: new Date(2024, 10, 25),
                  endDate: new Date(2024, 10, 27),
                },
                {
                  userId: user.id,
                  startDate: new Date(2024, 10, 28),
                  endDate: new Date(2024, 10, 29),
                },
              ],
            },
          },
          Image: {
            createMany: {
              data: [
                {
                  url: "https://www.aman.com/sites/default/files/styles/full_size_extra_large/public/2021-01/Dalem%20Jiwo%20Suite%2C%20Amanjiwo%2C%20Indonesia_1.jpg?itok=7yFhUZro",
                },
                {
                  url: "https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-02/Amanjiwo_Dalem_Jiwo_Suite_1.jpg?itok=GVgmAZH5",
                },
                {
                  url: "https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-02/Amanjiwo_Dalem_Jiwo_Suite_2.jpg?itok=ddvyGwZI",
                },
                {
                  url: "https://www.aman.com/sites/default/files/styles/full_size_extra_large/public/2021-01/Borobudur%20Pool%20Suite%2C%20Amanjiwo%2C%20Indonesia_1.jpg?itok=57-eIB5i",
                },
                {
                  url: "https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-02/Amanjiwo_Borobudur_Pool_Suite_1.jpg?itok=6kuQVlrN",
                },
              ],
            },
          },
        },
      },
      Image: {
        createMany: {
          data: [
            {
              url: "https://www.aman.com/sites/default/files/2021-03/Aman_Amanjiwo_Gallery_3.jpg",
            },
            {
              url: "https://www.aman.com/sites/default/files/2021-03/Aman_Amanjiwo_Gallery_19.jpg",
            },
            {
              url: "https://www.aman.com/sites/default/files/2021-03/Aman_Amanjiwo_Gallery_2.jpg",
            },
            {
              url: "https://www.aman.com/sites/default/files/2022-04/Amanjiwo%2C%20Indonesia%20-%20Property%2C%20drone%20shot%202-4-2.jpg",
            },
            {
              url: "https://www.aman.com/sites/default/files/2021-03/Aman_Amanjiwo_Gallery_20.jpg",
            },
          ],
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
