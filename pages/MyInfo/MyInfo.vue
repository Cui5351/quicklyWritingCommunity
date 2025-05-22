<template>
  <view class="container">
      <view class="my_info">
			  <image :src="userInfo.avatar" mode="aspectFill"></image>
				<view class="name">用户名:{{userInfo.name}}</view>
				<view class="phone">手机号:{{userInfo.phone}}</view>
	  </view>
	  <view class="other">
	  		  <view class="two_bar">
	  			  <view @click="toggle('/pages/Bills/MyPublishBills/MyPublishBills')">
	  				  <view class="title">
	  					  <view>我的发布</view>
	  					  <view>
	  						  <uni-icons type="right" size="17"></uni-icons>
	  					  </view>
	  				  </view>
	  				 <view class="content" style="display: flex;align-items: center;gap: 20rpx;">
							  <view>
								  <image src="../../static/myinfo/publish.svg" style="height: 50rpx;width: 50rpx" mode=""></image>
							  </view>
							  <view>
								{{userInfo.publishCount}}
								<text style="margin-left: 5rpx;">份</text>
							  </view>
	  				 </view>
	  			  </view>
	  				  <view>
	  					  <view class="title">
	  						  <view>我的单子</view>
	  						  <view>
	  							  <uni-icons type="right" size="17"></uni-icons>
	  						  </view>
	  					  </view>
	  					<view class="content" style="display: flex;align-items: center;gap: 20rpx;">
							  <view>
								  <image src="../../static/myinfo/myBill.svg" style="height: 50rpx;width: 50rpx" mode=""></image>
							  </view>
							  <view>
								{{userInfo.myBills}}
								<text style="margin-left: 5rpx;">份</text>
							  </view>
	  					</view>
	  				  </view>
	  		  </view>
	  </view>
	  <view class="other">
		  <view class="two_bar">
			  <view>
				  <view class="title">
					  <view>我的收益</view>
					  <view>
						  <uni-icons type="right" size="17"></uni-icons>
					  </view>
				  </view>
				  <view class="content" style="display: flex;align-items: center;gap: 20rpx;">
					  <view>
						  <image src="../../static/myinfo/coin.svg" style="height: 50rpx;width: 50rpx" mode=""></image>
					  </view>
					  <view>
						{{userInfo.money?.toFixed(2)}}
					  </view>
				  </view>
			  </view>
			  <view>
				  <view class="title">
					  <view>功能位</view>
					  <view>
						  <uni-icons type="right" size="17"></uni-icons>
					  </view>
				  </view>
				  <view class="content">
					  功能位
				  </view>
			  </view>
		  </view>
	  </view>
	  <view class="other">
		  <view class="three_bar">
			  <view v-for="item in 7" :key="item">
				  <view id="center">
					  <image :src="'../../static/c'+ item +'.png'" style="width: 40rpx;height: 40rpx;margin-right: 10rpx;" mode=""></image>
					  标题</view>
				  <view>
					  <uni-icons type="right"></uni-icons>
				  </view>
			  </view>
		  </view>
	  </view>
	  <Bottom :loadding="true"></Bottom>
  </view>
</template>

<script>
import {ref,reactive} from 'vue'
import Bottom from '@/components/Bottom.vue'
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
export default{
  name:'',
  components:{
	  uniIcons,Bottom
  },
  setup(){
	const userInfo = reactive({
		name:'张三',
		avatar:'/static/logo.png',
		phone:'15799441146',
		money:0.00,
		publishCount:0,
		myBills:3
	})
	const login = reactive(true)
	const toggle = (page) => {
		if(!login){
			uni.MyShowToast("请先登录")
			return
		}
		uni.navigateTo({
			url:page
		})
	}
    return{ userInfo, toggle }
  }
}
</script>

<style scoped lang='scss'>
@import "/uni.scss";
.my_info{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 70rpx;
	flex-direction: column;
	padding-top: 160rpx;
	.name{
		
	}
	.phone{
		margin-top: 20rpx;
	}
	image{
		width: 250rpx;
		margin-bottom: 30rpx;
		height: 250rpx;
		border-radius: 50%;
	}
}
.other{
	margin-top: 30rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	
	.three_bar{
		background-color: white;
		border-radius: 20rpx;
		&>view{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx;
			box-sizing: border-box;
			color: $gray;
		}
	}
	
	.two_bar{
		display: flex;
		justify-content: space-between;
		&>view{
			color: $gray;
			padding: 30rpx 25rpx;
			box-sizing: border-box;
			width: 48%;
			background-color: white;
			border-radius: 20rpx;
			.title{
				display: flex;
				justify-content: space-between;
			}
			.content{
				margin-top: 25rpx;
				box-sizing: border-box;
				color:black;
			}
		}
	}
}
</style>
