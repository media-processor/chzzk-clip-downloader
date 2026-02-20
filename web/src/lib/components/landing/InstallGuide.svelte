<script lang="ts">
	import StepCard from './StepCard.svelte';
	import { APP_INFO, PLACEHOLDER_IMAGES } from '$lib/constants';

	let activeTab: 'store' | 'manual' = 'store';
</script>

<section id="install" class="bg-darkbg py-20">
	<div class="container mx-auto max-w-5xl px-6">
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">설치 방법</h2>
		</div>

		<!-- 탭 버튼 -->
		<div class="mb-8 flex gap-4 border-b border-gray-700">
			<button
				class="px-6 py-3 font-semibold transition-colors {activeTab === 'store'
					? 'border-b-2 border-chzzk text-chzzk'
					: 'text-gray-400 hover:text-white'}"
				onclick={() => (activeTab = 'store')}
			>
				Chrome 웹 스토어
			</button>
		</div>

		<!-- Chrome 웹 스토어 설치 -->
		<div class="space-y-0">
			<StepCard number={1} title="Chrome 웹 스토어 접속">
				{#snippet description()}
					<span class="flex flex-col items-start gap-2">
						<p>아래 버튼을 클릭하여 Chrome 웹 스토어의 확장 프로그램 페이지로 이동하세요.</p>
						<a
							href={APP_INFO.storeLink}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-lg border-2 border-chzzk px-4 py-2 font-semibold text-chzzk transition-all hover:bg-chzzk/20"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
							Chrome 웹 스토어에서 열기
						</a>
					</span>
				{/snippet}
			</StepCard>

			<StepCard
				number={2}
				title="Chrome에 추가"
				description="페이지 우측 상단의 'Chrome에 추가' 버튼을 클릭하세요."
			/>

			<StepCard
				number={3}
				title="확장 프로그램 추가 확인"
				description="팝업 창에서 '확장 프로그램 추가' 버튼을 클릭하여 설치를 완료하세요."
				isLast={true}
			/>
		</div>
	</div>
</section>
