import { writable } from "svelte/store";

export let text_green = "#126F6E";
export let bg_green = "#217F7E";

export let text_purple = "#685A8F";

export let prefix = 'https://drive.google.com/uc?export=view&id=';
export let pageOn = writable("Home");