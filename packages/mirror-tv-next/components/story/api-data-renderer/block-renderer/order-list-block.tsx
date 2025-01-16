import styles from './_styles/order-list-block.module.scss'

type OrderListBlockProps = {
  data: string[][]
}

const OrderListBlock = ({ data }: OrderListBlockProps) => {
  const getFirstElement = (data: OrderListBlockProps['data']) => data[0]
  const blockContentData = getFirstElement(data)
  return (
    <ol className={styles.orderListBlock}>
      {blockContentData.map((listData, index) => (
        <li key={index}>{listData}</li>
      ))}
    </ol>
  )
}

export default OrderListBlock
