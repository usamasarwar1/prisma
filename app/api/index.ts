import { createLevel } from "@/app/actions/levels";
export default async function handler(req: any, res: any) {
  console.log("api call");
  const newLevel = await createLevel({});
  res.json(newLevel);
}
