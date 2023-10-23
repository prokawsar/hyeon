<script>
	// import { i, languages, switchLanguage } from '@inlang/sdk-js';

	import Header from '$lib/components/header.svelte'
	import Banner from '$lib/components/banner.svelte'
	import Hero from '$lib/components/hero.svelte'
	import Features from '$lib/components/features.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
	<title>PetSafe</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full mx-auto">
	<Header />
	<!-- <Banner /> -->
	<Hero />
	<Features />
	<Footer />
</div>
