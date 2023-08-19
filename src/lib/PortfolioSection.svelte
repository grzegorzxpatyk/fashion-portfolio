<script lang="ts">
    export let images: Array<{src: string, alt: string}> | undefined = undefined;
</script>

{#if images && images.length > 1}
<section class="h-screen w-screen grid grid-cols-{images.length} snap-start px-2">
    {#each images as image}
    <div class="h-full w-full p-4 ps-2 pe-2"><img class="h-full w-full object-cover" src={image.src} alt={image.alt} /></div>
    {/each}
</section>
{:else if images && images.length === 1}
<section class="h-screen w-screen snap-start p-4">
    <div class="h-full w-full"><img class="h-full w-full object-cover" src={images[0].src} alt={images[0].alt} /></div>
</section>
{/if}