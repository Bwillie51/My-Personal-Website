import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { client } from './sanity/client'; 

import Header from './components/Header';
import Home from './components/wizard/Home';
import Profile from './components/wizard/Profile';
import Contact from './components/wizard/Contact';

export default function App() {
  const [identity, setIdentity] = useState({ fullName: '', avatarUrl: '', resumeUrl: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches profile settings and home video overview documents directly as objects
    const query = `{
      "settings": *[_type == "settings"][0] {
        fullName,
        title,
        "avatarUrl": avatar.asset->url,
        "resumeUrl": resumePdf.asset->url
      },
      "videoDoc": *[_type == "homeVideoDoc"][0] {
        "videoUrl": videoFile.asset->url
      }
    }`;

    client.fetch(query)
      .then((data) => {
        if (data) {
          // Access fields directly because the [0] index in the query already unpacked them 🚀
          setIdentity({
            fullName: data.settings?.fullName || 'Brian Willie',
            avatarUrl: data.settings?.avatarUrl || '',
            resumeUrl: data.settings?.resumeUrl || '#',
            videoUrl: data.videoDoc?.videoUrl || ''
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Core identity cluster fetch failure:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0C1B] text-[#94A3B8] flex items-center justify-center text-sm font-medium animate-pulse">
        Initializing Secure Full-Stack Network Stream...
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* Header receives the shared name and portrait image instantly */}
      

      {/* Deep Midnight Canvas Base */}
      <main className="bg-[#0F0C1B] min-h-screen text-[#E2E8F0] antialiased overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Profile receives the identity and the resume URL for downloads */}
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
