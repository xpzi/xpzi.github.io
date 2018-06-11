// let VueDialog = () => {};
let VueDialog = function(){};

import dialog from './dialog.vue';		

VueDialog.install = function( ){
	Vue.component('vue-dialog', dialog);
}

export default VueDialog;

// 开发小插件爱你


