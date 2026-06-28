import { z } from "zod"

export const createUrlSchema = z.object({
    longUrl: z.string()
            .url("Please provide a valid URL"),
    customAlias: z.string()
                .trim()
                .toLowerCase()
                .regex(/^[a-zA-Z0-9_-]{3,30}$/,"Alias can only contain letters, numbers, '- ', '_'")
                .optional(),
})