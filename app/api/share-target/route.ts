import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function POST(request: NextRequest) {

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return redirect('/?error=true')
    }

    return NextResponse.redirect(`https://my-pwa-phi.vercel.app/files`)

  } catch(error) {
    console.error('Error processing shared file:', error)
    return NextResponse.redirect('/?error=true')
  }
}