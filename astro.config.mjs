// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://lidiarodriguezlab-sketch.github.io/Documentacion_Femete',
    base: '/Documentacion_Femete/',
    integrations: [
        starlight({
            title: 'Proyecto Domitila',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Spanish',
                    lang: 'es',
                },
            },
            
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lidiarodriguezlab-sketch/Documentacion_Femete' }],
            customCss: ['./src/Style/custom.css'],
            
            components: {
                Search: './src/components/CustomAISearch.astro',
            },

            sidebar: [
                {
                    label: 'Información del Proyecto',
                    items: [
                        { autogenerate: { directory: 'Informacion_ Proyecto' } },
                    ],
                },
                {
                    label: 'Documentación',
                    items: [{ autogenerate: { directory: 'reference' } }],
                },
            ],
        }),
    ],
});