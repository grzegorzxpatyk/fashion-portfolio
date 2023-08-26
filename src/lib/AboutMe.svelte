<script lang="ts">
	import { InstagramLogo } from 'radix-icons-svelte';
	import { ScrollDownButton } from '$lib';

	export let portrait: string;
</script>

<section class="h-screen w-screen bg-white snap-start">
    <header class="h-[15vh] flex justify-center items-center">
		<h1 class="text-5xl uppercase font-extralight">portfolio</h1>
	</header>
	<div class="h-[85vh] grid grid-cols-3">
		<div class="h-full w-full flex flex-col justify-end items-start p-6 pr-3 md:p-10 md:pr-5 col-span-2">
			<div class="w-full flex flex-row justify-between items-center mb-4">
				<h1 class="text-4xl">Martyna Regucka</h1>
				<a
					href="https://www.instagram.com/martynaregucka/"
					target="_blank"
					class="hidden md:flex flex-row justify-center items-center"
				>
					<InstagramLogo class="mr-1" /> martynaregucka
				</a>
			</div>
			<p class="text-justify text-sm md:text-base mb-6">
				Innovative fashion designer and stylist, graduate of the Artistic School of Fashion Design.
				Proven track record collaborating with diverse industry professionals, from designers and
				photographers to managers and creative directors. Renowned for a keen sense of style,
				efficiency, and productivity in translating concepts into captivating collections. Ready to
				bring fresh, trendsetting ideas to your brand.
			</p>
			<div class="w-full flex justify-center items-center">
				<ScrollDownButton />
			</div>
		</div>
		<div class="h-[85vh] w-full p-6 pl-3 md:p-10 md:pl-5">
			<img
				class="h-full w-full object-cover object-top"
				src={portrait}
				alt="Portrait of a beautiful girl."
			/>
		</div>
	</div>
</section>
