<script>
	import Mike from '$lib/icons/mike.svelte'
	import ItemGray from './elements/itemGray.svelte'

	const texts = ['분석정보', '분석정보', '분석정보', '분석정보', '분석정보', '분석정보']
</script>

<div class="flex flex-col gap-5 px-3 md:px-0 md:flex-row w-full max-w-7xl justify-between mt-11">
	<div class="flex flex-col md:flex-row justify-between bg-white rounded-2xl shadow-xl w-full">
		<div class="md:w-2/5 relative flex flex-col gap-1 md:gap-3 pt-7 px-7">
			<p class="text-xl md:text-3xl font-semibold text-primary-300 mb-5">펫세이프 인증정보</p>
			<p class="font-normal text-2xl md:text-[40px] z-10">
				<span class="font-bold">인증</span>과 관련된 <span class="font-bold">정보</span>를 확인
				해보세요
			</p>
			<div class="hidden absolute bottom-0 right-0 sm:flex justify-end">
				<Mike />
			</div>
		</div>

		<div class="md:w-3/5 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-2 md:p-5">
			{#each texts as text}
				<ItemGray {text} />
			{/each}
		</div>
	</div>
</div>
