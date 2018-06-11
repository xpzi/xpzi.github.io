<template>

	<img  id="wellcomeImgUrl" v-link:="{path: 'login'}" v-bind:src="wellcomeImgUrl">

</template>

<script type="text/javascript">

console.log( window.innerWidth);
console.log( window.innerHeight);

export default {

		data(){
			return {
				wellcomeImgUrl: 'http://placehold.it/'+  window.innerWidth +'x'+ window.innerHeight
			}
		},
		methods: {
		}

	}


</script>
