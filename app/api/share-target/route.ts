import { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return redirect('/?error=true')
    }

    // Перенаправляем на главную страницу с информацией о файле
    return redirect(`/?fileName=${encodeURIComponent(file.name)}`)
  } catch (error) {
    console.error('Error processing shared file:', error)
    return redirect('/?error=true')
  }
}