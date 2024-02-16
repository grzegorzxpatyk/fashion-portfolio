<script lang="ts">
	import { InstagramLogo } from 'radix-icons-svelte';
	import { QRCode, ScrollDownButton } from '$lib';

	export let portrait: string;
	export let portfolio: string;
</script>

<section
	class="h-screen w-screen bg-white snap-start selection:text-fuchsia-300 selection:bg-fuchsia-800"
>
	<header class="h-[20vh] flex justify-between lg:justify-center items-center p-2 lg:p-4">
		<img src={portfolio} alt="portfolio" class="h-full object-scale-down min-w-[12rem]" />
		<h1
			class="hidden md:block lg:hidden text-2xl text-center font-barlow font-bold uppercase border border-zinc-700 rounded-[50%] py-4 px-8 tracking-widest drop-shadow-2xl hover:animate-[spin-y_1.5s_ease-in-out_1]"
		>
			Martyna Regucka
		</h1>
	</header>
	<div class="h-[80vh] grid grid-cols-1 md:grid-cols-3">
		<div
			class="md:h-full w-full flex flex-col max-sm:justify-between justify-end items-start p-6 pb-2 lg:p-10 lg:pr-5 md:col-span-2 col-span-1"
		>
			<div class="w-full hidden lg:flex flex-row justify-end">
				<QRCode size={135} color="#333333" />
			</div>
			<div
				class="w-full flex md:hidden lg:flex flex-row justify-center md:justify-between items-center mb-4"
			>
				<h1
					class="text-2xl sm:text-4xl text-center font-barlow font-bold uppercase border border-zinc-700 rounded-[50%] max-sm:p-6 py-8 px-12 tracking-widest drop-shadow-2xl hover:animate-[spin-y_1.5s_ease-in-out_1]"
				>
					Martyna Regucka
				</h1>
				<a
					href="https://www.instagram.com/martynaregucka/"
					target="_blank"
					class="hidden lg:flex flex-row justify-center items-center"
				>
					<InstagramLogo class="mr-1" /> martynaregucka
				</a>
			</div>
			<p class="hidden md:block text-justify uppercase text-sm md:text-base mb-4 lg:mb-6 text-zinc-700">
				Innovative fashion designer and stylist, graduate of the Artistic School of Fashion Design,
				with more than 3 years experience in the fashion industry. Proficient in conceptualizing and
				executing fashion shoots and managing styling for various editorial projects. Experienced in
				working with models, photographers, and creative teams to create captivating and
				high-quality images. Ready to bring fresh, trendsetting ideas to your brand.
			</p>
			<div class="w-full flex justify-center items-center">
				<ScrollDownButton />
			</div>
		</div>
		<div
			class="h-[50vh] md:h-[70vh] lg:h-[80vh] md:w-full p-2 sm:p-4 lg:p-12 row-start-1 md:col-start-3"
		>
			<img
				class="h-full w-full object-scale-down"
				src={portrait}
				alt="Portrait of a beautiful girl."
			/>
		</div>
	</div>
</section>
