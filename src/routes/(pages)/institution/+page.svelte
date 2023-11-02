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
	<MainTab/>
</div>
