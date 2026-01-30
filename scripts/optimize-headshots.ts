import sharp from "sharp";
import { readdir, mkdir, rm } from "fs/promises";
import { join } from "path";

const INPUT_DIR = join(import.meta.dirname, "../public/Headshots");
const OUTPUT_DIR = INPUT_DIR;
const SIZE = 240;

const files = (await readdir(INPUT_DIR)).filter((f) => f.endsWith(".jpg"));

console.log(`Processing ${files.length} headshots...`);

await mkdir(OUTPUT_DIR, { recursive: true });

for (const file of files) {
  const name = file.replace(".jpg", "");
  const input = join(INPUT_DIR, file);
  const output = join(OUTPUT_DIR, `${name}.webp`);

  await sharp(input).resize(SIZE, SIZE, { fit: "cover" }).webp({ quality: 80 }).toFile(output);

  const stats = await Bun.file(output).size;
  console.log(`  ${file} -> ${name}.webp (${(stats / 1024).toFixed(1)}KB)`);
}

for (const file of files) {
  await rm(join(INPUT_DIR, file));
}

console.log("Done. Original JPGs removed.");
