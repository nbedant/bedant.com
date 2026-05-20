import { defineCollection, z } from "astro:content";

const writingSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const essays = defineCollection({
  type: "content",
  schema: writingSchema,
});

const notes = defineCollection({
  type: "content",
  schema: writingSchema,
});

export const collections = { essays, notes };
