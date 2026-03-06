const fallbackPlatform = (): string => {
	if (typeof uni.getDeviceInfo === 'function') {
		return uni.getDeviceInfo().platform || ''
	}

	return ''
}

export const platform = fallbackPlatform()
