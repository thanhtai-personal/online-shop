import Utils from 'root/globalHelpingTools/utils'
import ReducerManager from './manager'

const getReducerInstant = (history) => {
    const reducerManager = Utils.makeSingleton(ReducerManager, history)
    return reducerManager.getInstance()
}

export default getReducerInstant