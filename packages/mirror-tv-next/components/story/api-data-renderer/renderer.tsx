import BlockquoteBlock from './block-renderer/blockquote-block'
import HeadersBlock from './block-renderer/headers-block'
import QuoteByBlock from './block-renderer/quote-by'
import OrderListBlock from './block-renderer/order-list-block'
import {
  type ApiDataBlockBase,
  ApiDataBlockType,
  OrderListData,
} from './block-renderer/type'
import UnOrderListBlock from './block-renderer/unorder-list-block'
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
            return <UnstyledBlock data={parsedApiData.content as string[]} />

          case ApiDataBlockType.HeaderOne:
            return (
              <HeadersBlock
                //@ts-expect-error: in the middle of rebasing
                data={parsedApiData.content}
                blockType={parsedApiData.type}
                key={parsedApiData.id}
              />
            )
          case ApiDataBlockType.HeaderTwo:
            return (
              <HeadersBlock
                //@ts-expect-error: in the middle of rebasing
                data={parsedApiData.content}
                blockType={parsedApiData.type}
                key={parsedApiData.id}
              />
            )
          case ApiDataBlockType.Blockquote:
            return (
              <BlockquoteBlock
                key={parsedApiData.id}
                //@ts-expect-error: in the middle of rebasing
                data={parsedApiData.content}
              />
            )
          case ApiDataBlockType.QuoteBy:
            return (
              <QuoteByBlock
                key={parsedApiData.id}
                //@ts-expect-error: in the middle of rebasing
                data={parsedApiData.content}
              />
            )
          case ApiDataBlockType.OrderList:
            return (
              <OrderListBlock data={parsedApiData.content as OrderListData} />
            )
          case ApiDataBlockType.UnOrderList:
            return (
              <UnOrderListBlock data={parsedApiData.content as OrderListData} />
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
