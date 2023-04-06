import type { HttpMethod } from "@sveltejs/kit/types/private";

const base = 'https://api.printify.com/v1/';

const printify = async (method: HttpMethod, path: string, token: string, body: any | undefined = undefined) => {
	try {
		const res = await fetch(base + path, {
			body: body === undefined ? undefined : JSON.stringify(body),
			method: method,
			headers: {
				'Authorization': `Bearer ${token}`,
			}
		});
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e)
		return { error: 'Something went wrong' }
	}
}
export default printify;