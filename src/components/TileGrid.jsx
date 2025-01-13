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
import WishCard from "@/components/WishCard";

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
              className="relative flex flex-col gap-2 cursor-pointer group"
            >
                <div className="relative overflow-hidden w-full h-[350px] rounded-lg bg-atomic-tangerine flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <div className="transition-transform duration-300 group-hover:scale-105 group-hover:text-snow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                         stroke="currentColor" className="size-12">
                      <path classnamee-linecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                  </div>

                </div>
                <div>Add a wish</div>
            </Link>
          )}
        </Measure>
        {listItems.map((listItem) => (
          <Measure key={listItem.id}>
            {({ measureRef }) => (
              <WishCard ref={measureRef} wish={{ ...listItem, imageUrl: getRandomImage() }} onDelete={console.log} />
            )}
          </Measure>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
