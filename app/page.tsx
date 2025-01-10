'use client';

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'


function SearchParamsBlock() {
  const [fileName, setFileName] = useState('')
  const searchParams = useSearchParams()

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

  return <div className="bg-green-100 p-4 rounded-lg">
    <h2 className="font-semibold">Получен файл:</h2>
    <p className="mt-2">{fileName}</p>
  </div>

}


export default function Home() {


  return (
    <main className="min-h-screen p-4">
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">File Sharing PWA</h1>

        <Suspense>
          <SearchParamsBlock/>
        </Suspense>

      </div>
    </main>
  )
}