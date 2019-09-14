<template>
	<div class="ickt-header">
		<div class="header-left"><slot name="left"></slot></div>
		<!-- <router-link to="/" v-text="title" tag="h1"></router-link> -->
		<h1 @touchend="clickTitle">{{ title }}</h1>
		<div class="header-right"><slot name="right"></slot></div>
	</div>
</template>

<style lang="scss">
@import '../base.scss';
.ickt-header {
	background: $navColor;
	color: #fff;
	display: flex;
	height: 50px;
	line-height: 50px;
	text-align: center;
	h1 {
		flex: 1;
		font-size: 20px;
		font-weight: normal;
	}
	.header-left,
	.header-right {
		width: 60px;
	}

	.arrow {
		position: relative;
		&:before,
		&:after {
			content: '';
			@include arrow(10px, #fff, right);
			position: absolute;
			top: 16px;
			left: 10px;
		}
		&:after {
			content: '';
			border-right-color: $navColor;
			top: 16px;
			left: 13px;
		}
	}
}
</style>

<script>
export default {
	// props: ['title']
	// 属性校验
	props: {
		title: {
			type: String,
			default: ''
		},
		clickTitle: {
			type: Function,
			default: () => {}
		}
	}
};
</script>
