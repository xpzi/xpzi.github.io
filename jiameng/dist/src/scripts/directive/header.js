Vue.directive('myheader', {
	bind: function(){
		//准备工作 eg： 添加时间爱你处理器或只需要运行一次的高耗任务

	},
	update: function(value){
		//值更新时的工作 以初始值为参数调用一次

		// el: 指令绑定的元素。
		//vm: 拥有该指令的上下文 ViewModel。
		//expression: 指令的表达式，不包括参数和过滤器。
		//arg: 指令的参数。
		//name: 指令的名字，不包含前缀。
		//modifiers: 一个对象，包含指令的修饰符。
		//descriptor: 一个对象，包含指令的解析结果。
		console.log( this.el );
		console.log( this.vm );
		console.log( this.expression );
		console.log( this.arg );
		console.log( this.name);
		console.log( this.modifiers );
		console.log( this.descriptor );
		console.log( value.a );
		console.log( value.b );

	},
	unbind: function(){
		//清理工作  eg ： 


	}
});

Vue.directive('demo', function (value) {
  console.log(value.color) // "white"
  console.log(value.text) // "hello!"
});


// 可以准备写简历了  ， 工作经理   从两年到三年,， 。
 // 18911690880  刘奇
