import { defineCollection, reference } from 'astro:content';
import { z } from "astro/zod";
import { glob } from "astro/loaders";
// import { postLoader } from './loaders/post-loader';

// const postSchema = z.object({
// 	title: z.string(),
// 	titleDisplay: z.string().optional(),
// 	summary: z.string(),
// 	kind: z.enum(["post", "project"]).default("post"),
// 	published: z.boolean().default(false),
// 	theme: z.string().optional(),
// 	/** explicitly set post URL, for instance to link to a static PDF */
// 	url: z.string().optional(),
// 	// Transform string to Date object
// 	datePublished: z.coerce.date(),
// 	dateUpdated: z.coerce.date().optional(),
// 	imageThumbnail: z.string().optional(),
// 	tags: z.array(z.string()).optional(),
// 	tools: z.array(z.string()).optional(),
// 	format: z.enum(["pdf"]).optional(),
// 	series: z.object({
// 		seriesId: reference("series"),
// 		seriesNumber: z.number().int().gte(1),
// 		isAppendix: z.boolean().optional()
// 	}).optional(),
// 	priority: z.enum(["normal", "low"]).default("normal")
// });

const course = defineCollection({
	// loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/post" }),
	loader: glob({ pattern: '[^_]*.{md,mdx}', base: "./src/content/courses" }),
	schema: z.object({
    subject: z.string(),
    number: z.coerce.string(),
		title: z.string(),
		theme: z.string().optional()
  })
});

export const collections = {
	course,
};
