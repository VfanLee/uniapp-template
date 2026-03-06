<template>
  <view class="category-page">
    <wd-search v-model="value" />

    <wd-card>
      <wd-grid :column="2" border>
        <wd-grid-item v-for="val of 30" :key="val" icon="app" :text="`App${val}`" />
      </wd-grid>
    </wd-card>

    <Tabbar active="category" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

<style lang="scss" scoped>
.category-page {
  :deep(.wd-card) {
    margin: 24rpx;
    padding: 24rpx;
  }
}
</style>
