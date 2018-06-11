<template>
	<div id="home">
		<header>
			<span v-link="{path: '/home'}"><img src="/img/head_robot_left.png"></span>
			<span v-link="{path: '/addmore'}"><img src="/img/top_nav_menu.png"></span>
		</header>
		<main>
			<div class="swiper-container home" v-on:touchmove="move">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<v-book></v-book>
					</div>
					<div class="swiper-slide">
						<v-message></v-message>
					</div>
					<div class="swiper-slide">
						<v-found></v-found>
					</div>
				</div>
			</div>
		</main>
		<footer>
			<span v-for="item in footerList" v-on:click="tableSwiper($index)">
				<img v-bind:src="$index == currentTable ? item.activeimg : item.img "><i v-bind:class="$index == currentTable ? 'active': '' ;">{{item.title}}</i></span>
		</footer>
	</div>
</template>

<script >

var that;
var mySwiper;
import book from './book.vue';		//通讯录
import message from './message.vue';	//消息
import found from './found.vue';		//发现

export default {
	data:function(){
		return {
			currentTable: 1,
			footerList: [{
				img: '/img/bottom_nav_contacts.png',
				activeimg: '/img/bottom_nav_contacts_active.png',
				title:'通讯录'
			},{
				img: '/img/bottom_nav_chats.png',
				activeimg: '/img/bottom_nav_chats_active.png',
				title:'消息'
			},{
				img: '/img/bottom_nav_discover.png',
				activeimg: '/img/bottom_nav_discover_active.png',
				title:'发现'
			}]
		}
	},
	created:function(){
		//在这里要做一些处理，看看是不是登录成功
		//要是没有登录成功不让进

		
	},
	ready:function(){
		that = this;
		this.$nextTick( function(){

			mySwiper = new Swiper('.home',{
      			onSlideChangeStart: function(){
      				that.currentTable = mySwiper.activeIndex;
	            }
      		});

      		// mySwiper.slideTo(1, 0);
		});
	},
	methods:{
		tableSwiper:function( index ){
			this.currentTable = index;
			mySwiper.slideTo( this.currentTable );
		},
		move(){
			console.log(1);
		}

	},
	components:{
		'v-book': book,
		'v-message': message,
		'v-found': found
	}
}

</script>