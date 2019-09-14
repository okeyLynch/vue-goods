<template>
	<div class="page-home">
		<ul class="icons">
			<router-link v-for="item in icons" :key="item.id" tag="li" :to="'/list/' + item.id">
				<img :src="'img/icon/' + item.img" alt />
				<p>{{ item.text }}</p>
			</router-link>
		</ul>
		<ul class="ads">
			<router-link v-for="(item, index) in ad" :key="index" tag="li" :to="'detail' + item._id">
				<h3 :class="'color-' + index">{{ item.title }}</h3>
				<p>{{ item.description }}</p>
				<img :src="'img/ad/' + item.url" alt />
			</router-link>
		</ul>
		<div class="list">
			<h2 class="list-title">猜你喜欢</h2>
			<Product v-for="item in list" :key="item._id" :data="item"></Product>
		</div>
	</div>
</template>
<script>
import Product from '../components/Product.vue';
export default {
	components: {
		Product
	},
	data() {
		return {
			// 同步数据
			icons: [
				{ id: 1, img: '01.png', text: '美食' },
				{ id: 2, img: '02.png', text: '电影' },
				{ id: 3, img: '03.png', text: '酒店' },
				{ id: 4, img: '04.png', text: '休闲' },
				{ id: 5, img: '05.png', text: '外卖' },
				{ id: 6, img: '06.png', text: 'KTV' },
				{ id: 7, img: '07.png', text: '周边游' },
				{ id: 8, img: '08.png', text: '丽人' },
				{ id: 9, img: '09.png', text: '小吃' },
				{ id: 10, img: '10.png', text: '火车票' }
			],
			list: [],
			ad: []
		};
	},
	created() {
		this.$http.get('/data/home.json').then(({ data }) => {
			this.ad = data.ad;
			this.list = data.list;
			// console.log(data.list)
		});
	}
};
</script>

<style lang="scss" scoped>
.page-home {
	.icons {
		background: #fff;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0;
		li {
			width: 20%;
			text-align: center;
			padding: 5px 0 10px;
			img {
				width: 60%;
				margin-bottom: 5px;
			}
			p {
				font-size: 12px;
			}
		}
	}
	.ads {
		background: #fff;
		margin-top: 10px;
		display: flex;
		li {
			flex: 1;
			border-right: 1px solid #ccc;
			text-align: center;
			padding: 10px 0;
			&:last-child {
				border-right: none;
			}
			img {
				width: 60%;
			}
			p {
				font-size: 12px;
				margin: 4px 0 8px;
			}
			h3 {
				font-size: 16px;
				line-height: 24px;
				font-weight: normal;
			}
			$i: 0;
			@each $c in red, green, purple {
				.color-#{$i} {
					color: $c;
				}
				$i: $i + 1;
			}
		}
	}
	.list {
		background: #fff;
		.list-title {
			background: #fff;
			margin: 10px 10px 0;
			margin-bottom: 1px solid #ccc;
			padding: 15px 0 10px;
			font-size: 20px;
			font-weight: normal;
		}
	}
}
</style>
