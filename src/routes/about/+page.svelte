<script lang="ts">
	import { Minus, Plus } from 'svelte-heros-v2';
	import { cart } from '@lib/shoppingCart';
	import Card from '@ui/Card.svelte';
	import Heart from '@ui/Heart.svelte';

	let cartItems: any[] = [];
	$: cartItems;
	cart.subscribe((updates) => {
		console.log(updates);
		cartItems = updates;
	});
</script>

<div class="bg-white h-full w-full overflow-auto rounded-[50px]">
	<div class="h-20 object-contain overflow-clip flex-center py-5">
		<img alt="philo decoration" src="leafdecor.png" />
	</div>

	<div class="h-10 flex justify-center items-center bg-forest w-full">PhiloThreads and Me</div>
	<div class="bg-white w-full overflow-auto grid p-8 grid-cols-1 gap-7 grow rounded-[50px]" />
</div>
