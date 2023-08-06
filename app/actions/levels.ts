import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createLevel(data: any) {
  test();
}

async function test() {
  try {
    const levelsWithAttributes = await prisma.level.findMany({
      include: {
        LevelAttribute: true,
      },
    });

    console.log(levelsWithAttributes);
    // const updatedLevel = await prisma.level.update({
    //   where: {
    //     id: "clkzck6mf0000m3aspo03zyzx",
    //   },
    //   data: {
    //     LevelAttributeIds: {
    //       set: ["clkzck7ep0001m3as6b1zvwnc"],
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

    // // Add dummy LevelAttribute records
    // const attribute1 = await prisma.levelAttribute.create({
    //   data: {
    //     code: "A1",
    //     name: "Attribute 1",
    //     description: "Description for Attribute 1",
    //     // levelIds: level1.id,
    //   },
    // });

    // Add dummy LevelAttributeValue records
    // const attributeValue1 = await prisma.levelAtttributeValue.create({
    //   data: {
    //     code: "AV1",
    //     name: "Attribute Value 1",
    //     isRoot: true,
    //     // attributeId: attribute1.id,
    //   },
    // });

    console.log("Dummy records added successfully!");
  } catch (error) {
    console.error("Error adding dummy records:", error);
  } finally {
    await prisma.$disconnect();
  }
}
