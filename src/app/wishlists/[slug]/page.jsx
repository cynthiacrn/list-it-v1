import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import ListHeader from "@/components/ListHeader";
import coverImage2 from "../../../../public/images/image-2.jpg";
import Image from "next/image";

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
    <div className="flex flex-col gap-12 pt-12">
      <ListHeader user={session.user} wishlist={wishlist} />
      {wishlist.description && (
        <div className="px-24">{wishlist.description}</div>
      )}
      <div className="grid grid-cols-4 gap-4 w-fit">
        {wishlist.listItems.map((item) => (
          <div className="max-w-[280px]">
            <Image
              src={coverImage2}
              alt="List's cover"
              width={280}
              className="object-cover rounded-lg"
            />
            <div>
              {item.name && (<div>{item.name}</div>)}
              {item.price && (<div className="text-sm">{item.price}€</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
