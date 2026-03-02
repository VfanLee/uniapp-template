<template>
  <view class="profile-page">
    <view class="profile-info">登录后享受更多功能</view>
    <view class="login-btn">
      <wd-button type="success" block open-type="chooseAvatar" @chooseavatar="handleChooseAvatar">
        微信一键登录
      </wd-button>
    </view>
  </view>
  <Tabbar active="profile" />
</template>

<script setup lang="ts">
const handleChooseAvatar = (event: any) => {
  console.log('选择了头像', event)
}
</script>

<style lang="scss" scoped>
.profile-info {
  margin: 24rpx;
  text-align: center;
  font-size: 28rpx;
  color: #666;
}

.login-btn {
  margin: 24rpx;
}
</style>
