'use client'

import { useEffect, useState } from 'react'
import FileInfo from '@/components/FileInfo';


export default function Home() {
  const [sharedFile, setSharedFile] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fileName = params.get('file')
    if (fileName) {
      setSharedFile(fileName)
    }
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">File Share PWA</h1>
      {sharedFile ? (
        <FileInfo fileName={sharedFile} />
      ) : (
        <p>Ожидание файла для обработки...</p>
      )}
    </main>
  )
}