import gql from 'graphql-tag'

export interface SingleRelatedPost {
  slug: string
  name: string
}

export interface SinglePost {
  brief: string
  briefApiData: string
  contentApiData: string
  relatedPosts: SingleRelatedPost[]
}

export interface FetchStoryBySlugResponse {
  allPosts: SinglePost[]
}

const fetchStoryBySlug = gql`
  query fetchStoryBySlug($slug: String!) {
    allPosts(where: { slug: $slug, state_not_in: invisible }) {
      brief
      briefApiData
      contentApiData
      relatedPosts(where: { state: published }) {
        slug
        name
      }
    }
  }
`

export { fetchStoryBySlug }
