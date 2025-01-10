'use client'

import { useEffect, useState } from 'react'
import FileInfo from '../components/FileInfo'

interface ErrorMessages {
  [key: string]: string;
}

const errorMessages: ErrorMessages = {
  'no-file': 'Файл не был получен',
  'unknown': 'Произошла неизвестная ошибка',
}

export default function Home() {
  const [sharedFile, setSharedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const fileName = params.get('file')
      const errorCode = params.get('error')

      if (errorCode) {
        setError(errorMessages[errorCode] || 'Произошла ошибка')
      } else if (fileName) {
        try {
          const decodedFileName = decodeURIComponent(fileName)
          setSharedFile(decodedFileName)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          setError('Ошибка при обработке имени файла')
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError('Ошибка при обработке параметров URL')
    }
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">File Share PWA</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      {sharedFile ? (
        <FileInfo fileName={sharedFile} />
      ) : (
        !error && <p>Ожидание файла для обработки...</p>
      )}
    </main>
  )
}