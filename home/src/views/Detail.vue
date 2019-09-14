<template>
	<div class="page-detail">
		<div class="img-part">
			<img :src="'img/item/' + data.img" alt="" />
			<h1>{{ data.title }}</h1>
			<p>{{ data.description }}</p>
		</div>
		<div class="price-part">
			<span class="price">
				<strong>{{ data.price }}</strong>
				元
			</span>
			<span class="origin-price">门市价: {{ data.originPrice }} 元</span>
			<span :class="{
				'buy-btn': true,
				'has-buy': data.hasBuy
			}" @touchend="buyGoods">{{data.hasBuy ? '取消购买' : '立即购买'}}</span>
		</div>
		<ul class="sales-part">
			<li>支持立即退货</li>
			<li>支持随时退货</li>
			<li>销量: {{ data.sales }}</li>
		</ul>
		<div class="store-part module">
			<div class="module-header">店家信息</div>
			<div class="module-body">
				<p>{{ data.storeName }}</p>
				<p>{{ data.storeAddress }}</p>
			</div>
			<div class="module-footer">查看{{ data.storeNum }}家分店</div>
		</div>
		<div class="buy-part module">
			<div class="module-header">购买须知</div>
			<div class="module-body" v-html="data.content"></div>
		</div>
		<shopping-car />
	</div>
</template>

<script>
import ShoppingCar from '../components/ShoppingCar.vue';
export default {
	components:{
		ShoppingCar
	},
	data() {
		return {
			data: {}
		};
	},
	methods: {
		getData() {
			let { params } = this.$route;
			this.$http.get('/data/product', { params }).then(({ data }) => {
				if (this.$store.state.goods.find(item => item._id === data._id)){
					data.hasBuy = true;
				}
				this.data = data;
			});
		},
		// 购买货品
		buyGoods() {
			//将数据存储在store中
			this.$store.commit(this.data.hasBuy ? 'deleteGoods' : 'addGoods', this.data);
			// 切换是否购买的数据
			// this.data.hasBuy = !this.data.hasBuy;
			this.$set(this.data,'hasBuy', !this.data.hasBuy);
		}
	},
	//组件创建完成
	created() {
		//请求数据
		this.getData();
	},
	watch: {
		$router() {
			this.getData();
		}
	}
};
</script>
<style lang="scss">
@import '../base.scss';
.page-detail {
	.img-part {
		position: relative;
		color: #fff;
		img {
			width: 100%;
			display: block;
		}
		h1,
		p {
			position: absolute;
			left: 10px;
			bottom: 15px;
			font-size: 12px;
		}
		h1 {
			bottom: 35px;
			font-weight: normal;
			font-size: 22px;
		}
	}
	.price-part {
		padding: 0 10px;
		background: #fff;
		font-size: 14px;
		.price {
			color: $navColor;
			font-size: 14px;
			strong {
				font-size: 35px;
				font-weight: normal;
			}
		}
		.buy-btn {
			float: right;
			background: #f30;
			color: #fff;
			border-radius: 3px;
			font-size: 12px;
			padding: 5px 10px;
			margin-top: 10px;
			&.has-buy {
				background: #e0e0e0;
				color: #333;
			}
		}
	}
	.sales-part {
		background: #fff;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0;
		border-top: 1px solid #ccc;
		li {
			width: 50%;
			padding-left: 10px;
			color: yellowgreen;
			box-sizing: border-box;
			line-heigh: 30px;
			&:last-child {
				color: #000000;
			}
		}
	}
	.module {
		margin-top: 10px;
		background: #fff;
		padding: 10px;
		.module-header {
			padding: 8px 0 10px;
			font-size: 22px;
			border-bottom: 1px solid #ccc;
		}
		.module-body {
			padding: 10px 0;
			line-height: 30px;
			font-size: 14px;
			h3 {
				font-weight: normal;
				line-height: 40px;
				font-size: 14px;
				color: #f30;
			}
		}
		.module-footer {
			border-top: 1px solid #ccc;
			font-size: 14px;
			color: skyblue;
			padding: 10px 0 5px;
		}
	}
}
</style>
