import { defineStore } from 'pinia'

export const useCacheStore = defineStore('cache', () => {
  const clearCache = () => {
    uni.clearStorageSync()
    uni.showToast({ title: '缓存已清除', icon: 'success' })
  }

  return {
    clearCache,
  }
})
