/**
 * 手机状态栏的高度
 * @returns
 */
export function getStatusBarHeight(): number {
  const windowInfo = uni.getWindowInfo()
  const defaultStatusBarHeight = 0
  return windowInfo.statusBarHeight || defaultStatusBarHeight
}

/**
 * 获取右上角悬浮按钮布局
 * @returns
 */
export function getMenuButtonBoundingClientRect() {
  const defaultRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  }
  return uni.getMenuButtonBoundingClientRect() || defaultRect
}

/**
 * 获取标题栏高度
 * @returns
 */
export function getTitleBarHeight(): number {
  // #ifdef H5
  return 44
  // #endif

  // #ifndef H5
  const MENU_BUTTON = getMenuButtonBoundingClientRect()
  const { top, height } = MENU_BUTTON
  const statusBarHeight = getStatusBarHeight()
  const gap = top - statusBarHeight
  return height + gap * 2
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
