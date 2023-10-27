<script>
	// import { i, languages, switchLanguage } from '@inlang/sdk-js';

	import Header from '$lib/components/header.svelte'
	import Hero from '$lib/components/hero.svelte'
	import Features from '$lib/components/features.svelte'
	import Footer from '$lib/components/footer.svelte'
	import Contact from '$lib/components/contact.svelte'
	import Announce from '$lib/components/announce.svelte'
	import Note from '$lib/components/note.svelte'
	import {SpeedDial, SpeedDialButton} from "flowbite-svelte";
</script>

<svelte:head>
	<title>PetSafe</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full mx-auto">
	<Header />
	<Hero />
	<div
		class="flex flex-col items-center md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl justify-center w-full">
		<Note />
		<Features />
		<Announce />
		<Contact />
	</div>
	<Footer />
</div>
