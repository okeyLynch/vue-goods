<template>
	<div class="page-payment">
		<div class="price-part">
			<span class="price-title">商品总价</span>
			<span class="price-num">${{ $store.getters.price }}</span>
		</div>
		<div class="btns">
			<span class="btn-cancel" @touchend="$router.go(-1)">取消购买</span>
			<span class="btn-buy" @touchend="buyGoods">确认购买</span>
		</div>
		<h2 class="title">购买商品</h2>
		<Product v-for="item in $store.state.goods" :key="item._id" :data="item"></Product>
	</div>
</template>

<script>
import Product from '../components/Product.vue';
export default {
	components: { Product },
	methods: {
		buyGoods() {
			this.$http.post('/data/buy', {
				ids: this.$store.state.goods.map(item => item._id)
			});
		}
	}
};
</script>

<style lang="scss">
.page-payment {
	background: #fff;
	padding: 20px 10px 10px;
	font-size: 18px;
	.price-part {
		padding-left: 20px;
		span {
			line-height: 70px;
			padding-right: 10px;
			&:last-child {
				font-size: 30px;
				color: #f30;
			}
		}
	}
	.btns {
		text-align: center;
		height: 50px;
		span {
			font-size: 12px;
			padding: 5px 10px;
			border-radius: 0.25rem;
			background: #ccc;
			color: #fff;
			margin: 0 10px;
		}
		.btn-buy {
			background: #f30;
		}
	}
	.title {
		padding: 20px 20px 10px;
		font-size: 1.2rem;
		font-weight: normal;
	}
}
</style>
