import { defineCollection, z } from "astro:content";

const writingSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    type: z.enum(["essay", "reading", "research", "fragment", "reflection"]).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
  .refine((entry) => entry.date || entry.pubDate, {
    message: "Add a date field in YYYY-MM-DD format.",
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
