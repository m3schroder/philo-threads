<script lang="ts">
	import { cart } from '@lib/shoppingCart';
	import { Transition, Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';

	let items: any[] = [];
	cart.subscribe((value) => {
		items = [...items, value].filter((item) => item.image !== undefined);
	});
</script>

<header class="absolute top-10 right-5 bg-white">
	<Popover>
		<PopoverButton>
			<svg
				class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
				/>
			</svg>
			<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
				>{items.length ? items.length : 0}</span
			>
			<span class="sr-only">items in cart, view bag</span>
		</PopoverButton>
		<Transition
			enter="transition ease-out duration-200"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition ease-in duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<PopoverPanel>
				<div
					class="absolute z-20 inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
				>
					<h2 class="sr-only">Shopping Cart</h2>

					<form class="mx-auto max-w-2xl px-4">
						<ul role="list" class="divide-y divide-gray-200">
							{#each items as item}
								<li class="flex items-center py-6">
									<img
										src={item.image.src}
										alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
										class="h-16 w-16 flex-none rounded-md border border-gray-200"
									/>
									<div class="ml-4 flex-auto">
										<h3 class="font-medium text-gray-900">
											<a href="#">{item.title}</a>
										</h3>
										<p class="text-gray-500">Salmon</p>
									</div>
								</li>
							{/each}
						</ul>

						<button
							type="submit"
							class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>Checkout</button
						>

						<p class="mt-6 text-center">
							<a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
								>View Shopping Bag</a
							>
						</p>
					</form>
				</div>
			</PopoverPanel>
		</Transition>
	</Popover>
</header>
