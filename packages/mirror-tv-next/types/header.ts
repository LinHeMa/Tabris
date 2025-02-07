type Category = {
  name: string
  slug: string
  sortOrder: number | null
  id: string
}

type BannerImage = {
  urlMobileSized: string
  urlTabletSized: string
  urlOriginal: string
}

type Show = {
  id: string
  slug: string
  name: string
  sortOrder: number | null
  bannerImg: BannerImage | null
}

type Sponsor = {
  id: string
  title: string | null
  url: string | null
  logo: {
    urlMobileSized: string
  }
  mobile: {
    urlMobileSized: string
  } | null
  tablet: {
    urlMobileSized: string
  } | null
  topic: {
    id: string
    slug: string
    name: string
  } | null
}

export type HeaderData = {
  allCategories: Category[]
  allShows: Show[]
  allSponsors: Sponsor[]
}
