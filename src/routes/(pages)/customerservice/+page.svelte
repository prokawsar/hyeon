<script>
	import { Heading, P, Button } from 'flowbite-svelte'
	import { Section } from 'flowbite-svelte-blocks'
	import MainTab from '$lib/components/view/pages/customerservice/MainTab.svelte'
	import { csTabs } from '$lib/utils/const'
	import CsHero from '$lib/components/view/pages/customerservice/CsHero.svelte'

	let activeTab = csTabs[0]
</script>

<div class="flex flex-col justify-center items-center w-full mx-auto">
	<CsHero />
	<MainTab bind:activeTab />
	{#if activeTab == csTabs[0]}
		<div>Notice</div>
	{:else if activeTab == csTabs[1]}
		<div>Faq</div>
	{:else if activeTab == csTabs[2]}
		<div>qa</div>
	{:else}
		<div>extra</div>
	{/if}
</div>
