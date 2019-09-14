import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		search: '',
		// price: 0,
		goods: []
	},
	// 计算属性数据
	getters: {
		price(state) {
			if (state.goods.length === 0) {
				return 0;
			}
			// 遍历商品求总价
			return state.goods.map(item => item.price).reduce((res, item) => res + item)
		}
	},
	mutations: {
		//更新搜索词
		updateSeacrch(state, value) {
			state.search = value;
		},
		// 添加商品
		addGoods(state, goods) {
			if (Object.is(+goods.price, NaN)) {
				return alert('该商品莫得价格哦');
			}
			if (state.goods.find(item => item._id === goods._id)) {
				return alert('已经购买了哟');
			}
			state.goods.push(goods);
			console.log('add', state)
		},
		// 删除商品
		deleteGoods(state, goods) {
			if (Object.is(+goods.price, NaN)) {
				return alert('价格为空');
			}
			let index = state.goods.findIndex(item => item._id === goods._id)
			if (index >= 0) {
				state.goods.splice(index, 1);
			}
			console.log('delete', state)
		},
		okShopping(state, goods) {
			console.log(goods.price)
		}
	},
	actions: {

	}
})
