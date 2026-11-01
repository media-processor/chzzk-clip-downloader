<script lang="ts">
	import { GUIDE_FEATURES } from '$lib/guide';

	let activeId = $state(GUIDE_FEATURES[0].id);
	const active = $derived(GUIDE_FEATURES.find((f) => f.id === activeId) ?? GUIDE_FEATURES[0]);
</script>

<section id="guide" class="border-t border-gray-800 bg-darkbg py-24">
	<div class="container mx-auto max-w-6xl px-6">
		<div class="mb-12 text-center">
			<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">기능 가이드</h2>
			<p class="mx-auto max-w-2xl break-keep text-gray-400">
				클립 다운로드부터 녹화, 캡처까지 기능별 사용 방법을 확인하세요
			</p>
		</div>

		<div class="flex flex-col gap-6 lg:flex-row lg:gap-10">
			<!-- 기능 목록 -->
			<div
				role="tablist"
				aria-label="기능 선택"
				class="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:w-60 lg:flex-shrink-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
			>
				{#each GUIDE_FEATURES as feature (feature.id)}
					<button
						type="button"
						role="tab"
						id={`guide-tab-${feature.id}`}
						aria-selected={activeId === feature.id}
						aria-controls="guide-panel"
						onclick={() => (activeId = feature.id)}
						class="flex-shrink-0 cursor-pointer rounded-lg border px-4 py-2.5 text-left text-sm font-medium whitespace-nowrap transition-colors lg:py-3 {activeId ===
						feature.id
							? 'border-chzzk/60 bg-chzzk/10 text-chzzk'
							: 'border-gray-800 bg-cardbg text-gray-300 hover:border-gray-600 hover:text-white'}"
					>
						{feature.title}
					</button>
				{/each}
			</div>

			<!-- 선택한 기능 설명 -->
			<div
				id="guide-panel"
				role="tabpanel"
				aria-labelledby={`guide-tab-${active.id}`}
				class="min-w-0 flex-1 rounded-2xl border border-gray-800 bg-cardbg p-6 md:p-8"
			>
				<h3 class="mb-2 text-2xl font-bold text-white">{active.title}</h3>
				<p class="mb-8 break-keep text-gray-400">{active.summary}</p>

				<ol class="space-y-4">
					{#each active.steps as step, i (i)}
						<li class="flex gap-4">
							<span
								class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-sm font-bold text-chzzk"
								>{i + 1}</span
							>
							<p class="pt-0.5 leading-relaxed break-keep text-gray-300">{step}</p>
						</li>
					{/each}
				</ol>

				{#if active.tips?.length}
					<div class="mt-8 rounded-xl border border-gray-800 bg-darkbg p-5">
						<p class="mb-3 text-sm font-semibold text-chzzk">알아 두면 좋은 점</p>
						<ul class="space-y-2">
							{#each active.tips as tip, i (i)}
								<li class="flex gap-2 text-sm leading-relaxed break-keep text-gray-400">
									<span class="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-500"></span>
									<span>{tip}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if active.images?.length}
					<div class="mt-8 grid gap-6 {active.images.length > 1 ? 'md:grid-cols-2' : ''}">
						{#each active.images as image (image.src)}
							<figure class="min-w-0">
								<div class="overflow-hidden rounded-lg border border-gray-800 bg-white">
									<img
										src={image.src}
										alt={image.alt}
										class="mx-auto w-full max-w-[600px]"
										loading="lazy"
									/>
								</div>
								{#if image.caption}
									<figcaption class="mt-2 text-xs break-keep text-gray-500">
										{image.caption}
									</figcaption>
								{/if}
							</figure>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
