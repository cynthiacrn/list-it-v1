import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export default async function WishlistPage({ params }) {
  const session = await auth();
  const { slug } = await params

  const wishlist = await prisma.list.findUnique({
    where: { slug, userId: session.user.id },
    include: { listItems: true, addresses: true },
  });

  if (!wishlist) {
    redirect('/wishlists')
  }

  return (
    <div>
      <h1>My Wishlist:</h1>
      <h2>{wishlist.name}</h2>
      <p>{wishlist.description}</p>
      <p>{wishlist.visibility}</p>
    </div>
  );
}
