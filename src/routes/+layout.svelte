<script>
	import '../app.css'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import BackToTop from '$lib/components/elements/BackToTop.svelte'
	import Header from '$lib/components/header.svelte'
	import { Button, Modal } from 'flowbite-svelte'
	import Footer from '$lib/components/footer.svelte'

	onMount(() => {
		if (browser) {
			import('$lib/utils/tooltip')
		}
	})
	export let data
</script>

<Header />
<main class="dark:bg-gray-800">
	<div class="overflow-scroll mt-[61px] md:mt-[81px]">
		<slot />
	</div>
	<BackToTop />
	<Modal title="Change Log" open autoclose outsideclose>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{data.commitMeesage}</p>
		<svelte:fragment slot="footer">
			<Button color="alternative">확인</Button>
		</svelte:fragment>
	</Modal>
</main>
<Footer />
