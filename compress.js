import sharp from "sharp";
import { join } from "node:path";

sharp(join(import.meta.dirname, "input.png"))
  .png({
    palette: true,
    effort: 10,
    colors: 64,
  })
  .toFile(join(import.meta.dirname, "output.png"));

sharp(join(import.meta.dirname, "input.png"))
  .webp({})
  .toFile(join(import.meta.dirname, "output.webp"));

sharp(join(import.meta.dirname, "input.png"))
  .avif({})
  .toFile(join(import.meta.dirname, "output.avif"));
