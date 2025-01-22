import { ApiDataBlockType, type ApiDataBlockBase } from './type'
import styles from './_styles/info-box-block.module.scss'
type ContentInfoBox = {
  body: string
  title: string
}

export interface ApiDataInfoBox extends ApiDataBlockBase {
  type: ApiDataBlockType.InfoBox
  content: [ContentInfoBox]
  alignment: 'center'
}

const InfoBoxBlock = ({ data }: { data: ApiDataInfoBox }) => {
  const getFirstElement = (data: ApiDataInfoBox['content']) => data[0]
  const blockContentData = getFirstElement(data.content)
  console.log(JSON.stringify(blockContentData))
  const { title, body } = blockContentData
  console.log({ InfoBoxBlock: data.content[0] })
  return (
    <div className={styles.infoBoxWrapper}>
      <p className={styles.infoBoxTitle}>{title}</p>
      <div
        className="info-box-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  )
}

export default InfoBoxBlock
