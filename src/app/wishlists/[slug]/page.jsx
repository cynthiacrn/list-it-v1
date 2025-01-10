import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import ListHeader from "@/components/ListHeader";
import coverImage1 from "../../../../public/images/image-1.jpg"
import coverImage2 from "../../../../public/images/image-2.jpg"
import coverImage3 from "../../../../public/images/image-3.jpg"
import coverImage4 from "../../../../public/images/image-4.jpg"
import coverImage5 from "../../../../public/images/image-5.jpg"
import coverImage6 from "../../../../public/images/image-6.jpg"
import Image from "next/image";
import Link from "next/link";

const coverImages = [coverImage1, coverImage2, coverImage3, coverImage4, coverImage5, coverImage6]

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

  function getRandomImage() {
    return coverImages[Math.floor(Math.random() * coverImages.length)];
  }

  return (
    <div className="flex flex-col gap-12 pt-12">
      <ListHeader user={session.user} wishlist={wishlist} />
      {wishlist.description && (
        <div className="px-24">{wishlist.description}</div>
      )}
      <div className="flex flex-col gap-4 px-24">
        <div className="flex flex-row gap-1 items-center">
          {wishlist.visibility === "PUBLIC" ? (
            <div className="flex flex-row gap-1 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="size-5">
                <path classnamee-linecap="round" strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
              </svg>
              <p className="font-medium">Public list</p>
            </div>
          ) : (
            <div className="flex flex-row gap-1 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="size-5">
                <path classnamee-linecap="round" strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
              </svg>
              <p className="font-medium">Private list</p>
            </div>
          )}
          <span className="font-medium">-</span>
          <div className="font-medium">{wishlist.listItems.length} {wishlist.listItems.length > 1 ? ('wishes') : ('wish')}</div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-fit px-6">
          <Link
            href={`/wishlists/${wishlist.name}/items/new`}
            className="flex flex-col gap-2"
          >
            <div className="w-[280px] h-[350px] rounded-lg bg-atomic-tangerine flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                   stroke="currentColor" className="size-12">
                <path classnamee-linecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </div>
            <p>Add a wish</p>
          </Link>
          {wishlist.listItems.map((item) => (
            <div className="max-w-[280px] flex flex-col gap-2" key={item.id}>
              <Image
                src={getRandomImage()}
                priority={true}
                alt="List's cover"
                width={280}
                className="object-cover rounded-lg max-h-[390px]"
              />
              <div className="flex flex-col gap-1">
                {item.name && (<div>{item.name}</div>)}
                {item.price && (<div className="text-sm font-medium">{item.price}€</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
