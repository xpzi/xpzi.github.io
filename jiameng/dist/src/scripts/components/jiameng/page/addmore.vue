<template>
	<div id="addmore" class="__page">
		<!--  header -->
		<pageheader backpath='/home' v-bind:title="'添加-'+ title" v-bind:next="next"></pageheader>
		<!--  content -->
		<div class="container">
			<div class="nav">
				<div v-for="item in navlist" v-bind:class="$index == curactive ? 'active': ''"><img v-bind:src=" $index == curactive ? item.activesrc : item.src"><span>{{item.title}}</span></div>
			</div>
			<div class="main">
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
var timer;
var that;
export default {
	data: function(){
		return {
			title: '公众号',
			next: '查找',
			curactive: 3,
			navlist: [{
				src: '/img/add_class.png',
				activesrc: '/img/add_class_active.png',
				title: '同窗'
			},{
				src: '/img/add_home.png',
				activesrc: '/img/add_home_active.png',
				title: '家庭'
			},{
				src: '/img/add_nav_clan.png',
				activesrc: '/img/add_nav_clan_active.png',
				title: '家族'
			},{
				src: '/img/add_nav_member.png',
				activesrc: '/img/add_nav_member_active.png',
				title: '亲友'
			},{
				src: '/img/add_nav_community.png',
				activesrc: '/img/add_nav_community_active.png',
				title: '小区'
			},{
				src: '/img/add_nav_village.png',
				activesrc: '/img/add_nav_village_active.png',
				title: '城村'
			},{
				src: '/img/add_nav_officialaccounts.png',
				activesrc: '/img/add_nav_officialaccounts_active.png',
				title: '公众号'
			}]
		}
	},
	ready: function(){
		that = this;
	},
	methods:{

	},
	events: {
		'save-name': function(){

			that.$router.go({path: '/myprofile'});

		}
	}
}
</script>