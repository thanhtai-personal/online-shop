import Utils from 'root/globalHelpingTools/utils'
import HOCsManager from './manager'

const getHocsInstant = () => {
    const hocsManager = Utils.makeSingleton(HOCsManager)
    return hocsManager.getInstance()
}

export default getHocsInstant