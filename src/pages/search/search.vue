<template>
  <view class="search-page">
    <wd-search
      v-model="searchValue"
      @focus="focus"
      @blur="blur"
      @search="search"
      @clear="clear"
      @cancel="cancel"
      @change="change"
      maxlength="10"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchValue = ref('')

const search = (res: { value: string }) => {
  uni.showToast({
    title: '搜索：' + res.value,
    icon: 'none',
  })
}

const change = (res: { value: string }) => {
  console.log('----input:', res)
}

const clear = (res: { value: string }) => {
  uni.showToast({
    title: 'clear事件，清除值为：' + res.value,
    icon: 'none',
  })
}

const blur = (res: { value: string }) => {
  uni.showToast({
    title: 'blur事件，输入值为：' + res.value,
    icon: 'none',
  })
}

const focus = (res: { value: string }) => {
  uni.showToast({
    title: 'focus事件，输出值为：' + res.value,
    icon: 'none',
  })
}

const cancel = (res: { value: string }) => {
  uni.showToast({
    title: '点击取消，输入值为：' + res.value,
    icon: 'none',
  })
}
</script>
