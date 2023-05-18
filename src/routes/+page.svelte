<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ShoppingCart, Bars3, ArrowsPointingOut } from 'svelte-heros-v2';
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { cart } from '@lib/shoppingCart';

	let height: number;
	onMount(() => {
		height = window.innerHeight;
		console.log(height);
	});
	let cx = 'hover:bg-forest-accent transition-colors p-1 rounded-xl';
</script>

<svelte:window on:resize={() => (height = window.innerHeight)} />

<div class="bg-forest w-full overflow-auto flex flex-col gap-2" style={`height: ${height}px`}>
	<!-- Heading -->
	<div class="w-full flex justify-between shrink text-center font-serif pt-5 px-8">
		<Bars3 size={'40'} color="white" class={cx} />
		<h2 class="font-serif text-2xl text-forest-accent font-bold flex-center">Philo Threads</h2>
		<ShoppingCart size={'40'} color="white" class={cx} />
	</div>
	<!-- Content -->
	<div class="p-3 basis-full" id="page-wrapper">
		<div class="bg-white border-1 border-forest-accent w-full overflow-auto grow rounded-[50px]">
			<div class="bg-white w-full overflow-auto rounded-[50px]">
				<div class="h-20 object-contain overflow-clip flex-center py-5">
					<img alt="philo decoration" src="leafdecor.png" />
				</div>

				<div class="h-10 flex justify-center items-center bg-forest w-full">
					Choose your favorite design, color, and style
				</div>
				<div class="bg-white w-full overflow-auto grid p-8 grid-cols-2 gap-3 grow rounded-[50px]">
					{#each data.data as variant}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="group relative" on:click={() => cart.set(variant)}>
							<ArrowsPointingOut
								size="24"
								class="text-gray-400 hover:scale-105 transition top-1 right-1 absolute hidden group-hover:block group-hover:opacity-100  z-10"
							/>
							<div
								class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md relative p-3 bg-white shadow-md border-1 border-gray-50 lg:aspect-none group-hover:opacity-80 lg:h-80 transition duration-200"
							>
								<img
									src={variant.image.src}
									alt="lkjl"
									class="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
								<div class="flex gap-1 flex-wrap w-full justify-center">
									{#each variant.colors as colorObject}
										{#if colorObject.colors}
											<div
												style={`background-color: ${colorObject.colors[0]};`}
												class={`mt-1 text-sm text-gray-500 h-3 w-3 rounded-full`}
											/>
										{/if}
									{/each}
								</div>
							</div>
							<div class="mt-4 flex justify-between px-3">
								<div>
									<h3 class="text-sm text-gray-700">
										<a href="#">
											<span aria-hidden="true" class="absolute inset-0" />
											{variant.title}
										</a>
									</h3>
								</div>
								<p class="text-sm font-medium text-gray-900">$35</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<h2 class="text-center w-full text-sm">Copyright © 2023 PhiloThreads. All rights reserved.</h2>
</div>
