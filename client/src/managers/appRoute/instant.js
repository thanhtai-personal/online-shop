import Utils from 'root/globalHelpingTools/utils'
import AppRouteManager from './manager'

const getAppRouteInstant = () => {
    const appRouteManager = Utils.makeSingleton(AppRouteManager)
    return appRouteManager.getInstance()
}

export default getAppRouteInstant