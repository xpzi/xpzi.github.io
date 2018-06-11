// 样式入口
import "../styles/jiameng.scss";

// 这是个什么东东
import  "./utils/component.js";

// localstorage插件方法的使用
import stor from "./utils/localstorage.js";

/* 欢迎 登录 找回密码 */
// 欢迎页面
import welcome from './components/jiameng/welcome.vue';
// 登陆页面
import login from './components/jiameng/login.vue';

// 注册相关页面
import backpass from './components/jiameng/backpass.vue';
import backpassword from './components/jiameng/backpass/backpassword.vue';
import backpassphone from './components/jiameng/backpass/backpassphone.vue';
import zhuce from './components/jiameng/backpass/zhuce.vue';
import codes from './components/jiameng/backpass/areacode.vue';
import sms from './components/jiameng/backpass/sms.vue';

// 聊天相关页面
// import chatvue from './components/jiameng/chat/chatvue.vue';

//page  单页面
import seting from './components/jiameng/page/seting.vue';
import myprofile from './components/jiameng/page/myprofile.vue';
import wallet from './components/jiameng/page/jiamengwallet.vue';
import upname from './components/jiameng/page/updatename.vue';
import majia from './components/jiameng/page/majianame.vue';
import uppass from './components/jiameng/page/updatapassword.vue';
//add moer 更多功能
import addmore from './components/jiameng/page/addmore.vue';

// home 主页 
import home from './components/jiameng/home.vue';		// 
import book from './components/jiameng/book.vue';		//通讯录
import message from './components/jiameng/message.vue';	//消息
import found from './components/jiameng/found.vue';		//发现




// 在根组件加入 store，让它的子组件和 store 连接
import store from './vuex/store';


// 使用vuex
let App = Vue.extend({
	store: store
});
let  router  = new VueRouter();


// 路由配置
router.map({
	'/':{
		component: welcome
	},
	'/home':{
		component:home
	},
	'/addmore':{
		component:addmore
	},
	'/login':{
		component: login
	},
	'/seting':{
		component: seting
	},
	'/myprofile':{
		component: myprofile
	},
	'/wallet':{
		component: wallet
	},
	'/upname':{
		component: upname
	},
	'/uppass':{
		component: uppass
	},
	'/majia':{
		component: majia
	},
	'/backpass':{
		component: backpass,
		subRoutes:{
			'/':{
				component:	backpassword
			},
			'/phone':{
				component: backpassphone
			},
			'zhuce':{
				component: zhuce
			},
			'codes':{
				component: codes
			},
			'sms':{
				component: sms
			}
		}
	}
});

// 启动路由
router.start(App, '#app');


/*
	在这里做个判断：
		判断是不是曾经登录成功后退出的

			登录成功的数据保存在localstorage中  通过保存时的时间判断是不是  过期
				登录信息没有过期的话： 自动登录 
						自动登录成功： 跳转到首页
						自动登录失败： 跳转到登录页面

				已经过期了： 跳到登录页面
		
		没有登陆过 ----》 跳到登录页面

		技术点：
			localstorage 的使用
			ajax接口调用判断登录成功
			路由页面跳转

*/


var user = stor.getUser();

console.log(user);
if( user ){
	
}else{
	setTimeout( function () {   
		router.go({path:'/login'});
	} , 2000)
}

//假设  经过一拨儿判断过后发现是第一次登录
