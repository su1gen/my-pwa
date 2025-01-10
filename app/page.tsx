'use client'

import { useEffect, useState } from 'react'
import FileInfo from '../components/FileInfo'

export default function Home() {
  const [sharedFile, setSharedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Используем try-catch для безопасного парсинга URL параметров
    try {
      const params = new URLSearchParams(window.location.search)
      const fileName = params.get('file')
      const errorMsg = params.get('error')

      if (errorMsg) {
        setError(errorMsg)
      } else if (fileName) {
        setSharedFile(fileName)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError('Ошибка при обработке параметров URL')
    }
  }, [])

  if (error) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">File Share PWA</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Произошла ошибка: {error}</p>
        </div>
      </main>
    )
  }

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