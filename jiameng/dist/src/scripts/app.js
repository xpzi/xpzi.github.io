import "../styles/usage/page/app.scss";
import commonUtil from "./utils/common.util.js";

// 自定义 scroll 指令
commonUtil.dirScroll();

// views
import guide from "./components/guide.vue";
import index from "./components/index.vue";
import main from "./components/home.vue";
import search from "./components/search.vue";
import photo from "./components/photo.vue";
import my from "./components/my.vue";
import detail from "./components/detail.vue";

// 在根组件加入 store，让它的子组件和 store 连接
import store from './vuex/store';
let App = Vue.extend({  
	store: store
});

let router = new VueRouter();

router.map({
	'/': {
		component: guide
	},
	'/index': {
		component: index,
		subRoutes: {
			'/': {
				component: main
			},
			'/search': {
				component: search
			},
			'/photo': {
				component: photo
			},
			'/my': {
				component: my
			}
		}
	},

	'/detail/:id': {
		name: 'detail',
		component: detail
	}
});

router.start(App, '#app');

setTimeout( function () {
	router.go({path:'/login'});
} , 3000)
