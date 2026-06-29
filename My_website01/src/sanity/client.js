// src/sanity/client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'yne0by0k', // 👈 REPLACE THIS IN STEP 3 BELOW
  dataset: 'production',
  useCdn: true, // true for fast response times using their global edge server networks
  apiVersion: '2026-06-29', // Sets the current version control anchor date
});
