import { defineCollection } from "astro:content";

import { glob, file } from "astro/loaders";

import { z } from "astro/zod";

const teaching = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/teaching" }),
    schema: z.object({
        title: z.string(),
        role: z.string(),
        institute: z.string(),
        year: z.number(),
        period: z.string()
    })
});

export const collections = { teaching };