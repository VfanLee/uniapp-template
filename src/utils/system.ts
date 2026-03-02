export function getStatusBarHeight(): number {
  const SYSTEM_INFO = uni.getSystemInfoSync()
  const { statusBarHeight } = SYSTEM_INFO
  return statusBarHeight || 0
}

export function getTitleBarHeight(): number {
  // #ifdef H5
  return 44
  // #endif

  // #ifndef H5
  const SYSTEM_INFO = uni.getSystemInfoSync()
  const MENU_BUTTON = uni.getMenuButtonBoundingClientRect()
  const { top, height } = MENU_BUTTON
  const statusBarHeight = SYSTEM_INFO.statusBarHeight || 0
  const gap = top - statusBarHeight
  return height + gap * 3
  // #endif
}

export function downloadFile(url: string): void {
  uni.downloadFile({
    url,
    success(res: UniApp.DownloadSuccessData) {
      if (res.statusCode === 200) {
        uni.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success() {
            uni.showToast({
              title: '保存成功',
            })
          },
          fail() {
            uni.showToast({
              icon: 'none',
              title: '已取消',
            })
          },
        })
      }
    },
  })
}
