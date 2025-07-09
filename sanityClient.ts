// src/lib/sanityClient.js
import { createClient } from '@sanity/client'

const PROJECTID = import.meta.env.PROJECTID;

export const sanity = createClient({
  projectId: PROJECTID,            // tu ID
  dataset: 'production',            // o el que estés usando
  apiVersion: '2023-01-01',         // fecha de API estable
  useCdn: true,                     // true para producción
})