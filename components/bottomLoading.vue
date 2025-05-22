<template>
	<view>
		<uni-load-more iconType="circle" v-if="$props.loadding" status="loading"></uni-load-more>
	</view>
</template>

<script>
	export default {
		name:"bottomLoading",
		props:{
			loadding:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>