<script lang="ts">
    export let images: Array<{src: string, alt: string}> | undefined = undefined;
</script>

{#if images && images.length > 0}
<section class="h-screen w-screen grid grid-cols-{images.length} gap-2 snap-start">
    {#each images as image}
    <div class="h-full w-full"><img class="h-full w-full object-cover" src={image.src} alt={image.alt} /></div>
    {/each}
</section>
{:else if images && images.length === 0}
<section class="h-screen w-screen snap-start">
    <div class="h-full w-full"><img class="h-full w-full object-cover" src={images[0].src} alt={images[0].alt} /></div>
</section>
{/if}