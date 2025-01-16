import styles from './_styles/unorder-list-block.module.scss'
type UnOrderListBlockProps = {
  data: string[][]
}

const UnOrderListBlock = ({ data }: UnOrderListBlockProps) => {
  const getFirstElement = (data: UnOrderListBlockProps['data']) => data[0]
  const blockContentData = getFirstElement(data)
  return (
    <ul className={styles.unOrderListBlock}>
      {blockContentData.map((listData, index) => (
        <li key={index}>{listData}</li>
      ))}
    </ul>
  )
}

export default UnOrderListBlock
