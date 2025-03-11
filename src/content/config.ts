import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        url: z.string(),
        detail: z.string(),
    })
})

export const collections = {
    post: projectsCollection
}