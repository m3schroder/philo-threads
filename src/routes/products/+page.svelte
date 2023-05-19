<script lang="ts">
	import { ArrowsPointingOut, CloudArrowDown } from 'svelte-heros-v2';
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { adding, cart } from '@lib/shoppingCart';
	import Card from '@ui/Card.svelte';
</script>

<div class="bg-white w-full overflow-auto rounded-[50px]">
	<div class="h-20 object-contain overflow-clip flex-center py-5">
		<img alt="philo decoration" src="leafdecor.png" />
	</div>

	<div class="h-10 flex justify-center items-center bg-forest w-full">
		Choose your favorite design, color, and style
	</div>
	<div class="bg-white w-full overflow-auto grid p-8 grid-cols-2 gap-9 grow rounded-[50px]">
		{#each data.data as variant}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="group relative" on:click={() => adding.set(variant)}>
				<!-- <ArrowsPointingOut
					size="24"
					class="text-gray-400 hover:scale-105 transition top-1 right-1 absolute hidden group-hover:block group-hover:opacity-100  z-10"
				/> -->
				<Card>
					<img
						src={variant.image.src}
						alt="lkjl"
						class="h-full w-full object-cover object-center lg:h-full lg:w-full"
					/>
				</Card>
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
				<div class="flex gap-1 flex-wrap w-full justify-start ml-3 items-center">
					{#each [...variant.colors].splice(4, 3) as colorObject}
						{#if colorObject.colors}
							<div
								style={`background-color: ${colorObject.colors[0]};`}
								class={`mt-1 text-sm text-gray-500 h-3 w-3 rounded-full`}
							/>
						{/if}
					{/each}
					{#if variant.colors.some((x) => x.colors)}
						<span class="ml-1 text-gray-700">+{variant.colors.length - 4}</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
