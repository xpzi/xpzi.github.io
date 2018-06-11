
<template>
	<div id="majianame" class="__page">
		<pageheader backpath='/myprofile' title="马甲昵称" next="保存" nextcallback="save-name"></pageheader>
		<div class="container">
			<div class="type">
				<div class="item">
					<span><input type="text" v-model="majia"></span>
					<span></span>
				</div>
			</div>

			<!--   -->
			<!-- prompt : 提示  -->
			<div class="prompts">亲友们不可见，陌生人可见</div>
		</div>
	</div>
</template>
<script type="text/javascript">
var timer;
var that;
export default {
	data: function(){
		return {
			majia: '萌喜鹊'
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