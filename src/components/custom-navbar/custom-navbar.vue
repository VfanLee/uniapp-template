<template>
  <view class="custom-navbar">
    <view class="custom-navbar__wrap page-bg">
      <view class="custom-navbar-status" :style="{ height: `${statusBarHeight}px` }"></view>
      <view class="custom-navbar-title" :style="{ height: `${titleBarHeight}px` }">
        <view class="title">uniapp template</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getStatusBarHeight, getTitleBarHeight } from '@/utils/system'

const statusBarHeight = getStatusBarHeight()
const titleBarHeight = getTitleBarHeight()
</script>

<style lang="scss" scoped>
.custom-navbar {
  &__wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    background-color: #2979ff;
  }

  &-title {
    display: flex;
    align-items: center;
    gap: 16rpx;
    padding: 0 20rpx;
    color: #fff;
    .title {
      font-size: 32rpx;
    }
  }
}
</style>
