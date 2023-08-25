<script lang="ts">
	export let images: Images | undefined = undefined;
</script>

{#if images && images.length === 3}
	<section class="h-screen w-screen grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 snap-start">
		{#each images as image}
			<div class="h-full w-full overflow-hidden">
				<img class="h-full w-full object-cover" src={image.src} alt={image.alt} />
			</div>
		{/each}
	</section>
{:else if images && images.length === 2}
	<section class="h-screen w-screen grid grid-cols-2 snap-start">
		{#each images as image}
			<div class="h-full w-full overflow-hidden">
				<img class="h-full w-full object-cover {image.position ?? image.position}" src={image.src} alt={image.alt} />
			</div>
		{/each}
	</section>
{:else if images && images.length === 1}
	<section class="h-screen w-screen snap-start">
		<div class="h-full w-full">
			<img class="h-full w-full {images[0].objectFit ? images[0].objectFit : 'object-cover'}" src={images[0].src} alt={images[0].alt} />
		</div>
	</section>
{:else}
	<section class="h-full w-full flex justify-center items-center">No images.</section>
{/if}
