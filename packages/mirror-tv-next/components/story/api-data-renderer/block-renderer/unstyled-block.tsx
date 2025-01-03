type UnstyledBlockPropsType = {
  data: string[]
}
import styles from './_styles/unstyled-block.module.scss'

const UnstyledBlock = ({ data }: UnstyledBlockPropsType) => {
  const getFirstElement = (data: string[]) => data[0]
  const blockContentData = getFirstElement(data)
  // NOTE: if empty string will be seen as line changing.
  if (!blockContentData) return <br className={styles.brBlock} />
  return (
    <p
      className={styles.textBlock}
      dangerouslySetInnerHTML={{ __html: blockContentData }}
    />
  )
}

export default UnstyledBlock
