<script>
	import { PortfolioSection, AboutMeSection } from '$lib';
	import '../app.css';
	import './styles.css';
	import { InstagramLogo, EnvelopeClosed } from 'radix-icons-svelte';
	import { photos } from '$lib';
</script>

<main class="h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden no-scrollbar">
	<section class="h-screen w-screen flex justify-center items-center snap-start bg-yellow-200">
		<h1 class="text-5xl uppercase">portfolio</h1>
	</section>
	<AboutMeSection portrait={photos.photo5} />
	<PortfolioSection
		images={[
			{ src: photos.photo63, alt: 'something random' },
			{ src: photos.photo64, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: photos.photo3, alt: 'something random' },
			{ src: photos.photo4, alt: 'something random' },
			{ src: photos.photo5, alt: 'something random' }
		]}
	/>
	<PortfolioSection images={[{ src: photos.photo58, alt: 'something random' }]} />
	<PortfolioSection
		images={[
			{ src: photos.photo54, alt: 'something random' },
			{ src: photos.photo60, alt: 'something random' },
			{ src: photos.photo69, alt: 'something random' }
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
