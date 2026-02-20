<script lang="ts">
	import { onMount } from 'svelte';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import InstallGuide from '$lib/components/landing/InstallGuide.svelte';
	import UsageGuide from '$lib/components/landing/UsageGuide.svelte';
	import ContactSection from '$lib/components/landing/ContactSection.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import { APP_INFO } from '$lib/constants';
	import favicon from '$lib/assets/favicon.png';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToSection(id: string) {
		isMobileMenuOpen = false;
		const element = document.getElementById(id);
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="flex min-h-screen flex-col bg-darkbg text-gray-100">
	<!-- Sticky Header -->
	<header
		class="fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 {isScrolled
			? 'border-gray-800 bg-darkbg/90 py-3 backdrop-blur-md'
			: 'border-transparent bg-transparent py-5'}"
	>
		<div class="container mx-auto flex items-center justify-between px-6">
			<button
				class="flex cursor-pointer items-center gap-2"
				onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				<div class="h-8 w-8 overflow-hidden rounded-lg flex-shrink-0">
					<img 
						src={favicon} 
						alt="Chzzk Downloader Logo" 
						class="h-full w-full object-cover" 
						width="32"
						height="32"
						loading="eager"
						decoding="async"
					/>
				</div>
				<span class="hidden text-lg font-bold tracking-tight sm:block">치지직 클립 다운로더</span>
			</button>

			<!-- Desktop Nav -->
			<nav class="hidden items-center gap-8 md:flex">
				<button
					onclick={() => scrollToSection('install')}
					class="cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>설치 방법</button
				>
				<button
					onclick={() => scrollToSection('usage')}
					class="cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>사용 방법</button
				>
				<button
					onclick={() => scrollToSection('contact')}
					class="cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>문의하기</button
				>
				<!-- <a
					href={APP_INFO.githubLink}
					target="_blank"
					rel="noreferrer"
					class="text-sm font-medium text-gray-300 transition-colors hover:text-white">GitHub</a
				> -->
				<a href={APP_INFO.storeLink}>
					<button
						class="inline-flex cursor-pointer items-center justify-center rounded-lg bg-chzzk px-3 py-1.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-chzzk-dark focus:ring-2 focus:ring-chzzk focus:ring-offset-2 focus:ring-offset-darkbg focus:outline-none"
					>
						다운로드
					</button>
				</a>
			</nav>

			<!-- Mobile Menu Toggle -->
			<button
				class="text-gray-300 md:hidden"
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			>
				{#if isMobileMenuOpen}
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
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				{:else}
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
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Nav Dropdown -->
		{#if isMobileMenuOpen}
			<div
				class="animate-fade-in-down absolute top-full right-0 left-0 flex flex-col gap-4 border-b border-gray-800 bg-cardbg p-4 shadow-xl md:hidden"
			>
				<button
					onclick={() => scrollToSection('install')}
					class="py-2 text-left text-gray-300 hover:text-white">설치 방법</button
				>
				<button
					onclick={() => scrollToSection('usage')}
					class="py-2 text-left text-gray-300 hover:text-white">사용 방법</button
				>
				<button
					onclick={() => scrollToSection('contact')}
					class="py-2 text-left text-gray-300 hover:text-white">문의하기</button
				>
				<a href={APP_INFO.githubLink} class="py-2 text-gray-300 hover:text-white">GitHub</a>
				<a href={APP_INFO.storeLink} class="w-full">
					<button
						class="inline-flex w-full items-center justify-center rounded-lg bg-chzzk px-5 py-2.5 text-base font-medium text-black transition-colors duration-200 hover:bg-chzzk-dark focus:ring-2 focus:ring-chzzk focus:ring-offset-2 focus:ring-offset-darkbg focus:outline-none"
					>
						다운로드
					</button>
				</a>
			</div>
		{/if}
	</header>

	<main class="flex-grow">
		<HeroSection />
		<InstallGuide />
		<UsageGuide />
		<ContactSection />
	</main>

	<Footer />
</div>
