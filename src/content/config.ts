import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: 'data',
    schema: ({image})=> z.object({
        name: z.string(),
        description: z.string(),
        image: image(),
        url: z.string(),
        detail: z.string(),
        tags: z.array(z.string()),
        date: z.date().optional(),
    })
})

export const collections = {
    post: projectsCollection
}