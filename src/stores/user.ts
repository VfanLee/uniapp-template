import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY = 'mock_user_info'

interface LoginPayload {
  avatar: string
  nickname: string
}

interface StoredUserInfo {
  isLoggedIn?: boolean
  avatar?: string
  nickname?: string
}

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const userInfo = ref<LoginPayload | null>(null)

  const resetState = () => {
    isLoggedIn.value = false
    userInfo.value = {
      avatar: '',
      nickname: '',
    }
  }

  const persist = () => {
    uni.setStorageSync(STORAGE_KEY, {
      isLoggedIn: isLoggedIn.value,
      avatar: userInfo.value?.avatar || '',
      nickname: userInfo.value?.nickname || '',
    })
  }

  const hydrate = () => {
    const data = (uni.getStorageSync(STORAGE_KEY) || {}) as StoredUserInfo

    if (data.isLoggedIn && data.nickname) {
      isLoggedIn.value = true
      userInfo.value = {
        avatar: data.avatar || '',
        nickname: data.nickname,
      }
      return
    }

    resetState()
  }

  const login = (payload: LoginPayload) => {
    isLoggedIn.value = true
    userInfo.value = {
      avatar: payload.avatar || '',
      nickname: payload.nickname,
    }
    persist()
  }

  const logout = () => {
    resetState()
    uni.removeStorageSync(STORAGE_KEY)
  }

  hydrate()

  return {
    isLoggedIn,
    userInfo,
    hydrate,
    login,
    logout,
    resetState,
  }
})
