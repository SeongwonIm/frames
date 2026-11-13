import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      location: z.string().optional(),
      camera: z.string().default('Nikon D3400 · 18-55mm'),
      cover: image(),
      photos: z.array(
        z.object({
          src: image(),
          caption: z.string().optional(),
        })
      ),
    }),
});

export const collections = { series };