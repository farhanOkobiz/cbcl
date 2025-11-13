import { z } from "zod";

export const getFormSchema = (isUpdate = false) =>
  z.object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(100, { message: "Name is too long" }),

    image: z
      .array(
        z.instanceof(File).refine((file) => file.size < 8 * 1024 * 1024, {
          message: "Image size must be less than 8 MB",
        })
      )
      .max(1, { message: "Only 1 image is allowed" })
      .optional(),

    vectorImage: z
      .array(
        z.instanceof(File).refine((file) => file.size < 8 * 1024 * 1024, {
          message: "Vector file must be less than 8 MB",
        })
      )
      .max(1, { message: "Only 1 vector file is allowed" })
      .optional(),
  });
