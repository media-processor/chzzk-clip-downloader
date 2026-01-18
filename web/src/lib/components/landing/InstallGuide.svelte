<script lang="ts">
	import StepCard from './StepCard.svelte';
	import { APP_INFO, PLACEHOLDER_IMAGES } from '$lib/constants';
</script>

<section id="install" class="bg-darkbg py-20">
	<div class="container mx-auto max-w-5xl px-6">
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">설치 방법</h2>
			<p class="text-gray-400">
				Chrome 웹 스토어 검수 대기 중으로, 현재는 개발자 모드를 통한 수동 설치가 필요합니다.
			</p>
		</div>

		<div class="space-y-0">
			<StepCard number={1} title="릴리즈 버전 다운로드">
				{#snippet description()}
					<span class="flex flex-col items-start gap-2">
						<p>아래 링크를 클릭하여 최신 버전(v{APP_INFO.version})을 다운로드하세요.</p>
						<a
							href={APP_INFO.downloadLink}
							class="inline-flex items-center gap-1 text-chzzk hover:underline"
						>
							{APP_INFO.version}.zip
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
								<polyline points="7 10 12 15 17 10" />
								<line x1="12" y1="15" x2="12" y2="3" />
							</svg>
						</a>
					</span>
				{/snippet}
			</StepCard>

			<StepCard
				number={2}
				title="압축 해제"
				description="다운로드 받은 zip 파일의 압축을 풀어주세요."
				image={PLACEHOLDER_IMAGES.install0}
			/>

			<StepCard number={3} title="확장 프로그램 관리 페이지 접속">
				{#snippet description()}
					<span>
						Chrome 주소창에 <code class="rounded bg-gray-800 px-2 py-1 text-pink-400"
							>chrome://extensions</code
						>
						를 입력하거나, 우측 상단 메뉴에서 <b>확장 프로그램 &gt; 확장 프로그램 관리</b>로
						이동하세요.
					</span>
				{/snippet}
			</StepCard>

			<StepCard
				number={4}
				title="개발자 모드 활성화"
				description="페이지 우측 상단에 있는 '개발자 모드' 토글 스위치를 켜주세요."
				image={PLACEHOLDER_IMAGES.install1}
			/>

			<StepCard
				number={5}
				title="압축 해제된 확장 프로그램 로드"
				image={PLACEHOLDER_IMAGES.install2}
			>
				{#snippet description()}
					<span>
						상단에 나타난 <b>'압축해제된 확장 프로그램 로드'</b> 버튼을 클릭하세요.
					</span>
				{/snippet}
			</StepCard>

			<StepCard
				number={6}
				title="디렉터리 선택"
				description="2번 단계에서 압축을 해제했던 폴더를 선택해주세요."
				image={PLACEHOLDER_IMAGES.install3}
			/>

			<StepCard
				number={7}
				title="설치 완료 확인"
				description="전체 확장 프로그램 목록에 '치지직 클립 다운로더' 카드가 보이면 설치가 성공적으로 완료된 것입니다."
				image={PLACEHOLDER_IMAGES.install4}
				isLast={true}
			/>
		</div>
	</div>
</section>
