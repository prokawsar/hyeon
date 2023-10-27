<script lang="ts">
	import { faGlobe, faLocationDot, faCommentDots } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	export let name = '',
		qa = false

	const items: any = {
		'카카오톡 문의': faCommentDots,
		'온라인 문의': faGlobe,
		'찾아오시는 길': faLocationDot
	}
</script>

<div
	class="flex flex-col gap-3 justify-center text-white bg-primary-500 w-full h-36 items-center rounded-2xl">
	<Fa icon={items[name]} class={qa ? 'hidden' : ''} size="3x" />
	<p class="text-3xl text-white font-bold {qa ? '' : 'hidden'}">Q/A</p>
	<p class="text-sm md:text-lg font-bold">{name}</p>
</div>
