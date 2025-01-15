import { auth } from '@/lib/auth'
import { signOut } from '@/actions/auth/signOut'

export default async function Home() {
  const session = await auth()

  return (
    <>
      {session && (
        <form action={signOut}>
          <button type="submit">Sign out</button>
        </form>
      )}
      <h1>Home</h1>
    </>
  )
}
