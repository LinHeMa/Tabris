import { type ApiDataBlockquote } from './blockquote-block'
import { type ApiHeadersBlock } from './headers-block'
import { type ApiDataInfoBox } from './info-box-block'
import { ApiDataOrderList } from './order-list-block'
import { ApiDataQuoteBy } from './quote-by'
import { type ApiDataUnOrderListBlock } from './unorder-list-block'
import { type ApiDataUnstyled } from './unstyled-block'

enum ApiDataBlockType {
  Unstyled = 'unstyled',
  HeaderOne = 'header-one',
  HeaderTwo = 'header-two',
  Blockquote = 'blockquote',
  QuoteBy = 'quoteby',
  HeaderThree = 'header-three',
  UnOrderList = 'unordered-list-item',
  OrderList = 'ordered-list-item',
  CodeBlock = 'code-block',
  Divider = 'divider',
  Image = 'image',
  Annotation = 'annotation',
  Video = 'video',
  VideoV2 = 'video-v2',
  Slideshow = 'slideshow',
  SlideshowV2 = 'slideshow-v2',
  InfoBox = 'infobox',
  Audio = 'audio',
  AudioV2 = 'audio-v2',
  Table = 'table',
  ColorBox = 'colorbox',
  BackgroundImage = 'backgroundimage',
  BackgroundVideo = 'backgroundvideo',
  RelatedPost = 'relatedpost',
  SideIndex = 'sideindex',
  Youtube = 'youtube',
  EmbedCode = 'embeddedcode',
}
type OrderListData = string[][]

// TODO: 使用interface 因為之後可以利用extends
interface ApiDataBlockBase {
  id: string
  type: ApiDataBlockType
  content: unknown[] | string
  alignment: 'center' | 'left' | 'right'
  textAlign?: 'center' | 'left'
}

export type ApiDataBlock =
  | ApiDataUnOrderListBlock
  | ApiDataInfoBox
  | ApiDataUnstyled
  | ApiHeadersBlock
  | ApiDataBlockquote
  | ApiDataQuoteBy
  | ApiDataOrderList

export type ApiData = ApiDataBlock[]

export { type ApiDataBlockBase, ApiDataBlockType, type OrderListData }
