<template>
	<div class="ickt-search"><input type="text" :placeholder="placeholder" v-model="msg" @keyup.enter="enterToSearch()"/></div>
</template>
<style lang="scss">
.ickt-search {
	background: #fff;
	display: flex;
	padding: 10px 20px;
	input {
		flex: 1;
		padding: 10px 20px;
		background: #efefef;
		font-size: 13px;
		border-radius: 19px;
		border:none;
		outline: none;
	}
}
</style>
<script>
	export default {
		props: [
			'placeholder',
			'search'
		],
		data() {
			return {
				msg: ''
			}
		},
		methods:{
			enterToSearch() {
				this.search(this.msg)
				this.msg = '';
			}
		}
	}
</script>
