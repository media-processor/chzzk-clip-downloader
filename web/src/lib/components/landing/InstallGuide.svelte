<script lang="ts">
	import StepCard from './StepCard.svelte';
	import { APP_INFO, PLACEHOLDER_IMAGES } from '$lib/constants';

	let activeTab: 'store' | 'manual' = 'store';
</script>

<section id="install" class="bg-darkbg py-20">
	<div class="container mx-auto max-w-5xl px-6">
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">설치 방법</h2>
			<p class="text-gray-400">
				Chrome 웹 스토어 또는 수동 설치 중 선호하는 방법을 선택하세요.
			</p>
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
			<button
				class="px-6 py-3 font-semibold transition-colors {activeTab === 'manual'
					? 'border-b-2 border-chzzk text-chzzk'
					: 'text-gray-400 hover:text-white'}"
				onclick={() => (activeTab = 'manual')}
			>
				수동 설치
			</button>
		</div>

		{#if activeTab === 'store'}
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
		{:else}
			<!-- 수동 설치 -->
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
		{/if}
	</div>
</section>
