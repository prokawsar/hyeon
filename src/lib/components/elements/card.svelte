<script lang="ts">
	import Security from '$lib/icons/security.svelte'
	import Notepad from '$lib/icons/notepad.svelte'
	import Message from '$lib/icons/message.svelte'
	import Search from '$lib/icons/search.svelte'
	import type { ComponentType } from 'svelte'

	export let name = ''

	const items: any = {
		분석의뢰: Security as ComponentType,
		인증품목: Notepad as ComponentType,
		인증소개: Message as ComponentType,
		분석기관: Search as ComponentType
	}
</script>

<button
	class="shadow-lg rounded-xl bg-white hover:bg-slate-50 flex flex-col gap-5 items-center w-full justify-center h-56">
	<svelte:component this={items[name]} />
	<p class="capitalize text-base lg:text-xl font-medium">{name}</p>
</button>
