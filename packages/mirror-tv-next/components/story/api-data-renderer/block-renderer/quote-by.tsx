type Quote = {
  quoteBy: string
  quote: string
}
type QuoteByBlockProps = {
  data: Quote[]
}

const QuoteByBlock = ({ data }: QuoteByBlockProps) => {
  const getFirstElement = <T,>(data: T[]) => data[0]
  const { quote, quoteBy } = getFirstElement(data)
  console.log({ data })
  return (
    <div>
      <p>{quote}</p>
      <p>{quoteBy}</p>
    </div>
  )
}

export default QuoteByBlock
