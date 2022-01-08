import { RollupOptions } from 'rollup';

// rollup plugins
import * as del from 'rollup-plugin-delete';
import * as typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import * as commonjs from '@rollup/plugin-commonjs';

const config: RollupOptions[] = [
  {
    input: 'src_client/babylon.ts',
    output: {
      dir: 'public/js',
      format: 'esm',
      entryFileNames: '[name].min.mjs',
      chunkFileNames: '[name].min.mjs',
      preferConst: true,
    },
    plugins: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      del({ targets: ['public/js/*.mjs'] }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      typescript({ tsconfig: 'tsconfig.browser.json' }),
      nodeResolve(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      commonjs(),
      terser(),
    ],
  },
];

export default config;
