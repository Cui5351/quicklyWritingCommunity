<template>
  <view class="container">
      <view class="navigationBar">
		  <view :class="[index == active ? 'active' : '']" v-for="(item,index) in tabbar" :key="index" @click="toggleTab(index)">{{item}}</view>
	  </view>
	  <scroll-view class="billsList">
		  <view>
			  <MyBills v-for="(item,index) in datas" :data="item"></MyBills>
		  </view>
	  </scroll-view>
  </view>
</template>

<script>
import {ref,reactive} from 'vue'
import MyBills from '../../../components/MyBills.vue'
export default{
  name:'',
  components:{
	  MyBills
  },
  onPullDownRefresh() {
  	uni.showLoading({
  		title:'加载中',
		mask:true
  	})
	setTimeout(() => {
		uni.hideLoading()
	},1500)
  },
  setup(){
	const active = ref(0)
	const tabbar = reactive(['全部','待接单','已接单','已完成','已取消'])
	const toggleTab = (index) => {
		active.value = index
	}
	// 		<!-- 发布日期，分类（计科，软件工程，电气电子，电子商务，财务管理等），发布标题，发布人，金额，状态（1'待接单',2'已接单',3'已完成',4'已取消'）,截至时间（暂不显示） -->
	const datas = reactive([{
		publishDateTime:"2025-5-21 10:11",
		category:"软件工程",
		title:"软工实验报告，求各位大神帮帮忙!",
		publisher:"小任",
		balance:28.88,
		status:1
	}])
    return{active, tabbar, toggleTab, datas}
  }
}
</script>

<style scoped lang='scss'>
@import "@/uni.scss";
.navigationBar{
	display: flex;
	height: 100rpx;
	align-items: center;
	&>view{
		width: 20%;
		text-align: center;
		box-sizing: border-box;
		padding: 15rpx 0;
	}
	.active{
		font-weight: bold;
		border-bottom: 2px solid red;
	}
}
.billsList{
	height: calc(100vh - 100rpx);
}
</style>
