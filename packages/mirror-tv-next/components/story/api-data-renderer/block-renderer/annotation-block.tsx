type AnnotationBlockProps = {
  data: string[]
}
const AnnotationBlock = ({ data }: AnnotationBlockProps) => {
  const getFirstElement = (data: AnnotationBlockProps['data']) => data[0]
  const blockContentData = getFirstElement(data)
  return <p dangerouslySetInnerHTML={{ __html: blockContentData }}></p>
}

export default AnnotationBlock
