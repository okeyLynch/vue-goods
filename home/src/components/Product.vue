<template>
	<div class="ickt-product">
		<router-link class="product-inner" :to="'/detail/' + data._id" tag="div">
			<img :src="'img/list/' + data.img" alt="" />
			<div class="content">
				<h3>{{ data.title }}</h3>
				<p>
					<span class="price">{{ data.price }}元</span>
					<span class="origin-price">门市价: {{ data.originPrice }}元</span>
					<span class="sales">销量: {{ data.sales }}</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	props: ['data'],
	created() {
		
	}
};
</script>

<style lang="scss">
@import '../base.scss';
.ickt-product {
	background: #fff;
	.product-inner {
		margin: 0 10px;
		// border-bottom: 1px solid #ccc;
		padding: 10px 0;
		display: flex;
	}
	img {
		width: 100px;
		height: 60.5px;
		border-radius: 5px;
	}
	.content {
		flex: 1;
		padding-left: 10px;
		h3 {
			font-size: 14px;
			height: 44px;
		}
		p {
			font-size: 12px;
		}
		.price {
			color: $navColor;
		}
		.sales {
			float: right;
		}
		.origin-price {
			// color: red;
			margin-left: 10px;
		}
	}
}
</style>
