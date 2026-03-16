import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const thoughts = defineCollection({
  loader: glob({ base: "./src/content/thoughts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const noslop = defineCollection({
  loader: glob({ base: "./src/content/noslop", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    url: z.string().optional(),
    type: z.enum(["image", "link", "photo"]).default("image"),
  }),
});

export const collections = { thoughts, noslop };
