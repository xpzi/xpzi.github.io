<template>
	<div id="updataname" class="__page">
		<pageheader backpath='/myprofile' title="姓名·字" next="保存" nextcallback="save-name"></pageheader>
		<div class="container">
			<div class="type">
				<div class="item">
					<span>姓名</span>
					<span><input type="text" v-model="name"></span>
				</div>
			</div>
			<div class="type">
				<div class="item">
					<span>字</span>
					<span><input type="text" value="维"></span>
				</div>
			</div>

			<!--  yo-mask -->
			<div class="mask" v-bind:class="mask">
				<!-- 更新 -->
				<div v-bind:class="saveloading">
					<div class="version">
						<img v-bind:src="loadingImg">
						<em>正在保存...</em>
					</div>
				</div>
			</div>
			<!-- 提示 -->
			<div v-bind:class="prompt">{{info}}</div>
		</div>
	</div>
</template>
<script type="text/javascript">
var timer;
var that;
export default {
	data: function(){
		return {
			name: '开维',
			literaryName: '维',
			saveloading: 'none',
			mask: 'none',
			loadingImg:'/img/loading_12.png',
			prompt:'none',
			info:''
		}
	},
	ready: function(){
		that = this;
	},
	methods:{

	},
	events: {
		'save-name': function(){
			// console.log('save-name');
			var newname = {};
			newname.name = this.name;
			newname.literaryName = this.literaryName;
			console.log( JSON.stringify(newname) );


			this.mask="yo-mask";
			this.saveloading = 'dialog';
			var i =0;
			timer = setInterval( function(){
					var cur = (i++)%12 + 1;
					cur = ('00'+cur).substr(-2);
					that.loadingImg = '/img/loading_'+cur+'.png';

					if( i>=5){
						clearInterval(timer);
						// that.info = '更新失败';
						// that.prompt = 'prompt';
						// that.mask = 'none';
						// that.VersionUpdate = 'none';
						// setTimeout( function(){
						// 	that.prompt = 'none';
						// }, 1000);
						that.$router.go({path: '/myprofile'});
					}
				},100);

		}
	}
}

</script>