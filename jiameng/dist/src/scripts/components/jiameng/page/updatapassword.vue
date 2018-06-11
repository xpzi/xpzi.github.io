<template>
	<div id="updatapassword" class="__page">
		<pageheader backpath='/myprofile' title="安全中心-修改密码" next="修改" nextcallback="save-name"></pageheader>
		<div class="container">
			<div class="type">
				<div class="item">
					<span>原密码 <i>[提示: <em class="color-red">9</em>位]</i></span>
					<span><input type="text" v-model="password" placeholder="请输入原密码" ></span>
				</div>
				<div class="item">
					<span>新密码</span>
					<span><input type="text" placeholder="请输入新密码" ></span>
				</div>
			</div>

			<!-- 页面独有的提示 -->
			<div class="wangjimima">
				<span>忘记了原密码</span>
			</div>
			<div class="tishi">
				<h5>重要提示</h5>
				<div>
					<p><i></i> 若是家萌号被盗，请即时修改密码</p>
					<p><i></i> 若是手机丢失，请及时修改密码，并拨打手机号运营商客服电话，立即挂失，然后补办手机卡！</p>
				</div>
			</div>

		</div>
	</div>
</template>
<script type="text/javascript">
var that ;
export default {
	data: function(){
		return {
			password: '',
			newpassword: '',
		}
	},
	ready: function(){
		that = this;
	},
	methods:{

	},
	events: {
		'save-name': function(){
			that.$router.go({path: '/myprofile'});
		}
	}
}

</script>