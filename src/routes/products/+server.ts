import { PRINTIFY_TOKEN } from '$env/static/private';
import printify from '@lib/printify';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {


	return new Response("Hi");
}