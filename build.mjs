import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('./dist/', import.meta.url);
const root = new URL('./', import.meta.url);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js', 'manus-routes.json']) {
  await cp(new URL(file, root), new URL(file, output));
}

await cp(new URL('public/', root), new URL('public/', output), { recursive: true });
console.log('Site estático gerado em dist/.');
