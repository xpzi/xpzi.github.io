<template>
	<section class="fangshi">
		<h3>请选择找回方式：</h3>
		<div> 
			<span>中国<i>+86</i></span> 
			<input type="number" placeholder="请输入绑定的手机号" >
		</div>
	</section>
</template>
<script>
import actions from '../../../vuex/actions';
import getters from '../../../vuex/getters';
 export default {
 	vuex: {
		actions: {
			nextPage:actions.nextPageChange,
			title:actions.titleChange,
			backPage:actions.backPageChange
		}
    },
 	data(){
 		return {}
 	},
 	ready(){
 		 this.$nextTick(function () {
			this.title('安全中心-找回密码');
			this.nextPage('/backpass/phone');
			this.backPage('/backpass');
	    })
 		
 	},
 	methods:{
 		back(){
 			history.go(-1);
 		}
 	}
 }

</script>