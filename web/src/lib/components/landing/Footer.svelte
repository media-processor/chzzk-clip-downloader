<script lang="ts">
	import { APP_INFO } from '$lib/constants';
</script>

<footer class="border-t border-gray-800 bg-darkbg py-12">
	<div class="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
		<div>
			<h4 class="mb-2 text-lg font-bold text-white">치지직 클립 다운로더</h4>
			<p class="text-sm text-gray-500">Not affiliated with NAVER or CHZZK</p>
		</div>

		<div class="flex items-center gap-6">
			<!-- <a href={APP_INFO.githubLink} class="text-gray-400 transition-colors hover:text-white">
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
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/>
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
			</a> -->
			<a
				href={APP_INFO.storeLink}
				target="_blank"
				rel="noreferrer"
				class="text-gray-400 transition-colors hover:text-white"
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
					<circle cx="12" cy="12" r="10" />
					<circle cx="12" cy="12" r="4" />
					<line x1="21.17" y1="8" x2="12" y2="8" />
					<line x1="3.95" y1="6.06" x2="8.54" y2="14" />
					<line x1="10.88" y1="21.94" x2="15.46" y2="14" />
				</svg>
			</a>
			<a href={APP_INFO.ts2mp4Link} class="text-gray-400 transition-colors hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-cog-icon lucide-cog"
					><path d="M11 10.27 7 3.34" /><path d="m11 13.73-4 6.93" /><path d="M12 22v-2" /><path
						d="M12 2v2"
					/><path d="M14 12h8" /><path d="m17 20.66-1-1.73" /><path d="m17 3.34-1 1.73" /><path
						d="M2 12h2"
					/><path d="m20.66 17-1.73-1" /><path d="m20.66 7-1.73 1" /><path
						d="m3.34 17 1.73-1"
					/><path d="m3.34 7 1.73 1" /><circle cx="12" cy="12" r="2" /><circle
						cx="12"
						cy="12"
						r="8"
					/></svg
				>
			</a>
		</div>
	</div>
	<div class="container mx-auto mt-8 px-6 text-center md:text-left">
		<p class="text-xs text-gray-600">
			Released under MIT License. Current Version: {APP_INFO.version}
		</p>
		<p class="text-xs text-gray-600">Powered by WASM: ts2mp4, SvelteKit, and TailwindCSS</p>
		<p class="mt-2 text-xs text-gray-600">© 2026 d3fau1t All rights reserved.</p>
	</div>
</footer>
