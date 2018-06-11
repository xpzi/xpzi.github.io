export default {
	CHANGETAB (state, currentTabindex) {
		state.tabIndex = currentTabindex;
	},
	CHANGE_title(state, newtitle){
		state.title = newtitle;
	},
	CHANGE_nextPage(state, next){
		state.nextPage = next;
	},
	CHANGE_backPage(state, back){
		state.backPage = back;
	},
	CHANGE_country(state, newcountry){
		state.country = newcountry;
	},
	CHANGE_loginType(state, newtype){
		state.loginType = newtype;
	}
}
