<template>
	<div id="app">
		<Header title="团夕夕" :clickTitle="clickTitle">
			<div class="arrow" slot="left" @touchend="$router.go(-1)"></div>
			<div slot="right">登录</div>
		</Header>
		<Search 
			v-show="($route.path.indexOf('/detail/') !== 0 && $route.path !== '/payment')" 
			placeholder="请输入搜索关键字" 
			:search="showSearch">
			</Search>
		<router-view />
	</div>
</template>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
</style>
<script>
// 引入组件
import Header from './components/Header';
import Search from './components/Search';
// 注册
export default {
	components: { Header, Search },
	methods: {
		showSearch(val) {
			console.log(val);
		},
		clickTitle() {
			// console.log(11111, this.$router);
			this.$router.push('/')
		}
	}
};
</script>
