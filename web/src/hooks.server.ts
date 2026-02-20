import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		// 문서화된 언어별 페이지 처리가 필요하지 않으므로 기본 HTML 반환
		// NOTE: 기존에 paraglide를 사용하여 다국어 처리를 했으나, 현재는 단일 언어(한국어)만 지원하므로 이 부분을 제거함
		transformPageChunk: ({ html }) => html
	});
};
