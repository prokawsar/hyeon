<script>
	import '../app.css'
	import { page } from '$app/stores'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import BackToTop from "$lib/components/elements/BackToTop.svelte";
	import Header from "$lib/components/header.svelte";

	onMount(() => {
		if (browser) {
			import('$lib/utils/tooltip')
		}
	})
</script>

<Header />
<main class="bg-gray-20">

	<div class="overflow-scroll mt-[81px]">
		<slot />
	</div>

	<BackToTop />
</main>
