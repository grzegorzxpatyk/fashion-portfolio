<script lang="ts">
	import { InstagramLogo } from 'radix-icons-svelte';
	import { QRCode, ScrollDownButton } from '$lib';

	export let portrait: string;
	export let portfolio: string;
</script>

<section class="h-screen w-screen bg-white snap-start selection:text-fuchsia-300 selection:bg-fuchsia-800">
	<header class="h-[20vh] flex justify-center items-center p-4">
		<img src={portfolio} alt="portfolio" class="h-full" />
	</header>
	<div class="h-[80vh] grid grid-cols-3">
		<div
			class="h-full w-full flex flex-col justify-end items-start p-6 pr-3 md:p-10 md:pr-5 col-span-2"
		>
			<div class="w-full flex flex-row justify-end">
				<QRCode size={135} color="#333333" />
			</div>
			<div class="w-full flex flex-row justify-between items-center mb-4">
				<h1
					class="text-4xl font-barlow font-bold uppercase border border-zinc-700 rounded-[50%] py-8 px-12 tracking-widest drop-shadow-2xl hover:animate-[spin-y_1.5s_ease-in-out_1]"
				>
					Martyna Regucka
				</h1>
				<a
					href="https://www.instagram.com/martynaregucka/"
					target="_blank"
					class="hidden md:flex flex-row justify-center items-center"
				>
					<InstagramLogo class="mr-1" /> martynaregucka
				</a>
			</div>
			<p class="text-justify uppercase text-sm md:text-base mb-6 text-zinc-700">
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
		<div class="h-[80vh] w-full p-12">
			<img
				class="h-full w-full object-scale-down"
				src={portrait}
				alt="Portrait of a beautiful girl."
			/>
		</div>
	</div>
</section>
