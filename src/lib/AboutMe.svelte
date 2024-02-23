<script lang="ts">
	import { InstagramLogo } from 'radix-icons-svelte';
	import { QRCode, ScrollDownButton } from '$lib';

	export let portrait: string;
	export let portfolio: string;

	let isPortraitFlipping: boolean = false;
	let isCardOnPortraitSide: boolean = true;

	function handleAvatarClick(event: MouseEvent & { currentTarget: EventTarget & HTMLElement }) {
		isPortraitFlipping = true;
		console.log(event);
	}

	function handleAvatarAnimationEnd(
		event: AnimationEvent & { currentTarget: EventTarget & HTMLElement }
	) {
		isPortraitFlipping = false;
		isCardOnPortraitSide = !isCardOnPortraitSide;
	}

	const bioDescription =
		'Innovative fashion designer and stylist, graduate of the Artistic School of Fashion Design,	with more than 3 years experience in the fashion industry. Proficient in conceptualizing and executing fashion shoots and managing styling for various editorial projects. Experienced in working with models, photographers, and creative teams to create captivating and high-quality images. Ready to bring fresh, trendsetting ideas to your brand.';

	$: {
		console.log(isCardOnPortraitSide, isPortraitFlipping);
	}
</script>

<section
	class="h-screen w-screen bg-white snap-start selection:text-fuchsia-300 selection:bg-fuchsia-800">
	<header
		class="h-[20svh] flex justify-center portrait:justify-center md:justify-between lg:justify-center items-center p-2 lg:p-4">
		<img
			src={portfolio}
			alt="portfolio"
			class="h-full object-scale-down min-w-[12rem] max-w-[32rem]" />
		<h1
			class="portrait:hidden md:block lg:hidden text-2xl text-center font-barlow font-bold uppercase border border-zinc-700 rounded-[50%] py-4 px-8 tracking-widest drop-shadow-2xl hover:animate-[spin-y_1.5s_ease-in-out_1]">
			Martyna Regucka
		</h1>
	</header>
	<div class="h-[80svh] grid portrait:grid-cols-1 landscape:grid-cols-3">
		<div
			class="md:h-full w-full flex flex-col max-sm:justify-between justify-end items-start p-6 pb-2 lg:p-10 lg:pr-5 col-span-1 sm:col-span-2">
			<div class="w-full hidden landscape:lg:flex flex-row justify-end">
				<QRCode size={135} color="#333333" />
			</div>
			<div
				class="w-full portrait:flex landscape:hidden landscape:md:hidden landscape:lg:flex flex-row justify-center md:justify-between items-center mb-4">
				<h1
					class="text-2xl sm:text-4xl text-center font-barlow font-bold uppercase border border-zinc-700 rounded-[50%] max-sm:p-6 py-8 px-12 tracking-widest drop-shadow-2xl hover:animate-[spin-y_1.5s_ease-in-out_1]">
					Martyna Regucka
				</h1>
				<a
					href="https://www.instagram.com/martynaregucka/"
					target="_blank"
					class="hidden lg:flex flex-row justify-center items-center">
					<InstagramLogo class="mr-1" /> martynaregucka
				</a>
			</div>
			<p
				class="hidden sm:block text-justify uppercase text-sm md:text-base mb-4 lg:mb-6 text-zinc-700">
				{bioDescription}
			</p>
			<div class="w-full flex justify-center items-center">
				<ScrollDownButton />
			</div>
		</div>
		<div
			class="h-[70svh] lg:h-[80svh] portrait:h-[50svh] w-full p-2 sm:p-4 lg:p-12 row-start-1 landscape:col-start-3">
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="h-full w-full">
				<img
					class="h-full w-full object-scale-down portrait:max-md:backface-hidden {isPortraitFlipping &&
						isCardOnPortraitSide &&
						'animate-flip-y'} {isPortraitFlipping &&
						!isCardOnPortraitSide &&
						'animate-flip-y-reverse'} {isCardOnPortraitSide ? 'rotate-y-0' : 'rotate-y-180'}"
					src={portrait}
					alt="Portrait of a beautiful girl."
					on:click={handleAvatarClick}
					on:animationend={handleAvatarAnimationEnd} />
				<p
					class="hidden portrait:max-md:block h-full overflow-y-auto overflow-x-hidden w-full px-6 text-justify text-lg relative -top-full left-[50%] translate-x-[-50%] backface-hidden {isPortraitFlipping &&
						isCardOnPortraitSide &&
						'animate-flip-y-reverse'} {isPortraitFlipping &&
						!isCardOnPortraitSide &&
						'animate-flip-y'} {isCardOnPortraitSide ? 'rotate-y-180' : 'rotate-y-0'}"
					on:click={handleAvatarClick}>
					{bioDescription}
				</p>
			</div>
		</div>
	</div>
</section>
