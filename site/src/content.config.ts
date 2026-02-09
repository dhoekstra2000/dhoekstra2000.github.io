import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const teaching = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/teaching" }),
    schema: z.object({
        title: z.string(),
        role: z.string(),
        institute: z.string(),
        year: z.number(),
        start_date: z.date(),
        period: z.string(),
        short_links: z.array(z.object({
            text: z.string(),
            url: z.string(),
        })).optional(),
    })
});

const blog = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = { teaching, blog };