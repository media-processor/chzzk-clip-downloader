import { base } from '$app/paths';

export const APP_INFO = {
	version: '1.11.8',
	storeLink:
		'https://chromewebstore.google.com/detail/%EC%B9%98%EC%A7%80%EC%A7%81-%ED%81%B4%EB%A6%BD-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%8D%94/gkblidmkgpdljmiaapdlnmogmhfcidee?authuser=0&hl=ko',
	githubLink: 'https://github.com/media-processor/chzzk-clip-downloader',
	ts2mp4Link: 'https://github.com/aciddust/ts2mp4'
};

// GitHub Pages(web/static)에서 직접 제공하는 자산. base 경로(/chzzk-clip-downloader)를 붙여 사용.
export const ASSETS = {
	usagePin: `${base}/images/usage-pin.png`,
	usagePopup: `${base}/images/guide/clips.webp`,
	usageSidePanel: `${base}/images/usage-sidepanel.png`,
	heroPoster: `${base}/images/hero-poster.jpg`,
	usagePoster: `${base}/images/usage-poster.jpg`,
	heroVideo: `${base}/videos/main.mp4`,
	usageVideo: `${base}/videos/usage.mp4`
};
