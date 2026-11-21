import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The light on your face tonight left its star before there were roads, before there were names for the sea. It has been travelling ever since, and it arrives now, without a sound, asking nothing of you.";

const length = [...text].length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  console.error(`entry text failed validation: ${length} code points`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
