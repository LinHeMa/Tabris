import BlockquoteBlock from './block-renderer/blockquote-block'
import HeadersBlock from './block-renderer/headers-block'
import OrderListBlock from './block-renderer/order-list-block'
import { type ApiData, ApiDataBlockType } from './block-renderer/type'
import UnOrderListBlock from './block-renderer/unorder-list-block'
import UnstyledBlock from './block-renderer/unstyled-block'
import InfoBoxBlock from './block-renderer/info-box-block'

type ApiDataRendererPropsType = {
  contentData: string
}

const ApiDataRenderer = ({ contentData }: ApiDataRendererPropsType) => {
  const parsedContentData: ApiData = JSON.parse(contentData as string)
  console.log({ parsedContentData })
  return (
    <article>
      {parsedContentData.map((apiDataBlock) => {
        switch (apiDataBlock.type) {
          case ApiDataBlockType.Unstyled:
            return <UnstyledBlock key={apiDataBlock.id} data={apiDataBlock} />

          case ApiDataBlockType.HeaderOne:
            return (
              <HeadersBlock
                data={apiDataBlock}
                blockType={apiDataBlock.type}
                key={apiDataBlock.id}
              />
            )
          case ApiDataBlockType.HeaderTwo:
            return (
              <HeadersBlock
                data={apiDataBlock}
                blockType={apiDataBlock.type}
                key={apiDataBlock.id}
              />
            )
          case ApiDataBlockType.Blockquote:
            return <BlockquoteBlock key={apiDataBlock.id} data={apiDataBlock} />
          case ApiDataBlockType.OrderList:
            return <OrderListBlock key={apiDataBlock.id} data={apiDataBlock} />
          case ApiDataBlockType.UnOrderList:
            return (
              <UnOrderListBlock key={apiDataBlock.id} data={apiDataBlock} />
            )
          case ApiDataBlockType.InfoBox:
            return <InfoBoxBlock key={apiDataBlock.id} data={apiDataBlock} />
          default: {
            const exhaustiveCheck = apiDataBlock
            console.error('unhandled apiData type', exhaustiveCheck)
            return null
          }
        }
      })}
    </article>
  )
}

export default ApiDataRenderer
