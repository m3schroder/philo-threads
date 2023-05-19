<script lang="ts">
	import { adding, cart } from '@lib/shoppingCart';
	import { ShoppingBag } from 'svelte-heros-v2';

	let items: any[] = [];
	$: items;
	adding.subscribe((value) => {
		let add = true;
		if (items.some((item) => item.title === value.title)) {
			add = false;
		}

		if (!value) return;
		if (add) items = [...items, { ...value, quantity: 1 }];
		else
			items = items.map((item) => {
				if (item.title === value.title) {
					item.quantity++;
				}
				return item;
			});
		cart.set(items);
	});
</script>

<a href="/checkout" class="outline-none relative group flex justify-center items-center">
	<ShoppingBag
		size={'45'}
		color="white"
		class={'group-hover:bg-forest-accent transition-colors p-1 rounded-xl relative z-0'}
	/>
	<div class="w-full z-10 h-fullo bg-none absolute flex justify-center pt-2 items-center">
		<span class="text-sm text-white font-semibold">{items.length ? items.length : 0}</span>
	</div>
</a>
