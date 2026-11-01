<script lang="ts">
	import { FAQ_ITEMS } from '$lib/guide';
</script>

<section id="faq" class="border-t border-gray-800 bg-cardbg py-24">
	<div class="container mx-auto max-w-3xl px-6">
		<div class="mb-12 text-center">
			<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">자주 묻는 질문</h2>
			<p class="mx-auto max-w-2xl break-keep text-gray-400">
				사용자 리뷰와 문의에서 자주 나온 질문을 모았습니다
			</p>
		</div>

		<div class="space-y-3">
			{#each FAQ_ITEMS as item, i (i)}
				<details
					class="group rounded-xl border border-gray-800 bg-darkbg transition-colors open:border-gray-600"
				>
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-gray-200 [&::-webkit-details-marker]:hidden"
					>
						<span class="break-keep">{item.question}</span>
						<svg
							class="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</summary>
					<div class="space-y-2 px-5 pb-5 text-sm leading-relaxed break-keep text-gray-400">
						{#each item.answer as line, j (j)}
							<p>{line}</p>
						{/each}
					</div>
				</details>
			{/each}
		</div>

		<p class="mt-10 text-center text-sm break-keep text-gray-500">
			해결되지 않았다면 아래 문의하기 양식이나
			<a href="mailto:acidlab.help@gmail.com" class="text-chzzk hover:underline"
				>acidlab.help@gmail.com</a
			>으로 알려 주세요.
		</p>
	</div>
</section>
