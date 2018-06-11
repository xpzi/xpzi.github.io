<template>
	<section class="code">
		<div class="search">
			<label> <img src="/img/ic_search.png" alt="" /><input type="text" placeholder="请输入国家或地区名称"/> </label>
		</div>
		
		<div class="con">
			<!--swiper -->
			<div class="iscroll">
				<div class="list">
					<h5 id="id0">热门城市</h5>
					<div v-bind:class="curindex == '-2' ? 'active' :'' "  v-on:click="backLogin(12,0)" v-on:touchstart="remencity('1')" v-on:touchend="remencity('0')"><span>中国</span><i>+86</i></div>
					<template  v-for="( index, lett) in country">
						<h5 v-bind:id="'id'+lett.letter">{{lett.letter}}</h5>
						<div v-bind:class="curindex == index && curinx == inx ? 'active' : '';"  v-for="(inx,  item) in lett.list" v-on:touchstart="listStart(index,inx)" v-on:touchend="listEnd(index,inx)" v-on:click="backLogin( index, inx )" ><span>{{item.naem}}</span><i>{{item.code}}</i></div>
					</template >
				</div>
			</div>
			<!-- list -->
			<div class="letterList">
				<span v-on:click="scrollTo('id0')" >#</span>
				<span v-on:click="scrollTo('id'+lett.letter)" v-for="lett in country">{{lett.letter}}</span>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
var myscroll;

//import { titleChange,nextPageChange,backPageChange } from '../../../vuex/actions';
//import { get_codes,get_backPage,get_nextPage,get_title } from '../../../vuex/getters';
import action from '../../../vuex/actions';
import getter from '../../../vuex/getters';

export default {
	vuex: {
		actions: {
			titleChange: action.titleChange,
			nextPageChange:action.nextPageChange,
			backPageChange:action.backPageChange,
			countryChange:action.countryChange
		},
		getters: {
			get_codes: getter.get_codes,
			get_backPage:getter.get_backPage,
			get_nextPage:getter.get_nextPage,
			get_title:getter.get_title
		}
    },
	methods:{
		scrollTo:function(id){
			myscroll.scrollToElement( '#'+id, 0, 0, 0 );
		},
		backLogin: function(index, inx){
			this.countryChange( [index, inx ] );
			this.$router.go({path:'/login'});
		},
		remencity: function(isture){
			if(isture){
				this.curindex = -2;
			}else{
				this.curindex = -1;
			}
		},
		listStart: function(index, inx){
			this.curindex = index;
			this.curinx = inx;
		},
		listEnd: function(index, inx){
			this.curindex = -1;
			this.curinx = -1;
		}
	},
	ready(){
		this.titleChange('选择国家或地区');
		this.nextPageChange(-1);
		setTimeout(function(){
			myscroll = new IScroll('.iscroll',{
				click: true
			});
		}, 300);
		
	},
	data(){
		return {
			curindex:-1,
			curinx: -1,
			country: this.get_codes
		}
	}
}
</script>