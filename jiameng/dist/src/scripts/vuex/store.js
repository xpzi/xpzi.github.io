import state from './state.js' ;
import mutations from './mutations.js' ;
//console.log( state);
//console.log( mutations);

export default  new Vuex.Store({
  state: state,
  mutations: mutations
});
