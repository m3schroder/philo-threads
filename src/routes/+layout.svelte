<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;

	import '../app.postcss';
	import { onMount } from 'svelte';
	import { Bars3 } from 'svelte-heros-v2';
	import { Transition } from '@rgossiaux/svelte-headlessui';
	import Checkout from '@ui/Checkout.svelte';
	import classNames from 'classnames';
	import { afterNavigate } from '$app/navigation';

	let height: number;
	afterNavigate(() => {
		open = false;
	});
	onMount(() => {
		height = window.innerHeight;
	});
	let cx = 'hover:bg-forest-accent transition-colors p-1 rounded-xl';

	let open: boolean = false;
	$: open;
</script>

<svelte:window on:resize={() => (height = window.innerHeight)} />

<div
	class="bg-forest w-full overflow-auto md:px-[20vw] flex flex-col gap-2"
	style={`height: ${height}px`}
>
	<!-- Heading -->
	<div class="w-full flex justify-between shrink text-center font-serif pt-5 px-8">
		<Bars3 size={'45'} color="white" class={cx} on:click={() => (open = !open)} />
		<a href="/" class="outline-none font-serif text-2xl text-forest-accent font-bold flex-center"
			>Philo Threads</a
		>
		<Checkout />
	</div>
	<!-- Content -->
	<div class="p-3 basis-full overflow-x-clip md:overflow-x-visible relative" id="page-wrapper">
		<Transition
			show={open}
			appear={true}
			enter="transition ease-out duration-200"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition ease-in duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div class="w-32 h-fit absolute top-12 left-8 flex flex-col gap-3">
				{#each ['Products', 'About', 'Contact'] as item}
					<a
						href={`/${item.toLowerCase()}`}
						class="font-serif text-xl hover:bg-forest-accent w-72 font-semibold px-5 py-2 text-white rounded-xl"
						>{item}</a
					>
				{/each}
			</div>
		</Transition>
		<div
			class={classNames(
				'bg-white border-1 border-forest-accent w-full  duration-500 transition-all overflow-auto grow rounded-[50px]',
				open ? 'rotate-6 translate-x-32 translate-y-6' : ''
			)}
		>
			<slot />
		</div>
	</div>

	<h2 class="text-center w-full text-sm">Copyright © 2023 PhiloThreads. All rights reserved.</h2>
</div>
