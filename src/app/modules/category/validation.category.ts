import { z } from 'zod';

const createCategoryZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    image: z.string().optional(),
    status: z.string().optional(),
  }),
});
const updateCategoryZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const CategoryValidation = {
  createCategoryZodSchema,
  updateCategoryZodSchema,
};
