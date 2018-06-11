<template>
	<header>
		<span class="back"  v-link="{path: backpath}">
			<img v-bind:src="backimg">
		</span>
		<h3>{{title}}</h3>
		<span v-if="next != -1" v-on:click="nextFuc" class="next">{{next}}</span>
	</header>
</template>
<script type="text/javascript">
export default {
	props:['backimg', 'backpath','title', 'next', 'nextpath','nextcallback','nextcallbackParams'],
	data: function(){
		return {}
	},
	ready: function(){
		this.backimg = this.backimg || '/img/top_nav_back.png';
		this.backpath = this.backpath || '';
		this.title = this.title || 'test请输入标题';
		this.next = this.next || -1;
		this.nextpath = this.nextpath || -1;
		this.nextcallback = this.nextcallback || null;
		this.nextcallbackParams = this.nextcallbackParams || null;
		console.log( this.next);
	},
	methods:{
		back:function(){

		},
		nextFuc:function(){
			if(this.nextcallback ){
				this.$dispatch( this.nextcallback , this.nextcallbackParams);
			}
		}
	}

}
</script>