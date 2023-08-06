import { createLevel } from "@/app/actions/levels";
export default async function handler(req: any, res: any) {
  console.log("api call");
  const newLevel = await createLevel({
    code: "L1",
    name: "Level 1",
    isRoot: true,
  });
  res.json(newLevel);
}
