'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import useWindowDimensions from '~/hooks/use-window-dimensions'
import { ApiDataBlockType, type ApiDataBlockBase } from './type'
import Image from 'next/image'

type SlideshowContentPart = {
  url: string
  width: number
  height: number
}
type ApiDataSlideshowContent = {
  url: string
  original: SlideshowContentPart
  desktop: SlideshowContentPart
  tablet: SlideshowContentPart
  mobile: SlideshowContentPart
  tiny: SlideshowContentPart
  id: string
  name: string
}
export interface ApiDataSlideshow extends ApiDataBlockBase {
  type: ApiDataBlockType.Slideshow
  content: ApiDataSlideshowContent[]
}

export default function SlideShowBlock({ data }: { data: ApiDataSlideshow }) {
  const { width } = useWindowDimensions()
  if (!width) return null
  const decideDevice = (
    width?: number
  ): 'original' | 'desktop' | 'tablet' | 'mobile' | 'tiny' => {
    if (!width) return 'original'
    const devices = [
      { max: 768, device: 'mobile' as const },
      { max: 1024, device: 'tablet' as const },
      { max: 1280, device: 'desktop' as const },
    ]
    return devices.find((device) => width < device.max)?.device || 'original'
  }
  const slideImages: SlideshowContentPart[] = data.content.map(
    (item) => item[decideDevice(width)]
  )
  console.log('slideImages', decideDevice(width), slideImages)
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        style={{ padding: '0 40px', maxWidth: '100%' }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          type: 'fraction',
        }}
        navigation
        loop
      >
        {slideImages.map((img) => (
          <SwiperSlide
            key={img.url}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
              }}
            >
              <Image
                style={{
                  objectFit: 'contain',
                }}
                src={img.url}
                alt="slides"
                fill
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
