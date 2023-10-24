<script lang="ts">
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	export let text = ''
</script>

<div
	class="relative flex flex-col gap-3 justify-center text-white bg-gray-30 w-48 md:w-52 h-36 items-center rounded-2xl"
>
	<p class="text-lg font-bold text-black">{text}</p>
	<div class="absolute bottom-2 right-2 bg-purple p-2 rounded-full">
		<Fa icon={faArrowRight} class="text-white" />
	</div>
</div>
