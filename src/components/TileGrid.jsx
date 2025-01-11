"use client"

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Measure from 'react-measure'
import coverImage1 from '../../public/images/image-1.jpg'
import coverImage2 from '../../public/images/image-2.jpg'
import coverImage3 from '../../public/images/image-3.jpg'
import coverImage4 from '../../public/images/image-4.jpg'
import coverImage5 from '../../public/images/image-5.jpg'
import coverImage6 from '../../public/images/image-6.jpg'
import Link from 'next/link'

const coverImages = [coverImage1, coverImage2, coverImage3, coverImage4, coverImage5, coverImage6]

export default function ListItemsTileGrid({ wishlistSlug, listItems }) {
  function getRandomImage() {
    return coverImages[Math.floor(Math.random() * coverImages.length)]
  }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}>
      <Masonry gutter={32} columnsCount={3}>
        <Measure key="add-list-item">
          {({ measureRef }) => (
            <Link
              ref={measureRef}
              href={`/wishlists/${wishlistSlug}/items/new`}
              className="flex flex-col gap-2"
            >
              <div className="w-full h-[350px] rounded-lg bg-atomic-tangerine flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                     stroke="currentColor" className="size-12">
                  <path classnamee-linecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                </svg>
              </div>
              <p className="mt-2">Add a wish</p>
            </Link>
          )}
        </Measure>
        {listItems.map((listItem) => (
          <Measure key={listItem.id}>
            {({ measureRef }) => (
              <div ref={measureRef} className="flex flex-col gap-2">
                <Image
                  src={getRandomImage()}
                  priority={true}
                  alt="List's cover"
                  width={280}
                  className="object-cover rounded-lg w-full max-h-[390px]"
                />
                <div className="flex flex-col gap-1">
                  {listItem.name && (<div>{listItem.name}</div>)}
                  {listItem.price && (<div className="text-sm font-medium">{listItem.price}€</div>)}
                </div>
              </div>
            )}
          </Measure>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
