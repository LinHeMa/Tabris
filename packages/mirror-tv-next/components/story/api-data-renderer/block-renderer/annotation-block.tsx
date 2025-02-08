'use client'
import { ApiDataBlockBase, type ApiDataBlockType } from './type'
import styles from './_styles/annotation-block.module.scss'
import { useCallback, useMemo, useState } from 'react'
type AnnotationBlockProps = {
  data: string[]
}
// 提取 text 和 annotation 的函數
const extractAnnotationData = (data: { blockContentData: string }) => {
  const regexForAnnotation = /<!--__ANNOTATION__=\{(.*?)\}-->/
  const blockContentDataMatched =
    data.blockContentData.match(regexForAnnotation)

  // NOTE: 如果 blockContentDataMatched 有值，則提取 annotation 的 text 和 annotation
  if (blockContentDataMatched && blockContentDataMatched[1]) {
    const jsonString = `{${blockContentDataMatched[1]}}`
    const annotationData = JSON.parse(jsonString)
    return {
      text: annotationData.text,
      annotation: annotationData.annotation,
    }
  }
  return null
}
export interface ApiDataAnnotation extends ApiDataBlockBase {
  type: ApiDataBlockType.Annotation
  content: [string]
  alignment: 'center'
}
function indicatorSvg(shouldRotate: boolean) {
  const transform = shouldRotate ? 'rotate(180)' : 'rotate(0)' // 確保在關閉時旋轉回來
  return (
    <svg
      className={styles.rotated}
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={transform}
    >
      <circle cx="10" cy="10" r="10" fill="none" stroke="#90A5DB" />
      <path d="M10 15L5.66987 7.5L14.3301 7.5L10 15Z" fill="#004DB8" />
    </svg>
  )
}
const AnnotationBlock = ({ data }: { data: ApiDataAnnotation }) => {
  const getFirstElement = (data: AnnotationBlockProps['data']) => data[0]
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const blockContentData = useMemo(
    () => getFirstElement(data.content),
    [data.content]
  )

  const annotationData = useMemo(
    () => extractAnnotationData({ blockContentData }),
    [blockContentData]
  )

  return (
    <div className={styles.annotationBlock}>
      <p className={styles.annotationTitle}>
        {annotationData?.text}
        <button onClick={toggleOpen} className={styles.toggleButton}>
          (註)
        </button>
        {indicatorSvg(isOpen)}
      </p>
      {isOpen ? (
        <p
          className={styles.annotationContent}
          dangerouslySetInnerHTML={{
            __html: annotationData?.annotation,
          }}
        />
      ) : null}
    </div>
  )
}

export default AnnotationBlock
