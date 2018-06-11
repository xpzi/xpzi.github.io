<template>
	<div id="sms">
		<label >输入短消息：<input type="number"  /> </label>
	</div>
</template>
<script type="text/javascript">
	
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
		this.title('注册-填写短息验证码');
		this.nextPage(-1);
		this.backPage('/backpass/zhuce');
	},
	methods:{
		
	}
}
</script>