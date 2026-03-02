<template>
  <view class="custom-navbar">
    <view class="custom-navbar__wrap">
      <view class="custom-navbar-status" :style="{ height: `${statusBarHeight}px` }"></view>
      <view class="custom-navbar-title" :style="{ height: `${titleBarHeight}px` }">
        <view class="title">uniapp template</view>
        <view class="divider">|</view>
        <view class="sub-title">by "Vfan Lee"</view>
      </view>
    </view>
    <view class="custom-navbar__placeholder" :style="{ height: `${statusBarHeight + titleBarHeight}px` }" />
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
    background-color: #07c160;
  }

  &-title {
    display: flex;
    align-items: center;
    gap: 16rpx;
    padding: 0 24rpx;
    color: #fff;
    .title {
      font-size: 36rpx;
    }
    .sub-title {
      font-size: 24rpx;
    }
  }
}
</style>
