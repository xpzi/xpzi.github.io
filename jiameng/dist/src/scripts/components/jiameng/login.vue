<template>
	<div id="login" transition="login">
		
		<header>
			<span class="logo"> <img src="/img/login_logo.png" alt="" /></span>
			<span class="name"> <img src="/img/login_logo_name.png"></span>
		</header>
		<section>
			<div class="user">
				<label>
					<img v-bind:src="login_id" alt="" />
					<span v-if="type=='phone'"  v-link="{path:'/backpass/codes'}" >{{country.naem}}<i>{{country.code}}</i></span>
					<input v-on:change="userchange('user')" v-bind:placeholder="type == 'id'? 'id' :'手机号' ; "  type="number"  v-model="user"  />
					<img v-on:click="typeSwitch" v-bind:src="login_phone" alt="" />
				</label>
				<label>
					<img v-bind:src="login_password" alt="" />
					<input v-on:change="userchange('password')" type="password" v-model="password" />
				</label>
			</div>
			<div class="button" v-on:click="login">登录</div>
			<div class="others">
				<span v-link="{path:'/backpass'}">找回密码</span>
				<span v-link="{path:'/backpass/zhuce'}">注册</span>
			</div>

			<!-- <div class="boxbox	" style="width:100%; height: 80px; margin-top: 10px; background: #fff;">
				
				<div class="onebox"  ></div>

			</div> -->
		</section>
		
		<div v-bind:class="mask">
			<div class="loading">
				<img v-bind:src="loadingImg" alt="" />
			</div>
		</div>
		
		<div class="dialog" v-bind:class="hide">
			用户名或密码错误
		</div>
		
	</div>
</template>

<script>
var that;
var timer = null;
import stor from "../../utils/localstorage.js";
import actions from '../../vuex/actions';
import getters from '../../vuex/getters';


export default {
	vuex: {
		actions: {
			countryChange:actions.countryChange,
			typeChange:actions.loginTypeChange
		},
		getters: {
			get_codes: getters.get_codes,
			getCountry: getters.getCountry,
			type: getters.getLoginType
		}
    },
 	data(){
 		return {
 			mask:'hide',
 			loadingImg:'/img/loading_01.png',
 			loginImg:['/img/login_id.png','/img/login_id_active.png','/img/login_phone.png', '/img/login_phone_active.png','/img/login_password.png', '/img/login_password_active.png'],
 			user: '10070',
 			password: '809449454',
 			hide: 'hide',
 			country:{naem:'', code:'',}
 		}
 	},
 	computed:{
 		login_id:function(){
 			if( this.type === 'id'){
 				return this.user.length > 0 ? this.loginImg[1]: this.loginImg[0];
 			} else {
   				return this.user.length > 0 ? this.loginImg[3]: this.loginImg[2];
 			}
 		},
 		login_phone:function(){
 			if( this.type === 'phone'){
// 				return this.user.length > 0 ? this.loginImg[1]: this.loginImg[0];
 				return this.loginImg[0];
 			} else {
// 				return this.user.length > 0 ? this.loginImg[3]: this.loginImg[2];
 				return this.loginImg[2];
 			}
 		},
 		login_password: function(){
 			return this.password.length > 0 ? this.loginImg[5]: this.loginImg[4];
 		},
 		country: function(){
// 			get_codes[getCountry[0]][getCountry[1]];
 			
 			return this.get_codes[this.getCountry[0]].list[this.getCountry[1]];
 		}
 	},
 	ready(){
 		that= this;
 		var user = stor.getUser();	
 		if( user){
 			
 		}else{
 			this.user = '';
 			this.password='';
 			this.login_id = this.loginImg[0];
 			this.login_phone = this.loginImg[2];
 			this.login_password = this.loginImg[4];
 		}
 	},
 	methods:{
 		userchange( shuxin ){
 			switch(shuxin){
 				case 'user': 
 					break;
 				case 'backpass':
 					break;
 			}
 			console.log( this[shuxin] );
 		},
 		typeSwitch(){
 			var newtype =  this.type === 'id' ? 'phone' : 'id'; 
   			this.typeChange( newtype );
   			console.log( this.type);
   			console.log( newtype);
 		},
 		login(){
 			this.mask = 'yo-mask';
 			var i=0;
 			timer = setInterval(function(){
 				var str = ('0'+(i%12 +1)).substr(-2);
 				that.loadingImg = '/img/loading_'+ str   +'.png';
 				i++;
 			},80);
			this.$http.get('/jiameng/login.php',{ method:'POST',params:{ number: this.user, password: this.password,type:this.type}})
		        .then((res) => {
		        	console.log( res );
		        	clearInterval(timer);
		        	this.mask = 'hide';
		        	var userinfo =  JSON.parse(res.body);
		        	if( userinfo.flag === "true" ){
		        		//登录成功
		        		that.$router.go({path:'/home'});

		        	} else{
		        		//登录失败
		        		switch(userinfo.errorCode){
		        			case 0: 
		        				console.log( '用户不存在');
		        				break;
		        			case -1:
		        				console.log('密码错误');
		        				break;
		        		}
		        		that.hide = '';
		        		setTimeout(function(){
		        			that.hide = 'hide';
		        		},2000);
		        	}
		        })
 		},
 		back(){
 			history.go(-1);
 		},
 		backpass(){

 		}
 	}
 }
	
</script>