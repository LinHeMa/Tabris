import type { PostImage } from './image-handler'
import { formateHeroImage, formatePostImage } from './image-handler'

import {
  extractYoutubeId,
  handleApiData,
  handleMetaDesc,
  handleResponse,
} from './common'
import { formateDateAtTaipei } from './date-handler'
import type { FormattedPostCard } from './post-handler'
import { formatArticleCard } from './post-handler'

export {
  extractYoutubeId,
  formatArticleCard,
  formateDateAtTaipei,
  formateHeroImage,
  formatePostImage,
  handleResponse,
  handleApiData,
  handleMetaDesc,
}
export type { FormattedPostCard, PostImage }
