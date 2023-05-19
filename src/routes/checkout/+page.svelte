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

	<div class="h-10 flex justify-center items-center bg-forest w-full">A la cart</div>
	<div class="bg-white w-full overflow-auto grid p-8 grid-cols-1 gap-7 grow rounded-[50px]">
		{#each cartItems ?? [] as item}
			<Card
				class="h-fit relative grid grid-cols-2 md:grid-cols-3 items-center md:px-16 bg-blue-300"
			>
				<Heart />
				<img
					src={item.image.src}
					alt="lkjl"
					class="h-44 md:h-full object-scale-down aspect-square outline-none lg:h-full lg:w-full"
				/>
				<div class="flex px-8 flex-col gap-2">
					<h3>Philo</h3>
					<h3>Size: Small</h3>
					<h3>Black</h3>
				</div>
				<div
					class="w-[70%] mx-auto md:w-32 col-span-2 md:col-span-1 border-1 border-gray-300 px-4 py-1 flex justify-between items-center rounded-lg"
				>
					<Plus class=" h-6 hover:bg-forest p-1 rounded-md" size={'27'} />
					<p class="text-center grow">{item.quantity}</p>
					<Minus class=" h-6 hover:bg-forest p-1 rounded-md" size={'27'} />
				</div>
			</Card>
		{/each}
		<button
			class="bg-forest-accent px-10 py-5 rounded-xl text-white text-2xl w-[100%] mt-16 mx-auto"
			>Checkout</button
		>
	</div>
</div>
