<template>
  <view class="login-page">
    <view class="container">
      <view class="avatar-wrap">
        <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
          <image class="avatar" :src="form.avatar || defaultAvatarUrl" mode="aspectFill" />
        </button>
      </view>
      <view class="nickname-wrapper">
        <text class="nickname-label">昵称</text>
        <input
          class="nickname-input"
          type="nickname"
          placeholder="请输入昵称"
          :value="form.nickname"
          @blur="onNicknameBlur"
        />
      </view>
      <button class="save-btn" size="default" type="primary" @click="onSave">确认</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const defaultAvatarUrl = '/static/default-avatar.png'

const form = reactive({
  avatar: userStore.userInfo?.avatar || '',
  nickname: userStore.userInfo?.nickname || '',
})

const onChooseAvatar = (evt: any) => {
  form.avatar = evt.detail.avatarUrl || ''
}

const onNicknameBlur = (evt: any) => {
  form.nickname = (evt.detail.value || '').trim()
}

const onSave = () => {
  if (!form.nickname) {
    uni.showToast({ title: '请先填写昵称', icon: 'none' })
    return
  }

  userStore.login({
    avatar: form.avatar,
    nickname: form.nickname,
  })
  uni.navigateBack()
}

onShow(() => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 0,
  })
})
</script>

<style lang="scss" scoped>
.login-page {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 80vh;
}

.avatar-wrapper {
  width: 120rpx;
  height: 120rpx;
  padding: 0;
  border: none;
  border-radius: 16rpx;
  overflow: hidden;
  background: transparent;

  &::after {
    border: none;
  }

  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 16rpx;
    display: block;
  }
}

.nickname-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 60rpx;
  padding: 24rpx 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .nickname-label {
    width: 160rpx;
  }

  .nickname-input {
    flex: 1;
  }
}

.save-btn {
  width: 100%;
  text-align: center;
  margin-top: auto;
}
</style>
