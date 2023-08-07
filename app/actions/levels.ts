import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createLevel(data: any) {
  return await test();
}

async function test() {
  try {
    const levelsWithAttributes = await prisma.level.findMany({
      include: {
        LevelAttributes: {
          include: {
            attribute: true,
          },
        },
      },
    });

    // console.log(levelsWithAttributes);
    // const updatedLevel = await prisma.level.update({
    //   where: {
    //     id: "64cf9b272d2383e73232e079",
    //   },
    //   data: {
    //     LevelAttributeIds: {
    //       set: ["64cf9b282d2383e73232e07a"],
    //     },
    //   },
    // });

    // // Add dummy Level records
    // const level1 = await prisma.level.create({
    //   data: {
    //     code: "L1",
    //     name: "Level 1",
    //     isRoot: true,
    //   },
    // });

    // Add dummy LevelAttribute records
    // const attribute1 = await prisma.levelAttribute.create({
    //   data: {
    //     code: "A2",
    //     name: "Attribute 2",
    //     description: "Description for Attribute 2",
    //     // levelIds: level1.id,
    //   },
    // });

    // // Add dummy LevelAttributeValue records
    // const attributeValue1 = await prisma.levelAtttributeValue.create({
    //   data: {
    //     code: "AV2",
    //     name: "Attribute Value 2",
    //     isRoot: true,
    //     attributeId: attribute1.id,
    //   },
    // });

    console.log("Dummy records added successfully!");
    return levelsWithAttributes;
  } catch (error) {
    console.error("Error adding dummy records:", error);
  } finally {
    await prisma.$disconnect();
  }
}
