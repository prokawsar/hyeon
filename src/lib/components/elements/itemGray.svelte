<script lang="ts">
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	export let text = ''
</script>

<button
	class="relative flex flex-col gap-3 justify-center text-white bg-gray-30 hover:bg-gray-10 w-full h-32 md:h-36 items-center rounded-2xl">
	<p class="text-base md:text-lg font-bold text-black">{text}</p>
	<div class="absolute bottom-2 right-2 bg-[#787878] p-2 rounded-full">
		<Fa icon={faArrowRight} class="text-white" />
	</div>
</button>
