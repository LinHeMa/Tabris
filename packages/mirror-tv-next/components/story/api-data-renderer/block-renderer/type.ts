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
  Video = 'video',
  VideoV2 = 'video-v2',
  Slideshow = 'slideshow',
  SlideshowV2 = 'slideshow-v2',
  Infobox = 'infobox',
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
type ApiDataBlockBase = {
  id: string
  type: ApiDataBlockType
  styles: Record<string, string>
  content: string[] | OrderListData
  alignment: 'center' | 'left' | 'right'
}

export { type ApiDataBlockBase, ApiDataBlockType, type OrderListData }
