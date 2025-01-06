import BlockquoteBlock from './block-renderer/blockquote-block'
import HeadersBlock from './block-renderer/headers-block'
import { type ApiDataBlockBase, ApiDataBlockType } from './block-renderer/type'
import UnstyledBlock from './block-renderer/unstyled-block'

type ApiDataRendererPropsType = {
  contentData: string
}

const ApiDataRenderer = ({ contentData }: ApiDataRendererPropsType) => {
  const parsedContentData: ApiDataBlockBase[] = JSON.parse(contentData)
  console.log({ parsedContentData })
  return (
    <article>
      {parsedContentData.map((parsedApiData) => {
        switch (parsedApiData.type) {
          case ApiDataBlockType.Unstyled:
            return (
              <UnstyledBlock
                data={parsedApiData.content}
                key={parsedApiData.id}
              />
            )
          case ApiDataBlockType.HeaderOne:
            return (
              <HeadersBlock
                data={parsedApiData.content}
                blockType={parsedApiData.type}
                key={parsedApiData.id}
              />
            )
          case ApiDataBlockType.HeaderTwo:
            return (
              <HeadersBlock
                data={parsedApiData.content}
                blockType={parsedApiData.type}
                key={parsedApiData.id}
              />
            )
          case ApiDataBlockType.Blockquote:
            return (
              <BlockquoteBlock
                key={parsedApiData.id}
                data={parsedApiData.content}
              />
            )

          default: {
            const exhaustiveCheck = parsedApiData
            console.error('unhandled apiData type', exhaustiveCheck)
            return null
          }
        }
      })}
    </article>
  )
}

export default ApiDataRenderer
