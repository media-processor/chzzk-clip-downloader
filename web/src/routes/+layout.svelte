<script lang="ts">
	import { base } from '$app/paths';
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();

	const siteUrl = 'https://media-processor.github.io/chzzk-clip-downloader';
	const ogImageUrl = 'https://raw.githubusercontent.com/media-processor/chzzk-clip-downloader/refs/heads/main/docs/example/og.png?v=1';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="치지직 클립을 소장하는 가장 쉬운 방법" />

	<!-- Open Graph -->
	<meta property="og:title" content="치지직 클립 다운로더" />
	<meta property="og:description" content="치지직 클립을 소장하는 가장 쉬운 방법" />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content="치지직 클립 다운로더" />

	<meta property="twitter:title" content="치지직 클립 다운로더" />
	<meta property="twitter:description" content="치지직 클립을 소장하는 가장 쉬운 방법" />
	<meta property="twitter:description" content="치지직 클립을 소장하는 가장 쉬운 방법" />
	<meta property="twitter:image" content={ogImageUrl} />

	{@html `
		<script type="application/ld+json">
		{
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				"name": "치지직 클립 다운로더",
				"applicationCategory": "BrowserExtension",
				"description": "치지직 클립을 소장하는 가장 쉬운 방법",
				"operatingSystem": "Chrome, Edge",
				"offers": {
						"@type": "Offer",
						"price": "0",
						"priceCurrency": "KRW"
				}
		}
		<\/script>
	`}
</svelte:head>

{@render children()}