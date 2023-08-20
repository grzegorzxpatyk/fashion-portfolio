<script>
	import { PortfolioSection } from '$lib';
	import '../app.css';
	import './styles.css';
	import { InstagramLogo, EnvelopeClosed } from 'radix-icons-svelte';
	import { photos } from '$lib';
</script>

<main class="h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden no-scrollbar">
	<section class="h-screen w-screen flex justify-center items-center snap-start bg-yellow-200">
		<h1 class="text-5xl uppercase">portfolio</h1>
	</section>
	<section class="h-screen max-h-screen w-screen bg-red-200 grid grid-cols-2 snap-start">
		<div class="h-screen w-full flex flex-col justify-end items-start p-10 select-none">
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
			<p class="text-justify text-sm lg:text-base">
				Innovative fashion designer and stylist, graduate of the Artistic School of Fashion Design.
				Proven track record collaborating with diverse industry professionals, from designers and
				photographers to managers and creative directors. Renowned for a keen sense of style,
				efficiency, and productivity in translating concepts into captivating collections. Ready to
				bring fresh, trendsetting ideas to your brand.
			</p>
		</div>
		<div class="h-screen w-full lg:p-12">
			<img
				class="h-full w-full object-cover"
				src={photos.photo5}
				alt="Portrait of a beautiful girl."
			/>
		</div>
	</section>
	<PortfolioSection
		images={[
			{ src: photos.photo1, alt: 'something random' },
			{ src: photos.photo2, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: photos.photo3, alt: 'something random' },
			{ src: photos.photo4, alt: 'something random' },
			{ src: photos.photo5, alt: 'something random' }
		]}
	/>
	<PortfolioSection images={[{ src: photos.photo33, alt: 'something random' }]} />
	<PortfolioSection
		images={[
			{ src: photos.photo7, alt: 'something random' },
			{ src: photos.photo8, alt: 'something random' },
			{ src: photos.photo9, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: photos.photo10, alt: 'something random' },
			{ src: photos.photo11, alt: 'something random' },
			{ src: photos.photo12, alt: 'something random' }
		]}
	/>
	<section
		class="h-screen w-screen bg-sky-200 flex flex-col justify-center items-center snap-start select-none"
	>
		<div>
			<h1 class="text-5xl mb-24">Contact</h1>
		</div>
		<div
			class="w-full flex flex-col items-start justify-between md:flex-row md:justify-evenly md:items-center"
		>
			<div class="flex flex-col justify-center items-center">
				<p>You can check my instagram and slide into my DM's</p>
				<h2 class="text-2xl flex flex-row justify-between items-center mt-2">
					<InstagramLogo class="mr-2" />
					<a href="https://www.instagram.com/martynaregucka/" target="_blank">martynaregucka</a>
				</h2>
			</div>
			<div class="flex flex-col justify-center items-center">
				<p>or just send my the good ol' email! Anyway, feel free to hit me up!</p>
				<h2 class="text-2xl flex flex-row justify-between items-center mt-2">
					<EnvelopeClosed class="mr-2" />
					<a href="mailto:martyna.regucka@gmail.com" target="_blank">martyna.regucka@gmail.com</a>
				</h2>
			</div>
		</div>
	</section>
</main>
