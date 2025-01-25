import {prisma} from '@/lib/prisma'
import Image from 'next/image'
import coverImage1 from '../../../../../../public/images/image-1.jpg'
import Link from 'next/link'
import {deleteListItem} from "@/actions/listItems/deleteListItem";
import DeleteListItemButton from "@/components/DeleteListItemButton";
import {redirect} from "next/navigation";

function getDomain(url) {
  try {
    const urlObj = new URL(url)
    const hostnameParts = urlObj.hostname.split('.')
    return hostnameParts.slice(-2).join('.');
  } catch (error) {
    console.error('Invalid URL:', error);
    return null
  }
}

export default async function ItemPage({ params }) {
  const { listSlug } = await params
  const { itemSlug } = await params
  
  const item = await prisma.listItem.findUnique({
    where: { slug: itemSlug },
    include: { list: true }
  })

  if (!item) {
    redirect(`/wishlists/${listSlug}`)
  }

  const domain = getDomain(item.url)

  return (
    <div className="flex flex-row gap-12 py-12 px-24">
      <div className="h-[70vh] w-full flex-1 relative">
        <Image
          src={coverImage1}
          alt="item's image"
          className="object-cover"
          fill
          priority
        />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-row justify-between w-full">
          <Link className="border border-black rounded-full h-[42px] p-2 w-[42px] hover:border-atomic-tangerine hover:text-atomic-tangerine transition duration-300 ease-in-out" href={`/wishlists/${listSlug}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </Link>
          <div className="flex flex-row gap-2">
            <Link href={`/wishlists/${listSlug}/items/${item.slug}/edit`} className=" h-[42px] flex items-center justify-center border border-black rounded-full p-2 w-[42px] hover:border-atomic-tangerine hover:text-atomic-tangerine transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
            </Link>
            <DeleteListItemButton itemSlug={itemSlug} listSlug={item.list.slug} />
          </div>
        </div>
        <div>
          {item.name && (<h1 className="text-2xl font-semibold">{item.name}</h1>)}
          {domain && (<div className="text-sm">{domain}</div>)}
        </div>
        {item.description && (<p className="text-base">{item.description}</p>)}
        <div className="flex flex-row justify-between items-center w-full">
          {item.price && (
            <div>
              <div className="text-xl">{item.price}€</div>
              <div className="text-sm">Price for information purposes</div>
            </div>
          )}
          {item.url && (
            <Link className="text-sm flex flex-row gap-2 button button-outlined" href={item.url} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              Open linked website
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
