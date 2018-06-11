<template>
	<div id="found">
		<div class="header" v-link="{path: '/myprofile'}">
			<span><img v-bind:src="headimg"></span>
			<span>
				<h3>{{name}} <i>字</i>{{literaryName}}</h3>
				<div><span>家萌号：</span><i>{{number}}</i></div>
			</span>
		</div>

		<div class="otherItem">
			<div v-link="{path:'/wallet'}"><img src="/img/discover_money.png"><span>钱包</span></div>
			<div v-link="{path:'/seting'}"><img src="/img/discover_set.png"><span>设置</span></div>
		</div>
	</div>
</template>
<script type="text/javascript">

export default {

	data: function(){
		return {
			name: '开维',
			literaryName: '维',
			gender: 0,
			countryCode: '86',
			phone: '18508225903',
			number: '10070',
			xiqueimg: '/img/head_robot_right.png',
			headimg: '/img/head_no.png'
		}
	},
	ready: function(){

	},
	methods:{

	}
}

// export default {

// 	data: function(){
// 		return {}
// 	},
// 	ready: function(){

// 	},
// 	methods:{

// 	}
// }
</script>