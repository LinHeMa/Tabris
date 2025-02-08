'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './_styles/slide-show-block.module.scss'
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
  const swiperModules = [Navigation, Pagination]
  const swiperClass = styles.swiper
  const swiperSpaceBetween = 40
  const swiperSlidesPerView = 1
  const paginationConfig = {
    type: 'fraction' as const,
  }
  return (
    <div>
      <Swiper
        modules={swiperModules}
        className={swiperClass}
        spaceBetween={swiperSpaceBetween}
        slidesPerView={swiperSlidesPerView}
        pagination={paginationConfig}
        navigation
        loop
      >
        {slideImages.map((img) => (
          <SwiperSlide key={img.url} className={styles.swiperSlide}>
            <div className={styles.slideShowImageContainer}>
              <Image
                className={styles.slideShowImage}
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
