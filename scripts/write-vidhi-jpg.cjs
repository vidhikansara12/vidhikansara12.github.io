/**
 * Writes a tiny valid JPEG to public/vidhi.jpg (1×1 grey pixel).
 * Replace with your real headshot when ready.
 */
const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "public", "vidhi.jpg");
const hex =
  "ffd8ffe000104a46494600010101004800480000ffdb004300030202020202030202020303030304060404040404080606050609080a0a090809090a0c0f0c0a0b0e0b09090d110d0e0f101011100a0c12131210130f101010ffc9000b080001000101011100ffcc000600101005ffda0008010100003f00d2cf20ffd9";

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, Buffer.from(hex, "hex"));
