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
			{ src: images.half.half28, alt: 'something random' },
			{ src: images.half.half13, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half19, alt: 'something random' },
			{ src: images.half.half6, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half33, alt: 'something random', position: Positions.BOTTOM },
			{ src: images.half.half37, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half38, alt: 'something random' },
			{ src: images.half.half11, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half7, alt: 'something random' },
			{ src: images.half.half5, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half10, alt: 'something random' },
			{ src: images.half.half15, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half44, alt: 'something random' },
			{ src: images.half.half35, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half27, alt: 'something random' },
			{ src: images.half.half48, alt: 'something random', position: Positions.BOTTOM }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half2, alt: 'something random' },
			{ src: images.half.half3, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half46, alt: 'something random' },
			{ src: images.half.half42, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half8, alt: 'something random' },
			{ src: images.half.half9, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half18, alt: 'something random' },
			{ src: images.half.half12, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half16, alt: 'something random' },
			{ src: images.half.half22, alt: 'something random', position: Positions.TOP }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half25, alt: 'something random' },
			{ src: images.half.half32, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half26, alt: 'something random' },
			{ src: images.half.half36, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half41, alt: 'something random' },
			{ src: images.half.half39, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half1, alt: 'something random' },
			{ src: images.half.half45, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half31, alt: 'something random' },
			{ src: images.half.half30, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half4, alt: 'something random' },
			{ src: images.half.half47, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half17, alt: 'something random' },
			{ src: images.half.half40, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half29, alt: 'something random' },
			{ src: images.half.half21, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half20, alt: 'something random' },
			{ src: images.half.half23, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half34, alt: 'something random' },
			{ src: images.half.half14, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half24, alt: 'something random' },
			{ src: images.half.half43, alt: 'something random' }
		]}
	/>

	<PortfolioSection
		images={[
			{ src: images.third.third19, alt: 'something random' },
			{ src: images.third.third64, alt: 'something random' },
			{ src: images.third.third56, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third40, alt: 'something random' },
			{ src: images.third.third13, alt: 'something random' },
			{ src: images.third.third44, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third72, alt: 'something random' },
			{ src: images.third.third37, alt: 'something random' },
			{ src: images.third.third66, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third69, alt: 'something random' },
			{ src: images.third.third30, alt: 'something random' },
			{ src: images.third.third52, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third33, alt: 'something random' },
			{ src: images.third.third26, alt: 'something random' },
			{ src: images.third.third1, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third70, alt: 'something random' },
			{ src: images.third.third35, alt: 'something random' },
			{ src: images.third.third53, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third59, alt: 'something random' },
			{ src: images.third.third65, alt: 'something random' },
			{ src: images.third.third22, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third51, alt: 'something random' },
			{ src: images.third.third57, alt: 'something random' },
			{ src: images.third.third7, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third74, alt: 'something random' },
			{ src: images.third.third12, alt: 'something random' },
			{ src: images.third.third14, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third32, alt: 'something random' },
			{ src: images.third.third4, alt: 'something random' },
			{ src: images.third.third23, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third18, alt: 'something random' },
			{ src: images.third.third8, alt: 'something random' },
			{ src: images.third.third29, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third75, alt: 'something random' },
			{ src: images.third.third54, alt: 'something random' },
			{ src: images.third.third45, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third20, alt: 'something random' },
			{ src: images.third.third63, alt: 'something random' },
			{ src: images.third.third46, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third25, alt: 'something random' },
			{ src: images.third.third38, alt: 'something random' },
			{ src: images.third.third3, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third9, alt: 'something random' },
			{ src: images.third.third50, alt: 'something random' },
			{ src: images.third.third48, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third62, alt: 'something random' },
			{ src: images.third.third61, alt: 'something random' },
			{ src: images.third.third16, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third49, alt: 'something random' },
			{ src: images.third.third2, alt: 'something random' },
			{ src: images.third.third36, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third28, alt: 'something random' },
			{ src: images.third.third42, alt: 'something random' },
			{ src: images.third.third17, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third39, alt: 'something random' },
			{ src: images.third.third47, alt: 'something random' },
			{ src: images.third.third5, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third34, alt: 'something random' },
			{ src: images.third.third11, alt: 'something random' },
			{ src: images.third.third58, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third41, alt: 'something random' },
			{ src: images.third.third21, alt: 'something random' },
			{ src: images.third.third67, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third60, alt: 'something random' },
			{ src: images.third.third10, alt: 'something random' },
			{ src: images.third.third73, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third31, alt: 'something random' },
			{ src: images.third.third71, alt: 'something random' },
			{ src: images.third.third24, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third27, alt: 'something random' },
			{ src: images.third.third55, alt: 'something random' },
			{ src: images.third.third68, alt: 'something random' }
		]}
	/>

	<PortfolioSection
		images={[
			{ src: images.third.third73, alt: 'something random' },
			{ src: images.third.third41, alt: 'something random' },
			{ src: images.third.third75, alt: 'something random' }
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
