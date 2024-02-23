<script lang="ts">
	export let portrait: string;
	export let bioDescription: string;

	let isPortraitFlipping: boolean = false;
	let isCardOnPortraitSide: boolean = true;

	function handleAvatarClick(event: MouseEvent & { currentTarget: EventTarget & HTMLElement }) {
		isPortraitFlipping = true;
	}

	function handleAvatarAnimationEnd(
		event: AnimationEvent & { currentTarget: EventTarget & HTMLElement }
	) {
		isPortraitFlipping = false;
		isCardOnPortraitSide = !isCardOnPortraitSide;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="h-full w-full">
	<img
		class="h-full w-full object-scale-down portrait:max-md:backface-hidden {isPortraitFlipping &&
			(isCardOnPortraitSide ? 'animate-flip-y' : 'animate-flip-y-reverse')} {isCardOnPortraitSide
			? 'rotate-y-0'
			: 'rotate-y-180'}"
		src={portrait}
		alt="Portrait of a beautiful girl."
		on:click={handleAvatarClick}
		on:animationend={handleAvatarAnimationEnd} />
	<p
		class="hidden portrait:max-md:block h-full overflow-y-auto overflow-x-hidden w-full px-6 text-justify text-lg relative -top-full left-[50%] translate-x-[-50%] backface-hidden {isPortraitFlipping &&
			(isCardOnPortraitSide ? 'animate-flip-y-reverse' : 'animate-flip-y')} {isCardOnPortraitSide
			? 'rotate-y-180'
			: 'rotate-y-0'}"
		on:click={handleAvatarClick}>
		{bioDescription}
	</p>
</div>
