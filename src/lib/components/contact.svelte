<script>
	import {
		faCapsules,
		faGlobe,
		faLocation,
		faLocationDot,
		faLocationPin,
		faMessage
	} from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
	import Item from './elements/item.svelte'
</script>

<div
	class="flex flex-col gap-5 md:flex-row p-7 w-full max-w-7xl justify-between mt-5 bg-white rounded-2xl shadow-xl"
>
	<div class="flex flex-col justify-center gap-3">
		<p class="text-3xl font-semibold text-purple mb-5">고객지원센터</p>
		<span class="bg-gray-10 rounded-3xl px-4 py-1">Tel. <tel>02-123-4567</tel></span>
		<span class="bg-gray-10 rounded-3xl px-4 py-1">E-mail. acdef@petsafe.co.kr</span>
	</div>

	<div class="grid grid-cols-2 md:flex md:flex-row gap-5">
		<Item name="카카오톡 문의" />
		<Item name="온라인 문의" />
		<Item name="찾아오시는 길" />

		<div
			class="flex flex-col gap-3 justify-center text-white bg-purple w-36 h-36 items-center rounded-2xl"
		>
			<p class="text-3xl text-white font-bold">Q/A</p>
			<p class="text-lg font-bold">자주묻는 질문</p>
		</div>
	</div>
</div>
