import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),

    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },

        extensions: ['.css'],
        minimize: true,
        // generateScopedName: (name, filename, css) => {
        //   console.log({ name, filename, css });
        //   return name;
        // },
        // modules: true,
        extract: 'styles.css',
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'esm' },
      // {
      //   file: 'example/components/da-vinci-ui/index.js',
      //   format: 'es',
      //   banner: '/* eslint-disable */',
      // },
    ],
  },
];
