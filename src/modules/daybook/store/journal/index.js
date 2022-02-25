import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as gatters from './gatters'



const journalModule ={
    nameespaced : true,
    actions, 
    gatters, 
    mutations,
    state
}

export default journalModule