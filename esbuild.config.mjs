import * as esbuild from 'esbuild'
import path from "path";

await esbuild.build({
    entryPoints: [path.resolve('src/app.ts')],
    bundle: true,
    platform: 'node',
    target: ['node20'],
    outdir: 'build',
})