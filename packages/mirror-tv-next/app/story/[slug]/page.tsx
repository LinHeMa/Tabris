import ArticleRelatedPosts from '~/components/story/article-related-posts'
import ArticleSocialList from '~/components/story/article-social-list'

import styles from './_styles/story.module.scss'
import { fetchStoryBySlug } from '~/app/_actions/story/fetch-story-post-by-slug'
import ApiDataRenderer from '~/components/story/api-data-renderer/renderer'

type StoryPageTypes = {
  params: { slug: string }
}
const StoryPage = async (props: StoryPageTypes) => {
  const { params } = props
  const fetchStoryBySlugResponse = await fetchStoryBySlug(params.slug)

  const [storyData] = fetchStoryBySlugResponse
  const { relatedPosts, contentApiData } = storyData
  return (
    <div>
      StoryPage slug is : {params.slug}
      <ApiDataRenderer contentData={contentApiData} />
      <section className={styles.socialAndRelatedWrapper}>
        <ArticleSocialList />
        <ArticleRelatedPosts relatedPosts={relatedPosts} />
      </section>
    </div>
  )
}

export default StoryPage
