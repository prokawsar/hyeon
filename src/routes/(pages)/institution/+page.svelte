<script>
	// import { i, languages, switchLanguage } from '@inlang/sdk-js';

	import Header from '$lib/components/header.svelte'
	import HeroInstitution from '$lib/components/view/pages/institution/HeroInstitute.svelte'
	import Features from '$lib/components/view/pages/home/features.svelte'
	import Footer from '$lib/components/footer.svelte'
	import Contact from '$lib/components/view/pages/home/contact.svelte'
	import Announce from '$lib/components/view/pages/home/announce.svelte'
	import Note from '$lib/components/view/pages/home/note.svelte'
	import {SpeedDial, SpeedDialButton} from "flowbite-svelte";
	import MainTab from "$lib/components/view/pages/institution/MainTab.svelte";
</script>

<svelte:head>
	<title>PetSafe</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full mx-auto">
	<Header />
	<HeroInstitution />
	<div
		class="flex flex-col items-center md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl justify-center w-full">
		<MainTab/>
	</div>
	<Footer />
</div>
