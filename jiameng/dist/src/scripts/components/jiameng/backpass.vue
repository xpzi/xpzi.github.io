<template>
	<div id="backPass" transition="backpass">
		
		<header>
			<span class="back" @click="back"><img src="/img/top_nav_back.png"></span>
			<h3>{{get_title}}</h3>
			<span v-if="get_nextPage != -1" v-link="{path:get_nextPage}" class="next">下一步</span>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
import actions from '../../vuex/actions';
import getters from '../../vuex/getters';

	 export default {
	 	vuex: {
			getters: {
				get_nextPage: getters.get_nextPage,
				get_backPage: getters.get_backPage,
				get_title: getters.get_title
			}
	    },
	 	data(){
	 		return {
	 			
	 		}
	 	},
	 	ready(){

	 	},
	 	methods:{
	 		back(){
	 			if( this.get_backPage == -1){
	 				history.go(-1);
	 			}else{
	 				this.$router.go({path: this.get_backPage});
	 			}
	 			
	 		}
	 	}
	 }

</script>