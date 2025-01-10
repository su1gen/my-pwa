import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const { nextUrl, headers } = req;

  // Проверяем заголовки на наличие данных о файле
  if (headers.has('content-disposition')) {
    const fileName = headers.get('content-disposition')?.split('filename=')[1];
    if (fileName) {
      nextUrl.searchParams.set('fileName', fileName.replace(/"/g, ''));
    }
  }

  return NextResponse.next();
}