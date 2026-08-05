// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
    site: 'https://lidiarodriguezlab-sketch.github.io/Documentacion_Femete/',
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
            
            // Inyección de la etiqueta de verificación de Algolia en el <head>
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        name: 'algolia-site-verification',
                        content: '9736000863C405C5',
                    },
                },
            ],

            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            customCss: ['./src/Style/custom.css'],
            
            plugins: [
                starlightDocSearch({
                    appId: 'UNU9S528BP',
                    apiKey: '7354c09734c34cf8eea50f3980e0118b',
                    indexName: 'DocSearch',
                }),
            ],

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