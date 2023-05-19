import { writable } from "svelte/store";

export const adding = writable<any>();
export const cart = writable<any[]>([]);