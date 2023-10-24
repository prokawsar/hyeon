<script>
	import '../app.css'
	import { page } from '$app/stores'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	onMount(() => {
		if (browser) {
			import('$lib/utils/tooltip')
		}
	})
</script>

<main class="bg-gray-20 pb-5">
	<slot />
</main>
