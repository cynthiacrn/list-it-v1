import { auth, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth()
  console.log({ session })

  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
