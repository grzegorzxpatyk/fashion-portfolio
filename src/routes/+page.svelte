<script lang="ts">
	import { PortfolioSection, AboutMeSection } from '$lib';
	import '../app.css';
	import './styles.css';
	import { InstagramLogo, EnvelopeClosed, ChevronUp, ChevronDown } from 'radix-icons-svelte';
	import { images } from '$lib/images';
	import portrait from '$lib/images';
	import { ObjectFit } from '$lib/enums/ObjectFit.enum';
	import { onMount } from 'svelte';
	import ScrollToTopButton from '$lib/ScrollToTopButton.svelte';
	
	let isKeyboardInfoDisplayed = false;
	let isDOMContentLoaded = false;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
			return;
		}
		event.preventDefault();
		const main = document.querySelector('main');
		if (!main) return;
		let scroll = 0;
		if (event.key === 'ArrowDown') {
			 scroll = window.innerHeight;
		} else if (event.key === 'ArrowUp') {
			scroll = -window.innerHeight;
		}
		document.querySelector('main')?.scroll({
			top: scroll + main?.scrollTop,
			left: 0,
			behavior: 'smooth'
		});
	}

	function handleScroll(event: Event) {
		if ((event.target as HTMLElement).scrollTop > window.innerHeight && (event.target as HTMLElement).scrollTop < 5 * window.innerHeight) {
			isKeyboardInfoDisplayed = true;
		} else {
			isKeyboardInfoDisplayed = false;
		}
	}

	onMount(() => {
		isDOMContentLoaded = true;

		return () => { isDOMContentLoaded = false; }
	})
</script>

<svelte:document on:keydown={handleKeyDown}></svelte:document>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main class="h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden no-scrollbar {isDOMContentLoaded ? 'animate-blur-in delay-500' : 'blur-[15px]'}" on:scroll={handleScroll}>
	<AboutMeSection portrait={portrait} portfolio={images.portfolio} />
	<PortfolioSection
		images={[
			{ src: images.third.third31, alt: 'something random' },
			{ src: images.third.third78, alt: 'something random' },
			{ src: images.third.third25, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.half.half19, alt: 'something random' },
			{ src: images.half.half37, alt: 'something random' }
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
			{ src: images.third.third54, alt: 'something random' },
			{ src: images.third.third65, alt: 'something random' },
			{ src: images.third.third68, alt: 'something random' }
		]}
	/>
	<PortfolioSection images={[{ src: images.full.full7, alt: 'something random' }]} />
	<PortfolioSection
		images={[
			{ src: images.third.third94, alt: 'something random' },
			{ src: images.third.third100, alt: 'something random' },
			{ src: images.third.third106, alt: 'something random' }
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
			{ src: images.third.third3, alt: 'something random' },
			{ src: images.third.third66, alt: 'something random' },
			{ src: images.third.third28, alt: 'something random' }
		]}
	/>
	<PortfolioSection images={[{ src: images.full.full8, alt: 'something random' }]} />
	<PortfolioSection
		images={[
			{ src: images.third.third104, alt: 'something random' },
			{ src: images.third.third5, alt: 'something random' },
			{ src: images.third.third50, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third41, alt: 'something random' },
			{ src: images.third.third82, alt: 'something random' },
			{ src: images.third.third30, alt: 'something random' }
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
			{ src: images.third.third57, alt: 'something random' },
			{ src: images.third.third89, alt: 'something random' },
			{ src: images.third.third111, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[{ src: images.full.full2, alt: 'something random', objectFit: ObjectFit.SCALE_DOWN }]}
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
			{ src: images.third.third40, alt: 'something random' },
			{ src: images.third.third99, alt: 'something random' },
			{ src: images.third.third1, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third11, alt: 'something random' },
			{ src: images.third.third17, alt: 'something random' },
			{ src: images.third.third117, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third45, alt: 'something random' },
			{ src: images.third.third42, alt: 'something random' },
			{ src: images.third.third63, alt: 'something random' }
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
			{ src: images.third.third105, alt: 'something random' },
			{ src: images.third.third21, alt: 'something random' },
			{ src: images.third.third22, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third37, alt: 'something random' },
			{ src: images.third.third93, alt: 'something random' },
			{ src: images.third.third44, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third16, alt: 'something random' },
			{ src: images.third.third51, alt: 'something random' },
			{ src: images.third.third46, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third62, alt: 'something random' },
			{ src: images.third.third60, alt: 'something random' },
			{ src: images.third.third98, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third19, alt: 'something random' },
			{ src: images.third.third79, alt: 'something random' },
			{ src: images.third.third43, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third4, alt: 'something random' },
			{ src: images.third.third90, alt: 'something random' },
			{ src: images.third.third97, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third61, alt: 'something random' },
			{ src: images.third.third58, alt: 'something random' },
			{ src: images.third.third49, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third112, alt: 'something random' },
			{ src: images.third.third72, alt: 'something random' },
			{ src: images.third.third92, alt: 'something random' }
		]}
	/>
	<PortfolioSection images={[{ src: images.full.full1, alt: 'something random' }]} />
	<PortfolioSection
		images={[
			{ src: images.third.third29, alt: 'something random' },
			{ src: images.third.third64, alt: 'something random' },
			{ src: images.third.third70, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third115, alt: 'something random' },
			{ src: images.third.third38, alt: 'something random' },
			{ src: images.third.third81, alt: 'something random' }
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
		images={[{ src: images.full.full10, alt: 'something random', objectFit: ObjectFit.SCALE_DOWN, background: 'black' }]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third95, alt: 'something random' },
			{ src: images.third.third71, alt: 'something random' },
			{ src: images.third.third96, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third75, alt: 'something random' },
			{ src: images.third.third20, alt: 'something random' },
			{ src: images.third.third18, alt: 'something random' }
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
			{ src: images.third.third69, alt: 'something random' },
			{ src: images.third.third88, alt: 'something random' },
			{ src: images.third.third47, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third59, alt: 'something random' },
			{ src: images.third.third77, alt: 'something random' },
			{ src: images.third.third32, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third9, alt: 'something random' },
			{ src: images.third.third2, alt: 'something random' },
			{ src: images.third.third73, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third48, alt: 'something random' },
			{ src: images.third.third74, alt: 'something random' },
			{ src: images.third.third87, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[{ src: images.full.full4, alt: 'something random', objectFit: ObjectFit.SCALE_DOWN }]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third101, alt: 'something random' },
			{ src: images.third.third27, alt: 'something random' },
			{ src: images.third.third55, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third86, alt: 'something random' },
			{ src: images.third.third118, alt: 'something random' },
			{ src: images.third.third84, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third113, alt: 'something random' },
			{ src: images.third.third10, alt: 'something random' },
			{ src: images.third.third53, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third114, alt: 'something random' },
			{ src: images.third.third24, alt: 'something random' },
			{ src: images.third.third107, alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: images.third.third67, alt: 'something random' },
			{ src: images.third.third80, alt: 'something random' },
			{ src: images.third.third102, alt: 'something random' }
		]}
	/>
	
	<PortfolioSection
		images={[
			{ src: images.third.third52, alt: 'something random' },
			{ src: images.third.third8, alt: 'something random' },
			{ src: images.third.third91, alt: 'something random' }
		]}
	/>
	<PortfolioSection images={[{ src: images.full.full11, alt: 'something random' }]} />
	

	<section
		class="h-[90vh] w-screen flex flex-col justify-center items-center snap-start select-none"
	>
		<div class="mb-32">
			<img src={images.contact} alt="contact" class="h-32">
		</div>
		<div
			class="w-full flex flex-col items-start justify-between md:flex-row md:justify-evenly md:items-center"
		>
			<div class="flex flex-col justify-center items-center">
				<p>check my instagram</p>
				<h2 class="text-2xl flex flex-row justify-between items-baseline mt-2">
					<InstagramLogo class="mr-2" />
					<a href="https://www.instagram.com/martynaregucka/" target="_blank">martynaregucka</a>
				</h2>
			</div>
			<div class="flex flex-col justify-center items-center">
				<p>or send me an email</p>
				<h2 class="text-2xl flex flex-row justify-between items-baseline mt-2">
					<EnvelopeClosed class="mr-2" />
					<a href="mailto:martyna.regucka@gmail.com" target="_blank">martyna.regucka@gmail.com</a>
				</h2>
			</div>
		</div>
	</section>
	<footer class="h-[10vh] flex justify-center items-center">
		<span class="text-zinc-600 uppercase tracking-widest text-xs">copyright 2023 martyna regucka - all rights reserved</span>
	</footer>
</main>

<div class="{isKeyboardInfoDisplayed ? 'opacity-80' : 'opacity-0'} backdrop-hue-rotate-180 backdrop-blur-sm bg-opacity-50 fixed bottom-4 left-4 p-6 rounded-md border z-50 transition-opacity duration-1000 delay-500 uppercase text-white">
	Use <kbd><ChevronUp size={24} class="inline mx-1" /></kbd> and <kbd><ChevronDown size={24} class="inline mx-1" /></kbd> to navigate
</div>

<ScrollToTopButton />