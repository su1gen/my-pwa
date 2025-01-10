import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      // Создаем URL с использованием URL constructor
      const errorUrl = new URL('/', request.url)
      errorUrl.searchParams.set('error', 'no-file')
      return NextResponse.redirect(errorUrl.toString())
    }

    // Создаем корректный URL для редиректа

    return NextResponse.redirect(`/file?name=${file.name}`)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // В случае ошибки также используем URL constructor
    const errorUrl = new URL('/', request.url)
    errorUrl.searchParams.set('error', 'unknown')
    return NextResponse.redirect(errorUrl.toString())
  }
}