'use server';
import { SignJWT, jwtVerify } from 'jose';
import { SessionInterface } from '@/interfaces/session';
import { cookies } from 'next/headers';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionInterface) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = '',
): Promise<SessionInterface | undefined> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload as SessionInterface;
  } catch (error) {
    console.log('Failed to verify session', error);
  }
}

export async function createSession(loginPayload: SessionInterface) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const { role, email, firstName, sellerId, sellerName } = loginPayload.jwtPayload;

  const session = await encrypt({
    ...loginPayload,
    jwtPayload: { role, email, sellerId, sellerName, firstName },
  });
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
