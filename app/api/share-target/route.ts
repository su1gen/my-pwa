import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function POST(request: NextRequest) {

  try {
    const { origin } = request.nextUrl
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return redirect('/?error=true')
    }

    return NextResponse.redirect(`${origin}/files`)

  } catch(error) {
    console.error('Error processing shared file:', error)
    return NextResponse.redirect('/?error=true')
  }
}