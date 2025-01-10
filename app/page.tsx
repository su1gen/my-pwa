'use client';

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    // Получаем имя файла из URL
    const fileNameParam = searchParams.get('fileName')
    const error = searchParams.get('error')

    if (fileNameParam) {
      setFileName(decodeURIComponent(fileNameParam))
    }

    if (error) {
      alert('Произошла ошибка при обработке файла')
    }
  }, [searchParams])

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">File Sharing PWA</h1>

        {fileName ? (
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="font-semibold">Получен файл:</h2>
            <p className="mt-2">{fileName}</p>
          </div>
        ) : (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>Поделитесь файлом, чтобы увидеть его здесь</p>
          </div>
        )}
      </div>
    </main>
  )
}