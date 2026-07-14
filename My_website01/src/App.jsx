
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
    // Moved the index [0] directly onto the filter rules for precise extraction 🚀
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
          // Unpacks the zero-index element of the returned settings and video arrays safely 🚀
          const activeSettings = data.settings?.[0] || {};
          const activeVideo = data.videoDoc?.[0] || {};

          setIdentity({
            fullName: activeSettings.fullName || 'Brian Willie',
            avatarUrl: activeSettings.avatarUrl || '',
            resumeUrl: activeSettings.resumeUrl || '#',
            videoUrl: activeVideo.videoUrl || ''
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
      <Header identity={identity} />

      {/* Deep Midnight Canvas Base */}
      <main className="bg-[#0F0C1B] min-h-screen text-[#E2E8F0] antialiased overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Profile receives the identity and the resume URL for downloads */}
          <Route path="/profile" element={<Profile identity={identity} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

