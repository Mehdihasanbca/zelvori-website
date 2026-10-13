import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const tempDir = path.resolve(__dirname, 'dist-cjs');

console.log('📦 [@zelvori/core] Building SDK dual-target distribution packages...');

// 1. Clean dist directories
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

fs.mkdirSync(distDir, { recursive: true });

// 2. Compile ESM + TypeScript Declarations
console.log('⚡ Compiling ESM and generating TypeScript declarations (.d.ts)...');
execSync('npx.cmd tsc --project tsconfig.json --outDir ./dist/esm --declaration --declarationDir ./dist/types', {
  cwd: __dirname,
  stdio: 'inherit',
});
fs.writeFileSync(path.join(distDir, 'esm', 'package.json'), JSON.stringify({ type: 'module' }, null, 2), 'utf8');

// 3. Compile CommonJS
console.log('⚡ Compiling CommonJS (CJS) target...');
execSync('npx.cmd tsc --project tsconfig.json --module commonjs --moduleResolution node10 --outDir ./dist/cjs --declaration false --declarationMap false', {
  cwd: __dirname,
  stdio: 'inherit',
});
fs.writeFileSync(path.join(distDir, 'cjs', 'package.json'), JSON.stringify({ type: 'commonjs' }, null, 2), 'utf8');

// 4. Generate root backwards compatibility entry points
console.log('⚡ Generating root legacy compatibility entry points...');
fs.writeFileSync(
  path.join(distDir, 'index.mjs'),
  `export * from './esm/index.js';\n`,
  'utf8'
);
fs.writeFileSync(
  path.join(distDir, 'index.js'),
  `export * from './esm/index.js';\n`,
  'utf8'
);
fs.writeFileSync(
  path.join(distDir, 'index.cjs'),
  `module.exports = require('./cjs/index.js');\n`,
  'utf8'
);
fs.writeFileSync(
  path.join(distDir, 'index.d.ts'),
  `export * from './types/index.js';\n`,
  'utf8'
);

console.log('✅ [@zelvori/core] SDK build completed successfully!\n');
