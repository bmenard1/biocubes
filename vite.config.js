import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // The existing source uses .js files that contain JSX (a CRA convention).
  // Tell esbuild to treat .js as JSX so we don't have to rename every file.
  plugins: [
    react({
      include: /\.(js|jsx|ts|tsx)$/,
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  base: '/',                    // site is at apex domain, no subpath
  resolve: {
    alias: {
      // Compatibility shim: until Agent B's import migration lands, the legacy
      // package name `react-three-fiber` (v6) resolves to its modern successor
      // `@react-three/fiber` (v8). Safe to remove once all `import ... from
      // 'react-three-fiber'` usages in src/ are updated.
      'react-three-fiber': '@react-three/fiber',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,           // do NOT ship sourcemaps to production (was 5.7 MB before)
    target: 'es2020',
    chunkSizeWarningLimit: 1500,
  },
  server: {
    port: 3000,
    proxy: {
      // Mirror the old src/setupProxy.js dev-only proxy (kept for parity)
      '/api': {
        target: 'https://menard.pha.jhu.edu',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
