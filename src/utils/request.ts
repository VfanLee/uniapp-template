import { isProd } from './env'

const baseUrl = isProd ? 'https://api.example.com' : 'http://localhost:3000'

const getErrorMessage = (data: unknown): string => {
  if (typeof data === 'object' && data !== null && 'message' in data) {
    const msg = (data as { message?: unknown }).message
    if (typeof msg === 'string' && msg.trim()) return msg
  }
  return '请求错误'
}

// 拦截器
const requestInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // baseUrl 拼接
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // options.timeout = 3000
    options.header = {
      ...(options.header as AnyObject),
    }

    const token = uni.getStorageSync('token') as string | undefined
    if (token) {
      // (options.header as Record<string, string>).Authorization = token
    }
  },
}

uni.addInterceptor('request', requestInterceptor)
uni.addInterceptor('uploadFile', requestInterceptor)

// 请求方法封装
export const request = <T = unknown>(option: UniApp.RequestOptions): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...option,
      // 响应成功
      success(res: UniApp.RequestSuccessCallbackResult) {
        console.log(res)
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as T)
        } else if (res.statusCode === 401) {
          // 如果需要，处理未授权的情况
          reject(new Error('无权限'))
        } else {
          const errorMsg = getErrorMessage(res.data)
          uni.showToast({
            icon: 'none',
            title: errorMsg,
          })
          reject(new Error(errorMsg))
        }
      },
      // 响应失败（网络错误）
      fail(err: UniApp.GeneralCallbackResult) {
        reject(err)
      },
    })
  })
}

export const get = <T = unknown>(url: string, params: AnyObject = {}): Promise<T> => {
  return request<T>({
    url,
    method: 'GET',
    data: params,
  })
}

export const post = <T = unknown>(url: string, data: AnyObject = {}): Promise<T> => {
  return request<T>({
    url,
    method: 'POST',
    data,
  })
}

export const put = <T = unknown>(url: string, data: AnyObject = {}): Promise<T> => {
  return request<T>({
    url,
    method: 'PUT',
    data,
  })
}

export const del = <T = unknown>(url: string, data: AnyObject = {}): Promise<T> => {
  return request<T>({
    url,
    method: 'DELETE',
    data,
  })
}
