import Utils from 'root/globalHelpingTools/utils'
import SagasManager from './manager'

const getSagaInstant = () => {
    const sagasManager = Utils.makeSingleton(SagasManager)
    return sagasManager.getInstance()
}

export default getSagaInstant