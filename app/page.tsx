"use client"

import { useState, useEffect } from 'react';

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    // Проверяем, был ли передан файл через URL.
    const params = new URLSearchParams(window.location.search);
    const file = params.get('fileName');
    if (file) {
      setFileName(file);
    }
  }, []);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to My PWA App</h1>
      {fileName ? (
        <p>Shared file: <strong>{fileName}</strong></p>
      ) : (
        <p>No file shared yet. Share a file to see its name!</p>
      )}
    </main>
  );
}