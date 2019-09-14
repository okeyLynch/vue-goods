<template>
	<div class="page-list">
		<ul class="list-orders">
			<li v-for="item in orders" :key="item.id" @touchend="listOthers(item.id)">
				<span>{{ item.text }}</span>
				<span class="arrow"></span>
			</li>
		</ul>
		<Product v-for="item in list" :key="item._id" :data="item" tag="li"></Product>
		<div class="loader-more" v-show="others.length" @touchend="showOthers()">
			<span>查看其他 {{ others.length }} 条数据</span>
			<span class="arrow"></span>
		</div>
	</div>
</template>
<script>
import Product from '../components/Product.vue';
export default {
	components: { Product },
	data() {
		return {
			orders: [{ id: 'price', text: '价格排序' }, { id: 'sales', text: '销量排序' }, { id: 'evaluate', text: '好评排序' }, { id: 'discount', text: '优惠排序' }],
			list: [],
			others: []
		};
	},
	methods: {
		getData() {
			let { params } = this.$route;
			this.$http.get('/data/list', { params }).then(({ data }) => {
				this.list = data.slice(0, 3);
				this.others = data.slice(3);
			});
		},
		showOthers() {
			this.list = this.list.concat(this.others);
			this.others = [];
		},
		listOthers(id) {
			if (id === 'discount') {
				return this.list.sort((a,b) => {
					return (a.originPrice - a.price) - (b.originPrice - b.price);
				})
			}
			this.list.sort((a,b) => {
				return b[id] - a[id];
			})
		}
	},
	created() {
		this.getData();
	},
	watch: {
		$route() {
			this.getData();
		}
	}
};
</script>
<style lang="scss">
@import '../base.scss';
.page-list {
	.list-orders {
		background: #fff;
		display: flex;
		li {
			width: (100% / 4);
			text-align: center;
			font-size: 12px;
			border-bottom: 1px solid #ccc;
			border-right: 1px solid #ccc;
			padding: 4px 0 8px;
			&:last-child {
				border-right: none;
			}
			.arrow {
				@include arrow(4px);
				position: relative;
				top: -2px;
				left: 2px;
			}
		}
	}
	.loader-more {
		color: $navColor;
		text-align: center;
		background: #fff;
		line-height: 40px;
		font-size: 14px;
		.arrow {
			position: relative;
			&:after,
			&:before {
				content: '';
				@include arrow(8px, $navColor);
				position: absolute;
				top: 6px;
				left: 8px;
			}
			&:after {
				content: '';
				border-top-color: #fff;
				top: 4px;
				left: 8px;
			}
		}
	}
}
</style>
