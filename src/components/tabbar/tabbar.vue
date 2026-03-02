<template>
  <wd-tabbar :modelValue="active" shape="round" bordered fixed safeAreaInsetBottom placeholder @change="handleChange">
    <wd-tabbar-item v-for="tab in tabs" :key="tab.name" :name="tab.name" :title="tab.title" :icon="tab.icon" />
  </wd-tabbar>
</template>

<script setup lang="ts">
const { active } = defineProps<{
  active: 'index' | 'category' | 'profile'
}>()

const tabs = [
  { name: 'index', pagePath: '/pages/index/index', title: '首页', icon: 'home' },
  { name: 'category', pagePath: '/pages/category/category', title: '分类', icon: 'cart' },
  { name: 'profile', pagePath: '/pages/profile/profile', title: '我的', icon: 'user' },
]

const handleChange = ({ value }: { value: string }) => {
  const target = tabs.find((tab) => tab.name === value)
  if (target) {
    uni.switchTab({
      url: target.pagePath,
    })
  }
}
</script>
