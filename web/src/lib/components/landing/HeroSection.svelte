<script lang="ts">
	import { onMount } from 'svelte';
	import { APP_INFO, PLACEHOLDER_IMAGES } from '$lib/constants';

	let videoElement = $state<HTMLVideoElement>();
	let isVideoLoaded = $state(false);

	function handleVideoLoaded() {
		isVideoLoaded = true;
		// 자동재생이 차단될 수 있으므로 명시적으로 재생 시도
		if (videoElement) {
			videoElement.play().catch((error) => {
				console.log('Auto-play prevented:', error);
			});
		}
	}

	onMount(() => {
		// 컴포넌트 마운트 시 비디오 로드 시도
		if (videoElement) {
			videoElement.load();
		}
	});
</script>

<section class="relative overflow-hidden border-b border-gray-800 pt-32 pb-20">
	<!-- Background Gradient Effect -->
	<div class="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
		<div
			class="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-chzzk/10 opacity-40 blur-[100px]"
		></div>
		<div
			class="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 opacity-30 blur-[100px]"
		></div>
	</div>

	<div class="relative z-10 container mx-auto px-6">
		<div class="flex flex-col items-center gap-16 lg:flex-row">
			<!-- Left Content -->
			<div class="max-w-2xl flex-1">
				<div
					class="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 backdrop-blur-sm"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-chzzk"></span>
					<span class="text-sm font-medium text-gray-300"
						>v{APP_INFO.version} Release Available</span
					>
				</div>

				<h1
					class="mb-6 text-5xl leading-[1.1] font-bold tracking-tight break-keep text-white md:text-7xl"
				>
					치지직 클립을 <br />
					<span class="bg-gradient-to-r from-chzzk to-emerald-500 bg-clip-text text-transparent">
						소장하는
					</span><br />
					<span class="bg-gradient-to-r from-chzzk to-emerald-500 bg-clip-text text-transparent">
						가장 쉬운 방법
					</span>
				</h1>

				<p class="mb-10 text-xl leading-relaxed break-keep text-gray-400">
					Chrome 확장 프로그램으로 치지직의 재미있는 순간들을 놓치지 말고 다운로드하세요. 빠르고
					간편하며, 누구나 쉽게 사용할 수 있습니다.
				</p>

				<div class="flex flex-col gap-4 sm:flex-row">
					<a href={APP_INFO.storeLink} target="_blank" rel="noreferrer">
						<button
							class="inline-flex cursor-pointer items-center justify-center rounded-lg bg-chzzk px-6 py-3.5 text-lg font-medium text-black transition-colors duration-200 hover:bg-chzzk-dark focus:ring-2 focus:ring-chzzk focus:ring-offset-2 focus:ring-offset-darkbg focus:outline-none"
						>
							<svg
								class="mr-2"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10" />
								<circle cx="12" cy="12" r="4" />
								<line x1="21.17" y1="8" x2="12" y2="8" />
								<line x1="3.95" y1="6.06" x2="8.54" y2="14" />
								<line x1="10.88" y1="21.94" x2="15.46" y2="14" />
							</svg>
							Chrome 웹 스토어
						</button>
					</a>
				</div>

				<!-- <div class="mt-8 flex items-center gap-6 text-sm text-gray-500">
					<div class="flex items-center gap-2">
						<span class="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
						<span class="font-mono">{APP_INFO.checksum.substring(0, 32)}...</span>
					</div>
				</div> -->
			</div>

			<!-- Right Content - Video Demo -->
			<div class="relative w-full flex-1">
				<div
					class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-cardbg shadow-2xl shadow-chzzk/5"
					style="aspect-ratio: 16/9;"
				>
					<!-- Fake Browser Header -->
					<div
						class="relative z-10 flex h-10 items-center gap-2 border-b border-gray-800 bg-gray-900/50 px-4"
					>
						<div class="h-3 w-3 rounded-full bg-red-500/20"></div>
						<div class="h-3 w-3 rounded-full bg-yellow-500/20"></div>
						<div class="h-3 w-3 rounded-full bg-green-500/20"></div>
						<div class="ml-4 h-5 w-2/3 rounded-md bg-gray-800/50"></div>
					</div>

					<!-- Video Content Area -->
					<div class="relative bg-black" style="height: calc(100% - 2.5rem);">
						<video
							bind:this={videoElement}
							poster={PLACEHOLDER_IMAGES.thumbnail}
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
							<source src={PLACEHOLDER_IMAGES.video} type="video/mp4" />
							<track kind="captions" />
						</video>

						<!-- Loading overlay with glow effect -->
						{#if !isVideoLoaded}
							<div
								class="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/30 to-cardbg"
							>
								<div class="relative">
									<div class="absolute inset-0 bg-chzzk opacity-20 blur-[60px]"></div>
									<!-- Icon Visualization -->
									<div
										class="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-gray-700 bg-black shadow-2xl"
									>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											class="h-16 w-16 animate-pulse text-chzzk"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
											<polyline points="7 10 12 15 17 10" />
											<line x1="12" y1="15" x2="12" y2="3" />
										</svg>
									</div>
								</div>
							</div>
						{/if}
					</div>

					<!-- Hover Effect overlay -->
					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-chzzk/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					></div>
				</div>

				<!-- Decorative Grid -->
				<div
					class="absolute -right-10 -bottom-10 -z-10 h-64 w-64 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
				></div>
			</div>
		</div>
	</div>
</section>
