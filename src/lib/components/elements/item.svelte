<script lang="ts">
	import { faGlobe, faLocationDot, faCommentDots } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	export let name = ''

	const items: any = {
		'카카오톡 문의': faCommentDots,
		'온라인 문의': faGlobe,
		'찾아오시는 길': faLocationDot
	}
</script>

<div
	class="flex flex-col gap-3 justify-center text-white bg-primary-500 w-36 h-36 items-center rounded-2xl"
>
	<Fa icon={items[name]} class="" size="3x" />
	<p class="text-lg font-bold">{name}</p>
</div>
