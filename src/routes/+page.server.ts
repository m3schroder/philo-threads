import printify from "@lib/printify";
import type { PageServerLoad } from './$types'
import { PRINTIFY_TOKEN } from "$env/static/private";

export const load: PageServerLoad = async ({ fetch }) => {
	const shop = await printify('GET', '/shops/7888542/products.json', PRINTIFY_TOKEN);
	console.log(shop)
	return {
		data: shop.data.map(d => { return { title: d.title, image: d.images[0], colors: d.options[1].values } })
	};
}