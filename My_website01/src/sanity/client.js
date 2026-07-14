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
{/*}
import { createClient } from '@sanity/client';

export const client = createClient({
  // Dynamically reads your keys directly from Vercel's global secure cloud variable layer 🚀
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your_fallback_id_here', 
  dataset: 'production',
  useCdn: false, // Turn to false in production to force raw token bypassing updates instantly
  token: import.meta.env.VITE_SANITY_TOKEN || '', // Secure read token hook connection
  apiVersion: '2026-06-29', 
});
*/}
// src/sanity/client.js
{/*}
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your_actual_project_id', 
  dataset: 'production',
  useCdn: false, 
  token: import.meta.env.VITE_SANITY_TOKEN || '', 
  apiVersion: '2026-06-29', 
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
*/}

// src/sanity/client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'yne0by0k', 
  dataset: 'production',
  useCdn: false, // Set to false to bypass CDN cache layers and pull live token updates instantly
  token: import.meta.env.VITE_SANITY_TOKEN || '', 
  apiVersion: '2026-06-29', 
});

