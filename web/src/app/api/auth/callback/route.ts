import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  const resgisterResponse = await api.post('/register', {
    code,
  })

  const { token } = resgisterResponse.data

  const redirectURL = new URL('/', req.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 1 // 1 day

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
    },
  })
}
