<script lang="ts">
	import { InstagramLogo } from "radix-icons-svelte";

    export let portrait: string;
</script>

<section class="h-screen max-h-screen w-screen bg-red-200 grid grid-cols-2 snap-start">
    <div class="h-screen w-full flex flex-col justify-end items-start p-6 md:p-10 select-none">
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
        <p class="text-justify text-sm md:text-base">
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
            src={portrait}
            alt="Portrait of a beautiful girl."
        />
    </div>
</section>