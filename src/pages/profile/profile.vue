<template>
  <view class="profile-page">
    <view class="profile-header" @click="goLogin">
      <view class="avatar">
        <wd-avatar :src="userStore.userInfo?.avatar" icon="user" />
      </view>
      <view class="username">
        <view v-if="userStore.isLoggedIn" class="nickname">{{ userStore.userInfo?.nickname }}</view>
        <view v-else class="placeholder">未登录</view>
      </view>
    </view>

    <wd-cell-group custom-class="profile-options">
      <wd-cell title="个人中心" icon="user-circle" clickable />
      <wd-cell title="清空缓存" icon="clear" clickable @click="onClearCache" />
      <wd-cell title="项目源码" icon="github-filled" clickable @click="onCopySource" />
    </wd-cell-group>

    <Tabbar active="profile" />
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { useCacheStore } from '@/stores/cache'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const cacheStore = useCacheStore()

const goLogin = () => {
  uni.navigateTo({ url: '/pages/login/login' })
}

const onClearCache = () => {
  cacheStore.clearCache()
  userStore.resetState()
}

const onCopySource = () => {
  const sourceUrl = 'https://github.com/VfanLee/uniapp-template'
  uni.setClipboardData({
    data: sourceUrl,
    success: () => {
      uni.showToast({ title: '源码链接已复制', icon: 'success' })
    },
    fail: () => {
      uni.showToast({ title: '复制失败，请重试', icon: 'none' })
    },
  })
}

onShow(() => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 0,
  })

  userStore.hydrate()
})
</script>

<style lang="scss" scoped>
.profile-page {
  .profile-header {
    display: flex;
    align-items: center;
    gap: 24rpx;
    padding: 24rpx;
    background-color: #fff;
  }

  .username {
    .nickname {
      font-size: 32rpx;
      font-weight: 600;
    }

    .placeholder {
      font-size: 28rpx;
      color: #8d9199;
    }
  }

  .action-wrap {
    margin: 24rpx;
  }

  :deep(.profile-options) {
    margin: 24rpx;
    border-radius: 16rpx;
    overflow: hidden;
  }
}
</style>
