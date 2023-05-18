<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ShoppingCart, Bars3 } from 'svelte-heros-v2';

	let height: number;
	onMount(() => {
		height = window.innerHeight;
		console.log(height);
	});
</script>

<svelte:window on:resize={() => (height = window.innerHeight)} />

<div class="bg-forest w-full overflow-auto flex flex-col gap-2" style={`height: ${height}px`}>
	<!-- Heading -->
	<div class="w-full flex justify-between shrink text-center font-serif pt-5 pb-3 px-8">
		<Bars3 size={'40'} color="white" />
		<div class="flex gap-3">
			<MagnifyingGlass size={'40'} color="white" />
			<ShoppingCart size={'40'} color="white" />
		</div>
	</div>
	<!-- Content -->
	<div class="p-3 basis-full" id="page-wrapper">
		<div class="bg-white w-full overflow-auto grow rounded-[50px]">
			<div class="bg-white w-full overflow-auto rounded-[50px]">
				<div class="h-20 flex-center py-5">
					<h3 class="font-serif text-xl font-semibold">Philo Threads</h3>
				</div>

				<div class="h-10 flex justify-center items-center bg-forest w-full">
					Choose your favorite design, color, and style
				</div>
				<div class="bg-white w-full overflow-auto grid p-8 grid-cols-2 gap-3 grow rounded-[50px]">
					{#each [1, 2, 3, 4, 5, 6] as items}
						<div class="h-64 w-full bg-forest-accent rounded-2xl" />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
