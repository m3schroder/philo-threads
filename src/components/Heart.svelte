<script lang="ts">
	import { Heart } from 'svelte-heros-v2';
	import classNames from 'classnames';
	let clicked = false;
	$: clicked;
</script>

<Heart
	on:click={() => (clicked = !clicked)}
	class={classNames(
		clicked ? 'fill-forest-accent' : '',
		'absolute top-8 right-8 text-forest-accent'
	)}
	size={'36'}
/>
