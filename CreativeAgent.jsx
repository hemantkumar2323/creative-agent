import React, { useState } from 'react';

export default function CreativeAgent() {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [emotion, setEmotion] = useState('');
  const [scripts, setScripts] = useState([]);

  const generateScripts = () => {
    const adScripts = [
      {
        hook: "Tired of messy car rides?",
        body: "Meet the Portable Car Vacuum — clean your seats, cup holders, and trunk in seconds.",
        cta: "Grab yours now before we sell out again!"
      },
      {
        hook: "This beauty hack is going viral",
        body: "The Satin Heatless Curl Kit gives perfect curls without damage. Sleep in it, wake up flawless.",
        cta: "Order your kit today and glow up overnight."
      },
      {
        hook: "Watch this mom transform her morning routine",
        body: "From chaos to calm with this 2-minute product trick — see the difference!",
        cta: "Tap to see the morning magic tool."
      }
    ];
    setScripts(adScripts);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🎬 CreativeAgent — AI Ad Script Generator</h1>

      <input
        type="text"
        placeholder="Enter product name..."
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Enter audience type (e.g. GenZ moms)..."
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Enter desired emotion (e.g. confidence)..."
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        style={{ padding: '0.5rem' }}
      />
      <button onClick={generateScripts} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Generate Ad Scripts
      </button>

      {scripts.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          {scripts.map((script, idx) => (
            <div key={idx} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
              <p><strong>Hook:</strong> {script.hook}</p>
              <p><strong>Body:</strong> {script.body}</p>
              <p><strong>CTA:</strong> {script.cta}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
