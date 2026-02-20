<script lang="ts">
	interface Props {
		variant?: 'primary' | 'secondary' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		icon?: any;
		class?: string;
		[key: string]: any;
	}

	let {
		variant = 'primary',
		size = 'md',
		icon,
		class: className = '',
		children,
		...props
	}: Props = $props();

	const baseStyles =
		'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkbg';

	const variants = {
		primary: 'bg-chzzk text-black hover:bg-chzzk-dark focus:ring-chzzk',
		secondary: 'bg-white text-black hover:bg-gray-200 focus:ring-white',
		outline:
			'border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white focus:ring-gray-500'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-5 py-2.5 text-base',
		lg: 'px-6 py-3.5 text-lg'
	};
</script>

<button class="{baseStyles} {variants[variant]} {sizes[size]} {className}" {...props}>
	{#if icon}
		<span class="mr-2">{@render icon()}</span>
	{/if}
	{@render children?.()}
</button>
