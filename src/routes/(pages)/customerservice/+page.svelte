<script>
	import { Heading, P, Button } from 'flowbite-svelte'
	import { Section } from 'flowbite-svelte-blocks'
	import MainTab from '$lib/components/view/pages/customerservice/MainTab.svelte'
	import { csTabs } from '$lib/utils/const'
	import CsHero from '$lib/components/view/pages/customerservice/CsHero.svelte'
	import Notice from '$lib/components/view/pages/customerservice/Tabs/Notice.svelte'
	import Location from "$lib/components/view/pages/customerservice/Tabs/Location.svelte";

	let activeTab = csTabs[0]
</script>

<div class="flex flex-col justify-center items-center w-full mx-auto">
	<CsHero />
	<MainTab />

</div>
