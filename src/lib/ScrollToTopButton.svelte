<script lang="ts">
	import { ChevronUp } from 'radix-icons-svelte';

	function scrollToTop() {
		document.querySelector('main')?.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto'
		});
	}
</script>

<button on:click={scrollToTop} class="fixed bottom-4 right-4 rounded-full p-6 cursor-crosshair backdrop-blur-md backdrop-brightness-125 backdrop-hue-rotate-180 before:content-['top'] before:uppercase before:hidden before:opacity-0 before:h-0 hover:before:block hover:before:opacity-100 hover:before:h-8 before:transition-all before:duration-300 hover:before:animate-show-stretch"><ChevronUp size={30} /></button>