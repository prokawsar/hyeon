<script>
	import Item from './elements/item.svelte'
</script>

<div class="flex flex-col gap-5 px-3 md:px-0 md:flex-row w-full max-w-7xl justify-between mt-11">
	<div
		class="flex flex-col md:flex-row p-4 gap-5 justify-between bg-white rounded-2xl shadow-xl w-full">
		<div class="flex flex-col justify-center gap-3">
			<p class="text-3xl font-semibold text-primary-500 mb-5">고객지원센터</p>
			<span class="bg-gray-10 rounded-3xl px-4 py-1 text-lg font-normal"
				>Tel. <tel>02-123-4567</tel></span>
			<span class="bg-gray-10 rounded-3xl px-4 py-1 text-lg font-normal"
				>E-mail. acdef@petsafe.co.kr</span>
		</div>

		<div class="grid grid-cols-2 lg:flex lg:flex-row gap-5">
			<Item name="카카오톡 문의" />
			<Item name="온라인 문의" />
			<Item name="찾아오시는 길" />
			<Item name="자주묻는 질문" qa />
		</div>
	</div>
</div>
