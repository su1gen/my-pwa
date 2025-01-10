"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    // Проверяем наличие Shared Data от системного меню
    if ('navigator' in window && 'canShare' in navigator) {
      const params = new URLSearchParams(window.location.search);
      const sharedFileName = params.get('fileName');
      if (sharedFileName) {
        setFileName(sharedFileName);
      }
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My PWA App</h1>
      <p>
        {fileName ? (
          <>
            <strong>Загруженный файл:</strong> {fileName}
          </>
        ) : (
          'Выберите или поделитесь файлом для отображения его имени.'
        )}
      </p>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}