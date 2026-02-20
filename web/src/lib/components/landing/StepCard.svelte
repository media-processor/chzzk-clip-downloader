<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		number: number;
		title: string;
		description?: Snippet | string;
		image?: string;
		isLast?: boolean;
	}

	let { number, title, description, image, isLast = false }: Props = $props();
</script>

<div class="relative flex gap-6">
	<!-- Timeline Line -->
	{#if !isLast}
		<div class="absolute top-12 bottom-0 left-[19px] w-0.5 bg-gray-800"></div>
	{/if}

	<!-- Number Badge -->
	<div class="flex-shrink-0">
		<div
			class="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-lg font-bold text-chzzk shadow-lg"
		>
			{number}
		</div>
	</div>

	<!-- Content -->
	<div class="flex-1 pb-16">
		<h3 class="mb-3 pt-1 text-xl font-semibold text-white">{title}</h3>

		{#if description}
			<div class="mb-6 leading-relaxed text-gray-400">
				{#if typeof description === 'string'}
					{description}
				{:else}
					{@render description()}
				{/if}
			</div>
		{/if}

		{#if image}
			<div
				class="group mt-4 max-w-2xl overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-xl"
			>
				<div class="flex gap-1.5 border-b border-gray-700 bg-gray-800/50 px-4 py-2">
					<div class="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
					<div class="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
					<div class="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
				</div>
				<img
					src={image}
					alt={title}
					class="h-auto w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
					loading="lazy"
				/>
			</div>
		{/if}
	</div>
</div>
