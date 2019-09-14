<template>
	<div class="ickt-shopping-car">
		<div class="price">共${{$store.getters.price}}元</div>
		<router-link to="/payment" class="buy" tag="div">选好了</router-link>
		<!-- <div class="buy">选好了</div> -->
	</div>
</template>

<script>
</script>

<style lang="scss">
	.ickt-shopping-car {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 50px;
		line-height: 50px;
		font-size: 16x;
		color: #fff;
		background: #484d54;
		display: flex;
		text-align: center;
		.price {
			flex: 1;
		}
		.buy {
			background: #fe2947;
			width: 120px;
		}
	}
</style>
