import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  const headersList = await headers()

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    // Получаем базовый URL из заголовков
    const protocol = headersList.get('x-forwarded-proto') || 'http'
    const host = headersList.get('host') || ''
    const baseURL = `${protocol}://${host}`

    if (!file) {
      return NextResponse.redirect(`${baseURL}/?error=no-file`)
    }

    // Безопасно кодируем имя файла
    const encodedFileName = encodeURIComponent(file.name)
    return NextResponse.redirect(`${baseURL}/?file=${encodedFileName}`)

  } catch (error) {
    console.error('Share target error:', error)
    const protocol = headersList.get('x-forwarded-proto') || 'http'
    const host = headersList.get('host') || ''
    const baseURL = `${protocol}://${host}`

    return NextResponse.redirect(`${baseURL}/?error=unknown`)
  }
}