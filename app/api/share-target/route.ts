import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.redirect('/?error=no-file')
    }

    // Перенаправляем на главную страницу с именем файла
    return NextResponse.redirect(`/?file=${encodeURIComponent(file.name)}`)
  } catch (error) {
    return NextResponse.redirect(`/?error=${(error as Error).message}`)
  }
}