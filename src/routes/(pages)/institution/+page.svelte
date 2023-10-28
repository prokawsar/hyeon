<script>
	import Header from '$lib/components/header.svelte'
	import HeroInstitution from '$lib/components/view/pages/institution/HeroInstitute.svelte'
	import Footer from '$lib/components/footer.svelte'
	import MainTab from "$lib/components/view/pages/institution/MainTab.svelte";
</script>

<svelte:head>
	<title>PetSafe</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full mx-auto">
	<HeroInstitution />
	<div
		class="flex flex-col items-center md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl justify-center w-full">
		<MainTab/>
	</div>
	<Footer />
</div>
