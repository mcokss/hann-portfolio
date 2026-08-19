import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const FONTS_DIR = join(SRC, "fonts");

const EXPECTED_FONTS = ["Geist-Variable.woff2", "GeistMono-Variable.woff2"];

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const sourceFiles = walk(SRC).filter((f) =>
  [".ts", ".tsx", ".js", ".jsx", ".css", ".mjs"].includes(extname(f))
);

for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  if (content.includes("next/font/google")) {
    fail(`"next/font/google" used in ${file} — build depends on fonts.gstatic.com`);
  }
}

for (const name of EXPECTED_FONTS) {
  const path = join(FONTS_DIR, name);
  if (!existsSync(path)) {
    fail(`missing vendored font: ${path}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} failure(s)`);
  process.exit(1);
}

console.log("PASS: no Google font dependency, fonts are self-hosted");
