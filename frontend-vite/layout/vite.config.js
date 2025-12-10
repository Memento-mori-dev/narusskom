import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const name = assetInfo.name ?? '';
                    const ext = name.split('.').pop()?.toLowerCase();

                    // для картинок — имя без хеша
                    if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'avif'].includes(ext ?? '')) {
                        return 'assets/images/[name][extname]';
                    }

                    // остальное можно оставить с хешем
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
});
