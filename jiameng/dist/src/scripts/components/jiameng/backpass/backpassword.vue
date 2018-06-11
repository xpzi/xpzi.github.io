<template>
	<section class="fangshi">
		<h3>请选择找回方式：</h3>
		<div> <span>通过指纹找回：</span> <i>不可用</i></div>
		<div> <span>通过虹膜找回：</span> <i>不可用</i></div>
		<div> <span>通过问答找回：</span> <i class="ok">可用</i></div>
		<div> <span>通过申诉找回：</span> <i>不可用</i></div>
	</section>

	<section class="tishi">
		<h4>重要提示</h4>
		<ul>
			<li><i></i>若是手机号被盗，请及时修改密码！</li>
			<li><i></i>若是手机号丢失，请及时修改密码，并拨打手机运营商客服电话，立即挂失，然后补办手机号</li>
		</ul>
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
	 		return {

	 		}
	 	},
	 	ready(){
	 		 this.$nextTick(function () {
				this.title('安全中心-找回密码');
				this.nextPage('/backpass/phone');
				this.backPage('/login');
		    })
	 		
	 	},
	 	methods:{
	 		back(){
	 			history.go(-1);
	 		}
	 	}
	 }

</script>
  