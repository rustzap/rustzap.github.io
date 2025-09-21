// @ts-check
import { defineConfig } from 'astro/config';

import app from './src/configs/default';

// https://astro.build/config
export default defineConfig({
    site: app.url,
});
