<script lang="ts">
	import { onMount } from 'svelte';
	import { PLACEHOLDER_IMAGES } from '$lib/constants';

	let videoElement = $state<HTMLVideoElement>();
	let isVideoLoaded = $state(false);
	let isPlaying = $state(false);

	function handleVideoLoaded() {
		isVideoLoaded = true;
		if (videoElement) {
			videoElement.play().catch((error) => {
				console.log('Auto-play prevented:', error);
			});
			isPlaying = true;
		}
	}

	function togglePlayPause() {
		if (!videoElement) return;

		if (videoElement.paused) {
			videoElement.play();
			isPlaying = true;
		} else {
			videoElement.pause();
			isPlaying = false;
		}
	}

	onMount(() => {
		if (videoElement) {
			videoElement.load();
		}
	});
</script>

<section id="usage" class="border-t border-gray-800 bg-cardbg py-24">
	<div class="container mx-auto max-w-6xl px-6">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">사용 방법</h2>
			<p class="mx-auto mb-4 max-w-2xl break-keep text-gray-400">
				설치가 완료되었다면 이제 치지직의 클립을 소장할 준비가 되었습니다
			</p>
			<p class="mx-auto max-w-2xl break-keep text-gray-400">
				간단한 몇 번의 클릭으로 다운로드하세요
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
			<!-- Step 1 -->
			<div
				class="rounded-2xl border border-gray-800 bg-darkbg p-8 transition-colors hover:border-gray-600"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-chzzk"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="12" y1="5" x2="12" y2="19" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-bold text-white">1. 확장 프로그램 고정</h3>
				<p class="mb-6 break-keep text-gray-400">
					브라우저 우측 상단 퍼즐 아이콘을 클릭한 후, '치지직 클립 다운로더' 옆의 핀 아이콘을
					클릭하여 고정해두면 더 편리하게 사용할 수 있습니다.
				</p>
				<div class="overflow-hidden rounded-lg border border-gray-800">
					<img src={PLACEHOLDER_IMAGES.usage1} alt="Pin Extension" class="w-full" loading="lazy" />
				</div>
			</div>

			<!-- Step 2 -->
			<div
				class="rounded-2xl border border-gray-800 bg-darkbg p-8 transition-colors hover:border-gray-600"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-chzzk"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-bold text-white">2. 클립 선택 및 실행</h3>
				<p class="mb-6 break-keep text-gray-400">
					치지직 클립 페이지에 접속하여 다운로드하고 싶은 클립을 클릭하세요. 우측 상단에 고정해둔
					다운로더 아이콘을 클릭합니다.
				</p>
				<div class="overflow-hidden rounded-lg border border-gray-800">
					<img src={PLACEHOLDER_IMAGES.usage2} alt="Popup Usage" class="w-full" loading="lazy" />
				</div>
			</div>

			<!-- Step 3 (Side Panel) -->
			<div
				class="rounded-2xl border border-gray-800 bg-darkbg p-8 transition-colors hover:border-gray-600 md:col-span-2"
			>
				<div class="flex flex-col items-center gap-8 lg:flex-row">
					<div class="flex-1">
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-chzzk"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m9 18 6-6-6-6" />
							</svg>
						</div>
						<h3 class="mb-4 text-xl font-bold text-white">3. 사이드 패널 활용</h3>
						<p class="mb-4 break-keep text-gray-400">
							아이콘을 <span class="font-semibold text-white">마우스 오른쪽 버튼</span>으로 클릭하면
							사이드 패널이 열립니다.
						</p>
					</div>
					<div class="w-full flex-1 lg:max-w-md">
						<div class="overflow-hidden rounded-lg border border-gray-800 shadow-2xl">
							<img
								src={PLACEHOLDER_IMAGES.usage3}
								alt="Side Panel Usage"
								class="w-full"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 4 (Sidepanel usage example with video) -->
			<div
				class="rounded-2xl border border-gray-800 bg-darkbg p-8 transition-colors hover:border-gray-600 md:col-span-2"
			>
				<div class="mb-8 text-center">
					<div
						class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-chzzk"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">4. 실제 사용 예시</h3>
					<p class="mx-auto max-w-2xl break-keep text-gray-400">
						영상을 통해 치지직 클립 다운로더의 실제 동작을 확인하세요
					</p>
					<p class="mx-auto mb-6 max-w-2xl break-keep text-gray-400">
						클릭 한 번으로 간편하게 클립을 다운로드할 수 있습니다
					</p>
					<div class="mx-auto max-w-md">
						<p class="mb-4 text-center text-gray-400">지원되는 파일 형식:</p>
						<ul class="space-y-3">
							<li class="flex items-center justify-center gap-3 text-sm text-gray-400">
								<span
									class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs"
									>✓</span
								>
								TS 파일 (원본 스트림) 다운로드
							</li>
							<li class="flex items-center justify-center gap-3 text-sm text-gray-400">
								<span
									class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs"
									>✓</span
								>
								MP4 파일 (호환성) 다운로드
							</li>
						</ul>
					</div>
				</div>

				<!-- Video Demo -->
				<div class="mx-auto max-w-4xl">
					<div
						class="group relative overflow-hidden rounded-xl border border-gray-800 bg-black shadow-2xl"
						style="aspect-ratio: 16/9;"
					>
						<!-- Fake Browser Header -->
						<div
							class="relative z-10 flex h-10 items-center gap-2 border-b border-gray-800 bg-gray-900/50 px-4"
						>
							<div class="h-3 w-3 rounded-full bg-red-500/30"></div>
							<div class="h-3 w-3 rounded-full bg-yellow-500/30"></div>
							<div class="h-3 w-3 rounded-full bg-green-500/30"></div>
							<div class="ml-4 h-5 w-2/3 rounded-md bg-gray-800/50"></div>
						</div>

						<!-- Video Content Area -->
						<div class="relative bg-black" style="height: calc(100% - 2.5rem);">
							<video
								bind:this={videoElement}
								poster={PLACEHOLDER_IMAGES.thumbnail2}
								autoplay
								loop
								muted
								playsinline
								preload="auto"
								onloadeddata={handleVideoLoaded}
								oncanplay={handleVideoLoaded}
								class="h-full w-full object-cover transition-opacity duration-500"
								style="opacity: {isVideoLoaded ? '1' : '0'};"
							>
								<source src={PLACEHOLDER_IMAGES.video2} type="video/mp4" />
								<track kind="captions" />
							</video>

							<!-- Loading overlay -->
							{#if !isVideoLoaded}
								<div
									class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
								>
									<div class="text-center">
										<div class="relative mx-auto mb-4 h-20 w-20">
											<div
												class="absolute inset-0 animate-pulse rounded-full bg-chzzk/20 blur-xl"
											></div>
											<div
												class="relative flex h-20 w-20 items-center justify-center rounded-full border border-gray-700 bg-gray-800"
											>
												<svg
													viewBox="0 0 24 24"
													fill="none"
													class="h-10 w-10 animate-pulse text-chzzk"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
												</svg>
											</div>
										</div>
										<p class="text-sm text-gray-500">영상 로딩 중...</p>
									</div>
								</div>
							{/if}

							<!-- Play button overlay (appears on hover when video is loaded) -->
							{#if isVideoLoaded}
								<button
									onclick={togglePlayPause}
									class="group/play absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 hover:bg-black/30"
								>
									<div
										class="flex h-16 w-16 items-center justify-center rounded-full bg-chzzk/90 opacity-0 shadow-lg transition-opacity duration-300 group-hover/play:opacity-100"
									>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											class="h-8 w-8 text-black"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											{#if !isPlaying}
												<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
											{:else}
												<rect x="6" y="4" width="4" height="16" fill="currentColor" />
												<rect x="14" y="4" width="4" height="16" fill="currentColor" />
											{/if}
										</svg>
									</div>
								</button>
							{/if}
						</div>

						<!-- Hover gradient overlay -->
						<div
							class="pointer-events-none absolute inset-0 bg-gradient-to-t from-chzzk/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
