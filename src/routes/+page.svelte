<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import Checkout from '@ui/Checkout.svelte';
	import * as Icon from 'svelte-heros-v2';
	import { cart } from '@lib/shoppingCart';
</script>

<Checkout />
<div class="bg-white">
	<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
		<div
			class="mt-6 grid grid-cols-1 bg-white gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
		>
			{#each data.data as variant}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="group relative" on:click={() => cart.set(variant)}>
					<Icon.ArrowsPointingOut
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
						<div class="flex gap-1 flex-wrap absolute bottom-3 left-0 w-full justify-center">
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
