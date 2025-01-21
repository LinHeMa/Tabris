import { ApiDataBlockType, type ApiDataBlockBase } from './type'

export type Quote = {
  quoteBy: string
  quote: string
}
export interface ApiDataQuoteBy extends ApiDataBlockBase {
  type: ApiDataBlockType.QuoteBy
  content: Quote[]
  alignment: 'center'
}

const QuoteByBlock = ({ data }: { data: ApiDataQuoteBy }) => {
  const getFirstElement = <T,>(data: T[]) => data[0]
  const { quote, quoteBy } = getFirstElement(data.content)
  console.log({ data })
  return (
    <div>
      <p>{quote}</p>
      <p>{quoteBy}</p>
    </div>
  )
}

export default QuoteByBlock
