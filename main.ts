import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The light on your face tonight left its star before there were roads, before there were names for the sea. It has been travelling ever since, and it arrives now, without a sound, asking nothing of you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
