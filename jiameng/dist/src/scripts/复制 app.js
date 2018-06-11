import '../styles/usage/page/app.scss';
//import "../styles/usage/page/app.scss"
//views

import wellcome from "./component/qidong/wellcome.vue";
import login from "./component/qidong/login.vue";
import zhaomima from "./component/qidong/zhaohuimima.vue";
import index from "./component/index.vue";
import main from "./component/main.vue";
import search from "./component/search.vue";


//var index = {
//  template: '<p>This is foo!</p>'
//}

import Vue from "./lib/vue.js";
import VueRouter from "./lib/vue-router.js";
import VueResource from "./lib/vue-resource.js";

Vue.use(VueRouter);
Vue.use(VueResource);



// router
let App = Vue.extend({});

let router = new VueRouter();
      
router.map({  
	'/':{
		component:index,
		subRoutes:{
			'/':{
				component: wellcome
			},
			'/mian':{
				component: main
			},
			'/search':{
				component: search
			},
			'login':{
				component: login
			},
			'zhaomima':{
				component: zhaomima
			}
		}
	},
	'login':{
		component: login
	}
});
router.start(App,'body');



// npm install vue.loader@8.2.1 -D  安装  8.2.1的版本