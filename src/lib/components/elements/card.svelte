<script lang="ts">
	import Security from '$lib/icons/security.svelte'
	import Notepad from '$lib/icons/notepad.svelte'
	import Message from '$lib/icons/message.svelte'
	import Search from '$lib/icons/search.svelte'

	export let name = ''

	const items = {
		분석의뢰: Security,
		인증품목: Notepad,
		인증소개: Message,
		분석기관: Search
	}
</script>

<div
	class="shadow-md rounded-xl bg-white flex flex-col gap-5 items-center w-full justify-center h-56"
>
	<!-- <div class="bg-gray-200 rounded-full h-24 w-24"> -->
	<svelte:component this={items[name]} />
	<!-- </div> -->
	<p class="capitalize">{name}</p>
</div>
