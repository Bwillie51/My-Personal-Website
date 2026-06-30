// src/sanity/client.js
{/*}
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'yne0by0k', // 👈 REPLACE THIS IN STEP 3 BELOW
  dataset: 'production',
  useCdn: true, // true for fast response times using their global edge server networks
  apiVersion: '2026-06-29', // Sets the current version control anchor date
});
*/}

// src/sanity/client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  // Dynamically reads your keys directly from Vercel's global secure cloud variable layer 🚀
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your_fallback_id_here', 
  dataset: 'production',
  useCdn: false, // Turn to false in production to force raw token bypassing updates instantly
  token: import.meta.env.VITE_SANITY_TOKEN || '', // Secure read token hook connection
  apiVersion: '2026-06-29', 
});
