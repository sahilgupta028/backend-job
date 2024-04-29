import { z } from "zod";

export const courseSchema = z.object({
    courseName: z.string(),
    courseDescription: z.string(),
    coursePrice: z.number(),
    courseStartDate: z.date(),
    courseEndDate: z.date(),
    courseSyllabus: z.string(),
    courseAbout: z.string(),
    courseImage: z.string(),
    courseOffering: z.array(z.string()),
    courseMentors: z.array(z.string()),
    courseCategories: z.array(z.string())
});
