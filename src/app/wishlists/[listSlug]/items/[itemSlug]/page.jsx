import { prisma } from '@/lib/prisma'
import Image from "next/image";
import coverImage1 from "../../../../../../public/images/image-1.jpg";

export default async function ItemPage({ params }) {
  const { itemSlug } = await params

  const item = await prisma.listItem.findUnique({
    where: { slug: itemSlug },
  })

  return (
    <div className="flex flex-row">
      <Image
        src={coverImage1}
        alt="item's image"
        className="flex-1 h-auto"
      />
      <div className="flex-1">
        {item.name}
      </div>
    </div>
  )
}
