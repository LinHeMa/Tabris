import { ApiDataBlockType, type ApiDataBlockBase } from './type'

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
  console.log({ InfoBoxBlock: data })
  return <div>InfoBoxBlock</div>
}

export default InfoBoxBlock
