<template>
	<div id="welcome" transition="welcome">
		<img src="/img/welcome.jpg"/>
	</div>
</template>

<script>
	var that;
	export default {
		data(){
			return {
				start: ''
			}
		},
		created(){
			console.log( 'created' );
		},
		beforeCompile(){
			console.log( 'beforeCompile' );
		},
		compiled(){
			console.log( 'compiled' );
		},
		ready(){
			that = this;
		},
		beforeDestroy(){
			console.log( 'beforeDestroy' );
		}
	}
</script>