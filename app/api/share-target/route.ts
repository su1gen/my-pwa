import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    return NextResponse.redirect(`https://my-pwa-phi.vercel.app//file?name=${file.name}`)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // В случае ошибки также используем URL constructor
    const errorUrl = new URL('/', request.url)
    errorUrl.searchParams.set('error', 'unknown')
    return NextResponse.redirect(errorUrl.toString())
  }
}