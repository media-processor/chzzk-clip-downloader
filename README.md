# 치지직 클립 다운로더

치지직 클립 다운로더 크롬 확장 프로그램의 공식 안내 페이지 레포지토리입니다.

- 안내 페이지: https://media-processor.github.io/chzzk-clip-downloader/
- 설치: [Chrome 웹 스토어](https://chromewebstore.google.com/detail/gkblidmkgpdljmiaapdlnmogmhfcidee)

## 주요 기능

- **클립 다운로드**: 클립을 TS 원본 또는 MP4로 저장
- **라이브 녹화 / 다시보기 구간 녹화**: 원하는 구간만 녹화 (단축키 `R`)
- **화면 캡처 + 갤러리**: 플레이어 화면 캡처(JPG/PNG 선택, 단축키 `S`), 갤러리 탭에서 확인·ZIP 일괄 다운로드

## 구조

- `web/`: SvelteKit 정적 사이트 (GitHub Pages 배포, `.github/workflows/deploy-web.yaml`)
- `web/static/images`, `web/static/videos`: 사이트에서 쓰는 이미지·영상
