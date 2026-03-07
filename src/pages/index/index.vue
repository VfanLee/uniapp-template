<template>
  <CustomNavbar />
  <view class="index-page">
    <view class="swiper-example">
      <wd-swiper
        autoplay
        v-model:current="current"
        custom-indicator-class="custom-indicator-class"
        custom-image-class="custom-image"
        custom-next-image-class="custom-image-prev"
        custom-prev-image-class="custom-image-prev"
        :indicator="{ type: 'dots' }"
        :list="swiperList"
        previousMargin="24px"
        nextMargin="24px"
      ></wd-swiper>
    </view>

    <view class="grid-example">
      <wd-card>
        <wd-grid :column="3">
          <wd-grid-item icon="picture" text="文字" />
          <wd-grid-item icon="picture" text="文字" />
          <wd-grid-item icon="picture" text="文字" />
          <wd-grid-item icon="picture" text="文字" />
          <wd-grid-item icon="picture" text="文字" />
          <wd-grid-item icon="picture" text="文字" />
        </wd-grid>
      </wd-card>
    </view>

    <view class="card-example">
      <wd-card v-for="v in 10" :key="v" title="经营分析">
        一般的，检举内容由承办的党的委员会或纪律检查委员会将处理意见或复议、复查结论同申诉人见面，听取其意见。复议、复查的结论和决定，应交给申诉人一份。
        <template #footer>
          <wd-button size="small" plain>查看详情</wd-button>
        </template>
      </wd-card>
    </view>
  </view>
  <Tabbar active="index" />
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import CustomNavbar from '@/components/custom-navbar/custom-navbar.vue'
import { ref } from 'vue'

const current = ref<number>(0)

const swiperList = ref([
  'https://wot-ui.cn/assets/redpanda.jpg',
  'https://wot-ui.cn/assets/capybara.jpg',
  'https://wot-ui.cn/assets/panda.jpg',
  'https://wot-ui.cn/assets/moon.jpg',
  'https://wot-ui.cn/assets/meng.jpg',
])

onShow(() => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 0,
  })
})
</script>

<style lang="scss" scoped>
@import '@/uni.scss';

.swiper-example {
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 24rpx;
  --wot-swiper-nav-dot-color: #e7e7e7;
  --wot-swiper-nav-dot-active-color: #{$uni-color-primary};
  margin-top: 24rpx;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
  }
}

.grid-example {
  margin-top: 24rpx;
}
</style>
