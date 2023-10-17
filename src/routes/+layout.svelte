<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			import('$lib/utils/tooltip');
		}
	});
</script>

<slot />
