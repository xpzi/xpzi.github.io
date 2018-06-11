<template>
	<div id="zhuce">
		<div class="button" v-on:click="nextSms"></div>
		<div v-bind:class="hide"  class="top"><span>{{info}}</span></div>
		<div class="zhuce">
			<div>
				<span>姓名</span>
				<input type="text" v-model="name" placeholder="便于亲人认识">
				<span>字(昵称)</span>
				<input type="text" v-model="literaryName" placeholder="可修改">
			</div>
			<div>
				<span>性别</span>
				<span  v-on:click="jmgender('woman')" v-bind:class="woman"><i ></i>女</span>
				<span v-on:click="jmgender('man')" v-bind:class="man"><i ></i>男</span>
				<i class="info">(注册后不可修改)</i>
			</div>
			<div>
				<span>国际区号</span>
				<span>中国( +86 )</span>
			</div>
			<div>
				<span>手机号</span>
				<span><input type="number" v-on:change="phoneJiance" v-model="phone"  placeholder="输入手机号" ></span>
			</div>
			<div>
				<span>密码</span>
				<span><input type="password" v-model="password" placeholder="不低于6位"></span>
			</div>
			<div>
				<span>短信验证码</span>
				<span><input type="text" v-model="smsCode" placeholder="不低于6位"></span>
			</div>
		</div>
		
		<!-- 提示 -->
		<!-- <div class="dialog" v-bind:class="hide">
			{{info}}
		</div> -->
	</div>
</template>
<script >

import actions from '../../../vuex/actions';
import getters from '../../../vuex/getters';
import storage from '../../../utils/localstorage.js';

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
				hide: 'hide',
				man: "man",
				woman: 'woman_active',
				smsCode: '',
				password:'',
				phone:'',
				countryCode:'',
				gender:'',
				literaryName:'',
				name:'',
				info:''
			}
		},
		ready(){
			this.title('注册-填写手机号');
			this.nextPage('/backpass/sms');
			this.backPage('/login');

			var user = storage.getUser();
			if( user ){
				user = JSON.parse( user );
				this.name = user.name;
				this.literaryName = user.literaryName;
				this.gender = user.gender;
				this.phone = user.phone;
				this.password = user.password
			}

		},
		methods:{
			phoneJiance(){
				
				var url =  '/jiameng/CheckBindServlet.php'; 
				this.$http.get(url,{params:{ phone: this.phone}})
					.then((res)=>{
						console.log( res);
					},()=>{});
					
			},
			jmgender( der ){
				if( der === 'woman'){
					this.man = 'man_active';
					this.woman = 'woman';
					this.gender = 1;
				} else if(der === 'man'){
					this.man = 'man';
					this.woman = 'woman_active';
					this.gender = 0;
				}
			},
			nextSms(){

				var user = {};
				user.name = this.name;
				user.literaryName = this.literaryName;
				user.gender = this.gender;
				user.countryCode = this.countryCode;
				user.phone = this.phone;
				user.password = this.password;
				user.smsCode = this.smsCode;
				
				var fgle = true;
				if( !user.name ){
					this.info = "姓名,字不能为空！";
					fgle = false;
				} else if( !user.literaryName ){
					fgle = false;
					this.info = "姓名,字不能为空！";
				}else if( !user.phone ){
					fgle = false;
					this.info = "手机号不能为空";
				}else if( !user.password ){
					fgle = false;
					this.info = "请输入密码";
				}
				if( !fgle){
					this.hide = '';
					// setTimeout( function(){
					// 	this.hide = 'hide';
					// }, 3000);
				} else{
					//发送短信  然后跳转
					
					
					this.$router.go({path: '/backpass/sms'});
				}
				
				storage.setUser(  JSON.stringify( user ) );
				
				console.log( JSON.stringify( user ) );
			}
		}
	}
	
</script>