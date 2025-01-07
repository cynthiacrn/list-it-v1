import { auth } from "@/lib/auth"
import { signOut } from "@/actions/signOut"

export default async function Home() {
  const session = await auth()

  return (
    <>
      {session && <h1>Welcome {session.user.email}</h1>}
      {session && (
        <form action={signOut}>
          <button type="submit">Sign out</button>
        </form>
      )}
      <h1>Home</h1>
    </>
  )
}
