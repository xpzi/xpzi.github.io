export default{
	tabChanger({dispatch, state}, tabIndex) {
		dispatch('CHANGETAB', tabIndex);
	},
	titleChange({dispatch, state}, newtitle){
		dispatch('CHANGE_title', newtitle);
	},
	nextPageChange({dispatch, state}, next){
		dispatch('CHANGE_nextPage', next);
	},
	backPageChange({dispatch, state}, back){
		dispatch('CHANGE_backPage', back);
	},
	countryChange({dispatch, state}, newcoun){
		dispatch('CHANGE_country', newcoun);
	},
	loginTypeChange({dispatch, state}, newType){
		dispatch('CHANGE_loginType', newType);
	}
}
