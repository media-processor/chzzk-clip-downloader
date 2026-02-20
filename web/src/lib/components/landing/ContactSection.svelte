<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { PLACEHOLDER_IMAGES } from '$lib/constants';

	let videoElement = $state<HTMLVideoElement>();
	let isVideoLoaded = $state(false);
	let isPlaying = $state(false);
	let isSubmitted = $state(false);
	let isSubmitting = $state(false);
	let errorMessage = $state('');

	let formData = $state({
		name: '',
		email: '',
		content: ''
	});

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

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (isSubmitting) return;

		// 간단한 유효성 검사
		if (!formData.name.trim() || !formData.email.trim() || !formData.content.trim()) {
			errorMessage = '모든 필드를 입력해주세요.';
			return;
		}

		if (formData.content.trim().length < 10) {
			errorMessage = '문의 내용은 최소 10자 이상 입력해주세요.';
			return;
		}

		isSubmitting = true;
		errorMessage = '';

		try {
			const response = await fetch('https://web.d3fau1t.net/api/feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					content: formData.content
				})
			});

			if (response.ok) {
				isSubmitted = true;
			} else {
				errorMessage = '메시지 전송에 실패했습니다. 다시 시도해주세요.';
			}
		} catch (error) {
			console.error('Error submitting feedback:', error);
			errorMessage = '네트워크 오류가 발생했습니다. 다시 시도해주세요.';
		} finally {
			isSubmitting = false;
		}
	}

	onMount(() => {
		if (videoElement) {
			videoElement.load();
		}
	});
</script>

<section id="contact" class="border-t border-gray-800 bg-cardbg py-24">
  <div class="container mx-auto max-w-6xl px-6">
    <div class="mb-20 text-center">
      <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">문의하기</h2>
      <p class="mx-auto mb-4 max-w-2xl break-keep text-gray-400">
        치지직 클립 다운로더에 대한 질문이나 피드백이 있으신가요?
      </p>
      <p class="mx-auto max-w-2xl break-keep text-gray-400">
        아래 양식을 통해 언제든지 연락주세요!
      </p>
    </div>

    {#if !isSubmitted}
      <form class="mx-auto max-w-2xl" on:submit={handleSubmit} transition:fade={{ duration: 300 }}>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-300 mb-1">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            bind:value={formData.name}
            required
            class="w-full rounded-md border border-gray-700 bg-darkbg px-3 py-2 text-sm text-gray-300 focus:border-chzzk focus:ring-chzzk focus:ring-1 focus:outline-none"
            placeholder="안녕하세요"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-300 mb-1">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            bind:value={formData.email}
            required
            class="w-full rounded-md border border-gray-700 bg-darkbg px-3 py-2 text-sm text-gray-300 focus:border-chzzk focus:ring-chzzk focus:ring-1 focus:outline-none"
            placeholder="acidlab.help@gmail.com"
          />
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-300 mb-1">문의 내용</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            bind:value={formData.content}
            required
            minlength="10"
            class="w-full rounded-md border border-gray-700 bg-darkbg px-3 py-2 text-sm text-gray-300 focus:border-chzzk focus:ring-chzzk focus:ring-1 focus:outline-none"
            placeholder="문의 내용을 입력해주세요. (최소 10자 이상)"
          ></textarea>
        </div>

        {#if errorMessage}
          <div class="mb-4 rounded-md bg-red-900/20 border border-red-800 px-4 py-3 text-sm text-red-400" transition:slide={{ duration: 200 }}>
            {errorMessage}
          </div>
        {/if}

        <div class="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            class="cursor-pointer inline-flex items-center justify-center rounded-lg bg-chzzk px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-chzzk-dark focus:ring-2 focus:ring-chzzk focus:ring-offset-2 focus:ring-offset-darkbg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '전송 중...' : '문의하기'}
          </button>
        </div>
      </form>
    {:else}
      <div class="mx-auto max-w-2xl text-center py-12" transition:fade={{ duration: 300, delay: 150 }}>
        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-chzzk/20">
          <svg class="w-8 h-8 text-chzzk" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">메시지가 전송되었습니다.</h3>
        <p class="text-gray-400">
          소중한 의견 감사합니다. 빠른 시일 내에 답변 드리겠습니다.
        </p>
      </div>
    {/if}
  </div>
</section>
