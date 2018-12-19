import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const clientDraftDefault = {
  clientName: '',
  clientType: '',
  moveDate: '',
  budget: '',
  pets: [],
  beds: [],
  baths: [],
  sqft:'',
  neighborhoods: [],
  notes: ''
}

const state = {
  clientDraft: Object.assign({}, clientDraftDefault)
}
const getters = {
  clientDraft: (state) => {
    return state.clientDraft;
  }
}
const mutations = {
  // exampleMutation: (state, mutatedProperty) => {
  //   console.log('saving mutatedProperty to state');
  //   state.property = mutatedProperty;
  // }
}
const actions = {
  saveNewClient(state, data){
    console.log('saving to my nonexistent database:', data);
    // clears form
    state.state.clientDraft = Object.assign({}, clientDraftDefault);
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
