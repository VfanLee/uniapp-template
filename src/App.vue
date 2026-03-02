<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')

  // // #ifdef MP-WEIXIN
  // uni.onTabBarMidButtonTap(() => {
  //   uni.navigateTo({
  //     url: '/pages/search/search',
  //   })
  // })
  // // #endif
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
