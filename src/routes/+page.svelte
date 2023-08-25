<script>
	import { PortfolioSection, AboutMeSection } from '$lib';
	import '../app.css';
	import './styles.css';
	import { InstagramLogo, EnvelopeClosed } from 'radix-icons-svelte';
	import { images } from '$lib/images';
	import portrait from '$lib/images';
	import { Positions } from '$lib/enums/Positions.enum';
</script>

<main class="h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden no-scrollbar">
	<section class="h-screen w-screen flex justify-center items-center snap-start bg-yellow-200">
		<h1 class="text-5xl uppercase">portfolio</h1>
	</section>
	<AboutMeSection {portrait} />
	<PortfolioSection
		images={[
			{ src: images.half.half19, alt: 'something random' },
			{ src: images.half.half37, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half29, alt: 'something random' },
			{ src: images.half.half6, alt: 'something random' }
		]}
	/>

	<PortfolioSection
		images={[
			{ src: images.third.third13, alt: 'something random' },
			{ src: images.third.third12, alt: 'something random' },
			{ src: images.third.third36, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third15, alt: 'something random' },
			{ src: images.third.third23, alt: 'something random' },
			{ src: images.third.third7, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third104, alt: 'something random' },
			{ src: images.third.third5, alt: 'something random' },
			{ src: images.third.third50, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third105, alt: 'something random' },
			{ src: images.third.third21, alt: 'something random' },
			{ src: images.third.third22, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third31, alt: 'something random' },
			{ src: images.third.third78, alt: 'something random' },
			{ src: images.third.third25, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third34, alt: 'something random' },
			{ src: images.third.third33, alt: 'something random' },
			{ src: images.third.third35, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third94, alt: 'something random' },
			{ src: images.third.third100, alt: 'something random' },
			{ src: images.third.third106, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third119, alt: 'something random' },
			{ src: images.third.third108, alt: 'something random' },
			{ src: images.third.third26, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third6, alt: 'something random' },
			{ src: images.third.third14, alt: 'something random' },
			{ src: images.third.third39, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third103, alt: 'something random' },
			{ src: images.third.third109, alt: 'something random' },
			{ src: images.third.third76, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third40, alt: 'something random' },
			{ src: images.third.third99, alt: 'something random' },
			{ src: images.third.third1, alt: 'something random' }
		]}
	/>
	
	<PortfolioSection images={[{ src: images.full.full8, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full10, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full5, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full3, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full7, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full1, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full6, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full11, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full2, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full9, alt: 'something random' }]} />
	<PortfolioSection images={[{ src: images.full.full4, alt: 'something random' }]} />

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
