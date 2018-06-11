<template>
	<div id="seting" class="__page">

		<pageheader backpath='/home' title="设置"></pageheader>

		<div class="container">

			<div class="type none_margin">
				<div class="item" v-on:click="videoplayFuc('show')">
					<span>语音播放</span>
					<span class="backcolor">{{videoplay[videoplayType]}}</span>
				</div>
				<div class="item">
					<span>消息声音</span>
					<span v-on:click="smsFuc('smsvideo')">
						<a class="danxuan" v-bind:class="smsvideo"><i></i></a>
					</span>
				</div>
				<div class="item">
					<span>消息震动</span>
					<span  v-on:click="smsFuc('smsshake')">
						<a class="danxuan" v-bind:class="smsshake"><i></i></a>
					</span>
				</div>
			</div>

			<!-- 版本 -->
			<div class="type">
				<div class="item" v-on:click="versionUpdateFuc('show')">
					<span>版本&nbsp;{{version}}</span>
					<span>{{info}}</span>
				</div>
				<div class="item" v-on:click="exitFuc('show')">
					<span>退出</span>
					<span>
						
					</span>
				</div>
			</div>

			<!--   -->
			<div class="mask" v-bind:class="mask">
				<!-- 语音播放方式  -->
				<div v-bind:class="playway" v-on:click="videoplayFuc('hide')">
					<h3>语音播放方式</h3>
					<div v-for=" item in videoplay" v-on:click="videoplayChoose($index)"><span>{{item}}</span><span v-bind:class=" videoplayType == $index ? 'yes' : 'no';"><img src="/img/icon_queding_focused.png"></span></div>
				</div>

				<!-- 退出 -->
				<div v-bind:class="exit">
					<p>退出将无法及时收到新消息<br/>且下次登录需要密码<br />你确定要退出</p>
					<span><span v-on:click="exitFuc('yes')">确定</span><span v-on:click="exitFuc('no')">取消</span></span>
				</div>

				<!-- 更新 -->
				<div v-bind:class="VersionUpdate">
					<div class="version">
						<img v-bind:src="loadingImg">
						<em>版本更新中...</em>
					</div>
				</div>
			</div>

			<!-- 提示 -->
			<div v-bind:class="prompt">{{info}}</div>
		</div>
	</div>
</template>
<script type="text/javascript">
var timer ;
var that;
export default {

	data: function(){
		return {
			name: '开维',
			literaryName: '维',
			gender: 0,
			countryCode: '86',
			phone: '18508225903',
			number: '10070',
			xiqueimg: '/img/head_robot_right.png',
			headimg: '/img/head_no.png',
			loadingImg: '/img/loading_01.png',

			mask: 'none',
			videoplay: ['听筒','喇叭', '听筒&喇叭智能切换'],
			videoplayType: 2,
			info : '已是最新版本！',
			version: '0.9',

			playway: 'none',
			exit: 'none',
			VersionUpdate: 'none',
			prompt: 'none',
			smsvideo: 'active',
			smsshake: ''
		}
	},
	ready: function(){
		that = this;
	},
	methods:{
		videoplayFuc: function( isshow ){
			if( isshow == 'show'){
				this.mask = 'yo-mask';
				this.playway ="dialog";
			}else{
				this.mask = 'none';
				this.playway ="none";
			}
		},
		videoplayChoose : function(index){
			this.videoplayType = index;
		},
		smsFuc:function( key ){
			this[key]= this[key] == '' ? 'active' : '';
		},
		versionUpdateFuc: function( isshow ){
			if(isshow == 'show'){
				this.mask = 'yo-mask';
				this.VersionUpdate = 'dialog';
				var i = 0;
				// 在这个时候器请求版本更新
				timer = setInterval( function(){
					var cur = (i++)%12 + 1;
					cur = ('00'+cur).substr(-2);
					console.log( cur);
					that.loadingImg = '/img/loading_'+cur+'.png';

					if( i>=20){
						clearInterval(timer);
						that.info = '已是最新版本！';
						that.prompt = 'prompt';
						that.mask = 'none';
						that.VersionUpdate = 'none';
						setTimeout( function(){
							that.prompt = 'none';
						}, 1000);
					}
				},100);

			} else{
				this.mask = 'none';
				this.VersionUpdate = 'none';
			}
		},
		exitFuc:function( isshow ){
			if( isshow == 'show'){
				this.mask = 'yo-mask';
				this.exit = 'dialog';
			} else {
				this.mask = 'none';
				this.exit = 'none';
				if( isshow == "yes"){
					this.$router.go({path:'/login'});
				}
			}
		}
	}
}

</script>