import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [sveltekit()],
    define: {
      'import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY': JSON.stringify(env.PUBLIC_CLERK_PUBLISHABLE_KEY),
    },
  };
});