import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function WishlistsPage() {
  const session = await auth();

  const wishlists = await prisma.list.findMany({
    where: { userId: session.user.id },
    include: { listItems: true, addresses: true },
  });

  return (
    <div>
      <h1>Your Wishlists</h1>
      {wishlists.length === 0 ? (
        <p>You have no wishlists.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {wishlists.map((wishlist) => (
            <li key={wishlist.id}>
              <Link href={`/wishlists/${wishlist.slug}`} className="p-2 rounded-xl border border-mauve">
                <h2>{wishlist.name}</h2>
                <p>{wishlist.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
