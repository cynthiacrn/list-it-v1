import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import Link from "next/link";
import Image from 'next/image'
import coverImage2 from '../../../public/images/image-2.jpg'
import ListsHeader from "@/components/layouts/ListsHeader";

export default async function WishlistsPage() {
  const session = await auth();

  const lists = await prisma.list.findMany({
    where: { userId: session.user.id },
    include: { listItems: true },
  })

  const [listItemCount, publicListCount, privateListCount] = await Promise.all([
    prisma.listItem.count({
      where: {
        list: {
          userId: session.user.id,
        },
      },
    }),

    prisma.list.count({
      where: {
        userId: session.user.id,
        visibility: "PUBLIC",
      },
    }),

    prisma.list.count({
      where: {
        userId: session.user.id,
        visibility: "PRIVATE",
      },
    }),
  ]);

  return (
    <div className="flex flex-col gap-12 pt-12">
      <ListsHeader
        user={session.user}
        listItemCount={listItemCount}
        publicListCount={publicListCount}
        privateListCount={privateListCount}
      />

      {lists.length > 0 &&
        <div className="w-full flex flex-col items-center">
          <ul className="grid grid-cols-4 gap-4 w-fit">
            {lists.map((list) => (
              <li key={list.id}>
                <Link href={`/wishlists/${list.slug}`} className="flex flex-col gap-2">
                  <Image
                    src={coverImage2}
                    alt="List's cover"
                    width={240}
                    className="object-cover h-[150px] rounded-lg"
                  />

                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl">{list.name}</h2>
                    <div className="flex flex-row gap-2 text-xs">
                      <p>{list.listItems.length} {list.listItems.length > 1 ? ('wishes') : ('wish')}</p>
                      <span>-</span>
                      <p>{list.visibility === 'PRIVATE' ? ('Private') : ('Public')} list</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}
