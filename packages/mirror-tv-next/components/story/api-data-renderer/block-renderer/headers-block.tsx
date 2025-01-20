import styles from './_styles/headers-block.module.scss'
type HeadersBlockPropsType = {
  data: string[]
  blockType: string
}
const HeadersBlock = ({ data, blockType }: HeadersBlockPropsType) => {
  const getFirstElement = <T,>(data: T[]) => data[0]
  const blockContentData = getFirstElement(data)

  const renderHeader = () => {
    switch (blockType) {
      case 'header-one':
        return <h1 dangerouslySetInnerHTML={{ __html: blockContentData }} />
      case 'header-two':
        return <h2 dangerouslySetInnerHTML={{ __html: blockContentData }} />
      default:
        console.error(`Unhandled block type: ${blockType}`)
        return null
    }
  }

  return <div className={styles.headersBlock}>{renderHeader()}</div>
}

export default HeadersBlock
