<template>
	<div id="myprofile" class="__page">

		<pageheader backpath='/home' title="我的资料"></pageheader>

		<div class="container">
			<!--  name -->
			<div class="type">
				<div class="item hei60" v-link="{path:'/upname'}">
					<span>姓名·字</span>
					<span>
						<em>{{name}}</em> 字<em>{{literaryName}}</em>
						<img v-bind:src="headimg">
					</span>
				</div>
				<div class="item hei60" v-link="{path: '/majia'}">
					<span>马甲</span>
					<span>
						<em>{{majia}}</em>
						<img v-bind:src="xiqueimg">
					</span>
				</div>
			</div>
			<!--  other -->
			<div class="type">
				<div class="item" v-on:click="copyid( 'hide' )">
					<span>家萌号</span>
					<span>
						<em class="backcolor1">{{number}}</em>
					</span>
				</div>
				<div class="item" v-link="{path: '/uppass'}">
					<span>
						密码 <i>[长度提示]</i>
					</span>
					<span>
						<em>9位</em>
					</span>
				</div>
				<div class="item"  v-on:click="promptFuc">
					<span>
						手机
					</span>
					<span>
						<em>+{{countryCode}}&nbsp;&nbsp;{{phone}}</em>
					</span>
				</div>
				<div class="item" v-on:click="promptFuc">
					<span>
						密保
					</span>
					<span>
						<em>指纹/虹膜</em>
					</span>
				</div>
				<div class="item"  v-on:click="strangerFuc('hide')">
					<span>
						陌生人加我
					</span>
					<span>
						<em v-bind:class=" yunxu == 'yes' ? '': 'backcolor1'  ">{{ yunxu == 'yes' ? '允许': '谢绝' ;}}</em>
					</span>
				</div>
				<div class="item">
					<span>
						性别
					</span>
					<span>
						<em class="backcolor1">{{ gender ? '男' : '女' ; }}</em>
					</span>
				</div>
			</div>

			<!--  yo-mask -->
			<div class="mask" v-bind:class="mask">
				
				<!-- 复制家萌号 -->
				<div v-bind:class="copy" v-on:click="copyid( 'show' )">复制家萌号</div>

				<!-- 陌生人加我 stranger： 陌生人 -->
				<div class="stranger" v-on:click="strangerFuc('show')" v-bind:class="stranger">
					<h3>是否允许陌生人添加</h3>
					<div v-on:click="strangerYunxu('yes')"><span>允许</span><span v-bind:class=" yunxu"><img src="/img/icon_queding_focused.png"></span></div>
					<div v-on:click="strangerYunxu('no')"><span>谢绝</span><span v-bind:class=" yunxu == 'yes' ? 'no' : 'yes';"><img src="/img/icon_queding_focused.png"></span></div>
				</div>
			</div>

			<!-- 公共提示 -->
			<div v-bind:class="prompt">{{info}}</div>

		</div>	

	</div>

</template>

<script >
export default {
	data(){
		return {
			mask: 'none',
			name: '开维',
			literaryName: '维',
			gender: 0,
			countryCode: '86',
			phone: '18508225903',
			number: '10070',
			majia: '萌喜鹊',

			xiqueimg: '/img/head_robot_right.png',
			headimg: '/img/head_no.png',

			info: '',
			copy: 'none',
			stranger:'none',
			prompt: 'none',
			yunxu: ''
		}
	},
	ready(){

	},
	methods:{
		copyid: function( isshow ){
			if( isshow == 'show' ){
				//先来逻辑处理
				this.mask = 'none';
				this.copy = 'none';
				this.info = '复制成功'
				this.prompt = 'prompt';
				var that = this;
				setTimeout( function(){
					that.prompt = "none";
				}, 200);
			} else{
				this.mask = "yo-mask";
				this.copy = 'copy';
			}
		},
		strangerFuc: function( isshow ){
			if( isshow == 'show'){
				this.mask = "none";
				this.stranger = 'none';
			} else{
				this.mask = "yo-mask";
				this.stranger = 'dialog';
			}
		},
		strangerYunxu: function( isYunxu ){
			this.yunxu = isYunxu;
		},
		promptFuc:function(){
			this.info = '开发中...'
			this.prompt = 'prompt';
			var that = this;
			setTimeout( function(){
				that.prompt = "none";
			}, 3000);
		}
		
	}
}


</script>
