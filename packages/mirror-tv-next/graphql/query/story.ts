import gql from 'graphql-tag'

export interface SingleRelatedPost {
  slug: string
  name: string
}

export interface SinglePost {
  relatedPosts: SingleRelatedPost[]
}

export type HeroImage = {
  heroImage: {
    id: string
    name: string
    urlOriginal: string
    urlDesktopSized: string
    urlTabletSized: string
    urlMobileSized: string
    urlTinySized: string
  }
  heroCaption: string
}

export interface FetchStoryBySlugResponse {
  allPosts: SinglePost[]
}
export interface FetchHeroImageBySlugResponse {
  allPosts: HeroImage[]
}

const fetchStoryBySlug = gql`
  query fetchStoryBySlug($slug: String!) {
    allPosts(where: { slug: $slug, state_not_in: invisible }) {
      relatedPosts(where: { state: published }) {
        slug
        name
      }
    }
  }
`

const fetchHeroImageBySlug = gql`
  query fetchStoryBySlug($slug: String!) {
    allPosts(where: { slug: $slug, state_not_in: invisible }) {
      heroImage {
        id
        name
        urlOriginal
        urlDesktopSized
        urlTabletSized
        urlMobileSized
        urlTinySized
      }
      heroCaption
    }
  }
`

export { fetchStoryBySlug, fetchHeroImageBySlug }
