<script>
	import PortfolioSection from '$lib/PortfolioSection.svelte';
	import '../app.css';
</script>

<main class="h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden no-scrollbar">
	<section class="h-screen w-screen flex justify-center items-center snap-start bg-yellow-200">
		<h1 class="text-5xl uppercase line-through">portfolio</h1>
	</section>
	<section class="h-screen max-h-screen w-screen bg-red-200 grid grid-cols-2 snap-start">
		<div class="h-screen w-full flex flex-col justify-end items-start p-10 select-none">
			<h1 class="text-4xl mb-2">Martyna Regucka</h1>
			<p class="text-justify">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque pariatur a ipsam sint
				minus odit reprehenderit maiores deleniti accusantium, cupiditate vitae laborum incidunt
				sed! Ut rerum a commodi dignissimos!
			</p>
		</div>
		<div class="h-screen w-full p-12">
			<img
				class="h-full w-full object-cover"
				src="https://picsum.photos/1920/1080?random=0"
				alt="something random, idk."
			/>
		</div>
	</section>
	<PortfolioSection
		images={[
			{ src: 'https://picsum.photos/1920/1080?random=1', alt: 'something random' },
			{ src: 'https://picsum.photos/1920/1080?random=2', alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[
			{ src: 'https://picsum.photos/1920/1080?random=3', alt: 'something random' },
			{ src: 'https://picsum.photos/1920/1080?random=4', alt: 'something random' },
			{ src: 'https://picsum.photos/1920/1080?random=5', alt: 'something random' }
		]}
	/>
	<PortfolioSection
		images={[{ src: 'https://picsum.photos/1920/1080?random=6', alt: 'something random' }]}
	/>
	<section
		class="h-screen w-screen bg-emerald-200 flex flex-col justify-center items-center snap-start select-none"
	>
		<div>
			<h1 class="text-3xl">Contact</h1>
		</div>
		<div>
			<h2 class="text-2xl">instagram: martyna.regucka</h2>
		</div>
	</section>
</main>
