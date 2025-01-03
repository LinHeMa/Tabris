type UnstyledBlockPropsType = {
  data: string[]
}
const UnstyledBlock = ({ data }: UnstyledBlockPropsType) => {
  const getFirstElement = (data: string[]) => data[0]
  const blockContentData = getFirstElement(data)
  if (!blockContentData) return <br />
  return <p dangerouslySetInnerHTML={{ __html: blockContentData }} />
}

export default UnstyledBlock
