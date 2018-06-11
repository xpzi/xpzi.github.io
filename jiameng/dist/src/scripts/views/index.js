var indexTpl = require('../tpl/index.html');
var Vue = require('vue');


runjs,c=d
//import commonUtil from '../utils/commonUtil.js';
//commonUtil.rander(indexTpl);

console.log( indexTpl );
var container = new Vue({
	el: '#container',
	data: {
		container : indexTpl
	}
});




//var app = new Vue({
//	el: '#app',
//	data: {
//		message: 'Hello Vue.js!'
//	}
//})



//console.log( app);  





//export default "sss";
