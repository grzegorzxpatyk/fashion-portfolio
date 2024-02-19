<script lang="ts">
	import { ChevronDown } from 'radix-icons-svelte';

	function scrollDown() {
		document.querySelector('main')?.scrollTo({
			top: window.innerHeight,
			left: 0,
			behavior: 'auto'
		});
	}
</script>

<button
	on:click={scrollDown}
	class="flex flex-col justify-between items-center rounded-full p-3 text-zinc-800 hover:text-zinc-950 cursor-crosshair tracking-widest hover:tracking-[0.5rem] transition-all duration-300 animate-bounce "
>   
    <span class="uppercase font-semibold">take a look</span>
	<ChevronDown size={30} />
</button>
